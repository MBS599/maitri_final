import type { Dict } from '../LanguageContext';

const en = {
  heroTitle: 'News & Media',
  heroBody: 'Stay updated with our latest news coverage and media highlights as we continue to make a difference.',
  highlightsTitle: 'Media Highlights',
  readFull: 'Read Full Story',
  news: [
    {
      title: 'Blood Donation Camp at Tulshibaug',
      source: 'Saamana News',
      date: 'August 2025',
      desc: 'Maitri Welfare Foundation partnered with Tulshibaug Ganeshotsav Mandal Trust for a mega blood donation camp, where 561 youths donated blood for a social cause.',
    },
    {
      title: 'Food Kit Distribution in Shirur',
      source: 'Pudhari News',
      date: 'July 2024',
      desc: 'In a joint effort, Maitri Foundation distributed essential food kits containing wheat, rice, oil, and sugar to 125 underprivileged families to support their livelihoods.',
    },
    {
      title: 'Community Health Initiative Coverage',
      source: 'Local News Daily',
      date: 'August 2025',
      desc: 'Extensive media coverage of our health and social welfare initiatives, highlighting the enthusiasm of volunteers and the impact on the local community.',
    },
  ],
  inquiriesTitle: 'For Media Inquiries',
  inquiriesBody:
    'Are you a journalist or researcher interested in our work? Get in touch for high-res photos, interviews, or press kits.',
  contactDesk: 'Contact Media Desk',
  close: 'Close',
  modalBody:
    "This media coverage highlights our foundation's commitment to humanitarian causes and community development. Through collaborative efforts with local trusts and generous donors, we continue to strive for a positive impact on society.",
  sourceLabel: 'Source: ',
  newsLead: 'Have a news lead? Contact us →',
};

const hi: typeof en = {
  heroTitle: 'समाचार और मीडिया',
  heroBody: 'बदलाव लाने की हमारी निरंतर यात्रा से जुड़ी ताज़ा ख़बरों और मीडिया झलकियों से अपडेट रहें।',
  highlightsTitle: 'मीडिया झलकियाँ',
  readFull: 'पूरी ख़बर पढ़ें',
  news: [
    {
      title: 'तुलशीबाग में रक्तदान शिविर',
      source: 'सामना',
      date: 'अगस्त 2025',
      desc: 'मैत्री वेलफेयर फाउंडेशन ने तुलशीबाग गणेशोत्सव मंडल ट्रस्ट के साथ मिलकर एक महा रक्तदान शिविर आयोजित किया, जिसमें 561 युवाओं ने सामाजिक उद्देश्य के लिए रक्तदान किया।',
    },
    {
      title: 'शिरूर में खाद्य किट वितरण',
      source: 'पुढारी',
      date: 'जुलाई 2024',
      desc: 'संयुक्त प्रयास के तहत मैत्री फाउंडेशन ने 125 वंचित परिवारों को उनकी आजीविका में सहायता के लिए गेहूँ, चावल, तेल और चीनी वाली आवश्यक खाद्य किट वितरित कीं।',
    },
    {
      title: 'सामुदायिक स्वास्थ्य पहल का कवरेज',
      source: 'स्थानीय दैनिक समाचार',
      date: 'अगस्त 2025',
      desc: 'हमारी स्वास्थ्य और समाज कल्याण पहलों का व्यापक मीडिया कवरेज, जिसमें स्वयंसेवकों का उत्साह और स्थानीय समुदाय पर पड़ा प्रभाव दर्शाया गया।',
    },
  ],
  inquiriesTitle: 'मीडिया पूछताछ के लिए',
  inquiriesBody:
    'क्या आप हमारे कार्य में रुचि रखने वाले पत्रकार या शोधकर्ता हैं? हाई-रिज़ॉल्यूशन तस्वीरों, साक्षात्कार या प्रेस किट के लिए हमसे संपर्क करें।',
  contactDesk: 'मीडिया डेस्क से संपर्क करें',
  close: 'बंद करें',
  modalBody:
    'यह मीडिया कवरेज मानवीय कार्यों और सामुदायिक विकास के प्रति हमारे फाउंडेशन की प्रतिबद्धता को दर्शाता है। स्थानीय ट्रस्टों और उदार दानदाताओं के सहयोग से हम समाज पर सकारात्मक प्रभाव डालने के लिए निरंतर प्रयासरत हैं।',
  sourceLabel: 'स्रोत: ',
  newsLead: 'कोई ख़बर है? हमसे संपर्क करें →',
};

const mr: typeof en = {
  heroTitle: 'बातम्या आणि माध्यमे',
  heroBody: 'बदल घडवण्याच्या आमच्या अविरत प्रवासातील ताज्या बातम्या आणि माध्यमांतील ठळक घडामोडींसह अद्ययावत राहा.',
  highlightsTitle: 'माध्यमांतील ठळक घडामोडी',
  readFull: 'संपूर्ण बातमी वाचा',
  news: [
    {
      title: 'तुळशीबाग येथे रक्तदान शिबिर',
      source: 'सामना',
      date: 'ऑगस्ट 2025',
      desc: 'मैत्री वेलफेअर फाउंडेशनने तुळशीबाग गणेशोत्सव मंडळ ट्रस्टसोबत महा रक्तदान शिबिर आयोजित केले, ज्यात 561 तरुणांनी सामाजिक भावनेतून रक्तदान केले.',
    },
    {
      title: 'शिरूर येथे अन्नधान्य किट वाटप',
      source: 'पुढारी',
      date: 'जुलै 2024',
      desc: 'संयुक्त प्रयत्नातून मैत्री फाउंडेशनने 125 वंचित कुटुंबांना त्यांच्या उपजीविकेसाठी गहू, तांदूळ, तेल आणि साखर असलेल्या आवश्यक अन्नधान्य किटचे वाटप केले.',
    },
    {
      title: 'सामुदायिक आरोग्य उपक्रमाचे वृत्तांकन',
      source: 'स्थानिक दैनिक',
      date: 'ऑगस्ट 2025',
      desc: 'आमच्या आरोग्य आणि समाजकल्याण उपक्रमांचे व्यापक वृत्तांकन, ज्यात स्वयंसेवकांचा उत्साह आणि स्थानिक समाजावर झालेला परिणाम अधोरेखित केला आहे.',
    },
  ],
  inquiriesTitle: 'माध्यम चौकशीसाठी',
  inquiriesBody:
    'आमच्या कार्यात रस असलेले पत्रकार किंवा संशोधक आहात का? उच्च दर्जाचे फोटो, मुलाखती किंवा प्रेस किटसाठी आमच्याशी संपर्क साधा.',
  contactDesk: 'मीडिया डेस्कशी संपर्क साधा',
  close: 'बंद करा',
  modalBody:
    'हे वृत्तांकन मानवतावादी कार्य आणि सामुदायिक विकासाप्रती आमच्या फाउंडेशनची बांधिलकी दर्शवते. स्थानिक ट्रस्ट आणि उदार देणगीदारांच्या सहकार्याने समाजावर सकारात्मक परिणाम घडवण्यासाठी आम्ही सतत प्रयत्नशील आहोत.',
  sourceLabel: 'स्रोत: ',
  newsLead: 'तुमच्याकडे एखादी बातमी आहे? आमच्याशी संपर्क साधा →',
};

export const mediaDict: Dict<typeof en> = { en, hi, mr };
