import os
import sys
import re
import json
import urllib.request
from datetime import datetime
import instaloader

try:
    sys.stdout.reconfigure(encoding='utf-8')
    sys.stderr.reconfigure(encoding='utf-8')
except Exception:
    pass

DATA_FILE = os.path.join('src', 'data', 'pastEventsInstagram.json')
IMAGES_DIR = os.path.join('public', 'instagram')
URLS_FILE = os.path.join('src', 'data', 'instagram_urls.txt')

os.makedirs('src/data', exist_ok=True)
os.makedirs(IMAGES_DIR, exist_ok=True)

def extract_shortcode(url_or_code):
    match = re.search(r'instagram\.com/(?:p|reel|tv)/([A-Za-z0-9_-]+)', url_or_code)
    if match:
        return match.group(1)
    clean = url_or_code.strip().strip('/')
    if '/' in clean:
        return clean.split('/')[-1]
    return clean

def load_existing():
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception:
            return []
    return []

def save_data(items):
    # Sort descending by raw date
    items.sort(key=lambda x: x.get('timestamp', 0), reverse=True)
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        json.dump(items, f, ensure_ascii=False, indent=2)

def detect_category(caption):
    c = caption.lower()
    if any(k in c for k in ['blood', 'health', 'medical', 'hospital', 'doctor', 'आरोग्य', 'रक्तदान', 'शिबिर']):
        return 'Health'
    if any(k in c for k in ['school', 'education', 'book', 'uniform', 'kit', 'student', 'शिक्षण', 'शाळा', 'विद्यार्थी', 'अभ्यास']):
        return 'Education'
    if any(k in c for k in ['tree', 'environment', 'plant', 'nature', 'वृक्ष', 'झाडे', 'पर्यावरण', 'स्वच्छता', 'cleaning', 'fortcleaning', 'किल्ला', 'किल्ले', 'सिंहगड', 'plastic', 'कचरा']):
        return 'Environment'
    if any(k in c for k in ['woman', 'women', 'mahila', 'girl', 'महिला', 'स्त्री', 'कौशल्य', 'साडी']):
        return 'Women Empowerment'
    return 'Social Welfare'

def process_url(url_or_code, L=None):
    code = extract_shortcode(url_or_code)
    if not code:
        print(f"Could not parse shortcode from: {url_or_code}")
        return None

    if L is None:
        L = instaloader.Instaloader()

    existing = load_existing()
    existing_map = {item['shortcode']: item for item in existing}

    img_filename = f"{code}.jpg"
    img_dest = os.path.join(IMAGES_DIR, img_filename)
    video_filename = f"{code}.mp4"
    video_dest = os.path.join(IMAGES_DIR, video_filename)

    print(f"Fetching Instagram post: {code} ...")
    try:
        post = instaloader.Post.from_shortcode(L.context, code)
    except Exception as e:
        print(f"Error fetching post {code}: {e}")
        return None

    # Download image if not already present or if small
    if not os.path.exists(img_dest) or os.path.getsize(img_dest) < 1000:
        try:
            urllib.request.urlretrieve(post.url, img_dest)
            print(f"Saved image to {img_dest} ({os.path.getsize(img_dest)} bytes)")
        except Exception as e:
            print(f"Error downloading image: {e}")

    # Download video if it is a video/reel
    has_video = False
    if post.is_video and post.video_url:
        try:
            if not os.path.exists(video_dest) or os.path.getsize(video_dest) < 1000:
                print(f"Downloading reel video for {code} ...")
                urllib.request.urlretrieve(post.video_url, video_dest)
                print(f"Saved video to {video_dest} ({os.path.getsize(video_dest)} bytes)")
            has_video = True
        except Exception as e:
            print(f"Error downloading video: {e}")

    caption = post.caption or ''
    # Generate clean title from first line of caption
    lines = [line.strip() for line in caption.split('\n') if line.strip() and not line.strip().startswith('#')]
    title = lines[0] if lines else f"Maitri Event - {post.date.strftime('%B %Y')}"
    if len(title) > 65:
        title = title[:62] + '...'

    item_data = {
        'shortcode': code,
        'title': title,
        'caption': caption,
        'category': detect_category(caption),
        'date': post.date.strftime('%B %d, %Y'),
        'year': post.date.year,
        'timestamp': int(post.date.timestamp()),
        'img': f"/instagram/{img_filename}",
        'video': f"/instagram/{video_filename}" if has_video else None,
        'url': f"https://www.instagram.com/p/{code}/",
        'likes': post.likes,
        'isVideo': post.is_video
    }

    existing_map[code] = item_data
    save_data(list(existing_map.values()))
    print(f"Successfully processed {code} ({item_data['date']}) - {title}")
    return item_data

def process_file():
    if not os.path.exists(URLS_FILE):
        return
    with open(URLS_FILE, 'r', encoding='utf-8') as f:
        urls = [line.strip() for line in f if line.strip() and not line.startswith('#')]
    if not urls:
        return
    L = instaloader.Instaloader()
    for u in urls:
        process_url(u, L)

if __name__ == '__main__':
    import sys
    if len(sys.argv) > 1:
        process_url(sys.argv[1])
    else:
        process_file()
