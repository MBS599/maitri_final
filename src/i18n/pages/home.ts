import type { Dict } from '../LanguageContext';

const en = {
  motto: '"एक हात मैत्रीचा" • One Hand of Friendship',
  established: 'Established 2019',
  heroAlt: 'Volunteers of Maitri Foundation amid lush green trees',
  heroKicker: 'Maitri Welfare Foundation:',
  heroTitle1: 'Empowering Lives,',
  heroTitle2: 'Protecting Nature',
  heroP1: 'We are dedicated to ',
  heroStrong1: 'empowering lives',
  heroP2: ' and ',
  heroStrong2: 'protecting nature',
  heroP3: ' through sustainable social impact, environmental conservation, and community welfare initiatives across India.',
  donateNow: 'Donate Now',
  joinUs: 'Join Us',
  stats: ['Needy Helped', 'Environmental Events', 'Years of Impact'],
  pillars: [
    'Transparent and Accountable Operations',
    'Community-Driven Conservation Projects',
    'Direct Support for Marginalized Families',
  ],
  whoWeAre: 'Who we are',
  missionTitle: 'Our Mission & Vision',
  missionBody:
    'We established our Maitri Foundation back in 2019. We started this foundation to assist the needy ones as well as help our mother nature in every possible way. Together, we strive to make a meaningful difference.',
  aboutUs: 'About Us',
  slumAlt: 'Foundation Activities in Slum Areas',
  quote: '"Making a meaningful difference, one step at a time."',
  seedlingAlt: 'Hands holding a green plant seedling in fertile soil representing community conservation',
  approach:
    'Our approach balances the urgent, high-impact nature of environmental and social welfare with a warm, human-centric focus. We believe that by protecting our environment, we create a better world for everyone to thrive in.',
  eventsKicker: 'Events',
  highlightsTitle: 'Latest Highlights',
  viewAll: 'View All',
  highlights: [
    {
      category: 'Environment',
      title: 'Tree Plantation Drive',
      desc: 'Join us for our annual mega plantation event in suburban green belts to foster environmental sustainability.',
      location: 'Pune',
    },
    {
      category: 'Social Welfare',
      title: 'Community Food Distribution',
      desc: 'Providing essential ration kits and healthy cooked meals to support underprivileged families and elderly citizens.',
      location: 'Pune',
    },
    {
      category: 'Health & Care',
      title: 'Mega Blood Donation Camp',
      desc: 'Organizing robust community blood donation drives to aid city hospitals during critical blood shortages.',
      location: 'Pune',
    },
  ],
  gotQuestions: 'Got Questions?',
  faqTitle: 'Frequently Asked Questions',
  contactUs: 'Contact Us',
  faqs: [
    {
      q: 'What is the primary mission of Maitri Welfare Foundation?',
      a: 'Our primary mission is to empower communities through sustainable social welfare programs, including environmental conservation, tree plantation drives, and women empowerment through our Project Kaushalya.',
    },
    {
      q: 'Where is Maitri Welfare Foundation located?',
      a: 'We are based in Katraj, Pune (Maharashtra), and our primary on-ground activities are centered around the Pune region, though our digital community spans across India.',
    },
    {
      q: "How can I contribute to the foundation's work?",
      a: 'You can contribute by donating directly via our verified bank account details (available on our Support page), volunteering your time for our various drives, or spreading awareness about our social and environmental initiatives.',
    },
    {
      q: 'What is Project Kaushalya?',
      a: 'Project Kaushalya is our flagship women empowerment initiative that provides vocational training, financial literacy, and leadership skills to women from underprivileged backgrounds to help them become self-reliant.',
    },
    {
      q: 'Is Maitri Welfare Foundation a registered NGO?',
      a: 'Yes, we are a legally registered non-profit organization (NGO) under the registration number F-0062418(PUN).',
    },
  ],
  stayConnected: 'Stay Connected',
  ctaBody:
    'Follow our journey and become part of the change. We are always looking for passionate volunteers to help us grow our impact.',
  supportMission: 'Support Our Mission',
  meetTeam: 'Meet The Team',
};

const hi: typeof en = {
  motto: '"एक हात मैत्रीचा" • मैत्री का एक हाथ',
  established: 'स्थापना 2019',
  heroAlt: 'हरे-भरे पेड़ों के बीच मैत्री फाउंडेशन के स्वयंसेवक',
  heroKicker: 'मैत्री वेलफेयर फाउंडेशन:',
  heroTitle1: 'जीवन को सशक्त बनाना,',
  heroTitle2: 'प्रकृति की रक्षा करना',
  heroP1: 'हम सतत सामाजिक प्रभाव, पर्यावरण संरक्षण और सामुदायिक कल्याण की पहलों के माध्यम से पूरे भारत में ',
  heroStrong1: 'जीवन को सशक्त बनाने',
  heroP2: ' और ',
  heroStrong2: 'प्रकृति की रक्षा',
  heroP3: ' के लिए समर्पित हैं।',
  donateNow: 'अभी दान करें',
  joinUs: 'हमसे जुड़ें',
  stats: ['ज़रूरतमंदों की मदद', 'पर्यावरण कार्यक्रम', 'वर्षों का प्रभाव'],
  pillars: [
    'पारदर्शी और जवाबदेह कार्यप्रणाली',
    'समुदाय-आधारित संरक्षण परियोजनाएँ',
    'वंचित परिवारों को सीधी सहायता',
  ],
  whoWeAre: 'हम कौन हैं',
  missionTitle: 'हमारा मिशन और दृष्टि',
  missionBody:
    'हमने वर्ष 2019 में मैत्री फाउंडेशन की स्थापना की। इस फाउंडेशन की शुरुआत ज़रूरतमंदों की सहायता करने और हर संभव तरीके से धरती माँ की सेवा करने के लिए हुई। हम सब मिलकर एक सार्थक बदलाव लाने का प्रयास करते हैं।',
  aboutUs: 'हमारे बारे में',
  slumAlt: 'झुग्गी बस्तियों में फाउंडेशन की गतिविधियाँ',
  quote: '"एक-एक कदम बढ़ाकर, सार्थक बदलाव लाना।"',
  seedlingAlt: 'उपजाऊ मिट्टी में हरे पौधे को थामे हाथ, जो सामुदायिक संरक्षण का प्रतीक हैं',
  approach:
    'हमारा दृष्टिकोण पर्यावरण और समाज कल्याण के तात्कालिक, प्रभावशाली कार्यों को आत्मीय, मानव-केंद्रित सोच के साथ जोड़ता है। हमारा विश्वास है कि पर्यावरण की रक्षा करके हम सभी के फलने-फूलने के लिए एक बेहतर दुनिया बनाते हैं।',
  eventsKicker: 'कार्यक्रम',
  highlightsTitle: 'ताज़ा झलकियाँ',
  viewAll: 'सभी देखें',
  highlights: [
    {
      category: 'पर्यावरण',
      title: 'वृक्षारोपण अभियान',
      desc: 'पर्यावरणीय स्थिरता को बढ़ावा देने के लिए उपनगरीय हरित क्षेत्रों में हमारे वार्षिक महा-वृक्षारोपण कार्यक्रम में हमसे जुड़ें।',
      location: 'पुणे',
    },
    {
      category: 'समाज कल्याण',
      title: 'सामुदायिक भोजन वितरण',
      desc: 'वंचित परिवारों और बुज़ुर्ग नागरिकों की सहायता के लिए आवश्यक राशन किट और पौष्टिक पका हुआ भोजन उपलब्ध कराना।',
      location: 'पुणे',
    },
    {
      category: 'स्वास्थ्य और देखभाल',
      title: 'महा रक्तदान शिविर',
      desc: 'रक्त की गंभीर कमी के समय शहर के अस्पतालों की मदद के लिए बड़े पैमाने पर सामुदायिक रक्तदान शिविरों का आयोजन।',
      location: 'पुणे',
    },
  ],
  gotQuestions: 'कोई सवाल है?',
  faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
  contactUs: 'संपर्क करें',
  faqs: [
    {
      q: 'मैत्री वेलफेयर फाउंडेशन का मुख्य उद्देश्य क्या है?',
      a: 'हमारा मुख्य उद्देश्य सतत समाज कल्याण कार्यक्रमों के माध्यम से समुदायों को सशक्त बनाना है, जिनमें पर्यावरण संरक्षण, वृक्षारोपण अभियान और प्रोजेक्ट कौशल्या के ज़रिए महिला सशक्तिकरण शामिल हैं।',
    },
    {
      q: 'मैत्री वेलफेयर फाउंडेशन कहाँ स्थित है?',
      a: 'हम कात्रज, पुणे (महाराष्ट्र) में स्थित हैं। हमारी ज़मीनी गतिविधियाँ मुख्य रूप से पुणे क्षेत्र में होती हैं, जबकि हमारा डिजिटल समुदाय पूरे भारत में फैला है।',
    },
    {
      q: 'फाउंडेशन के कार्य में योगदान कैसे दिया जा सकता है?',
      a: 'आप हमारे सत्यापित बैंक खाते (सहयोग पृष्ठ पर उपलब्ध) के माध्यम से सीधे दान करके, हमारे विभिन्न अभियानों में स्वयंसेवक के रूप में समय देकर, या हमारी सामाजिक और पर्यावरणीय पहलों के बारे में जागरूकता फैलाकर योगदान दे सकते हैं।',
    },
    {
      q: 'प्रोजेक्ट कौशल्या क्या है?',
      a: 'प्रोजेक्ट कौशल्या हमारी प्रमुख महिला सशक्तिकरण पहल है, जो वंचित पृष्ठभूमि की महिलाओं को आत्मनिर्भर बनाने के लिए व्यावसायिक प्रशिक्षण, वित्तीय साक्षरता और नेतृत्व कौशल प्रदान करती है।',
    },
    {
      q: 'क्या मैत्री वेलफेयर फाउंडेशन एक पंजीकृत एनजीओ है?',
      a: 'जी हाँ, हम पंजीकरण संख्या F-0062418(PUN) के अंतर्गत विधिवत पंजीकृत एक गैर-लाभकारी संस्था (एनजीओ) हैं।',
    },
  ],
  stayConnected: 'जुड़े रहें',
  ctaBody:
    'हमारी यात्रा से जुड़ें और बदलाव का हिस्सा बनें। अपने प्रभाव को और बढ़ाने के लिए हमें हमेशा उत्साही स्वयंसेवकों की तलाश रहती है।',
  supportMission: 'हमारे मिशन का समर्थन करें',
  meetTeam: 'टीम से मिलें',
};

const mr: typeof en = {
  motto: '"एक हात मैत्रीचा" • मैत्रीचा एक हात',
  established: 'स्थापना 2019',
  heroAlt: 'हिरव्यागार झाडांमध्ये मैत्री फाउंडेशनचे स्वयंसेवक',
  heroKicker: 'मैत्री वेलफेअर फाउंडेशन:',
  heroTitle1: 'जीवन सक्षम करूया,',
  heroTitle2: 'निसर्ग जपूया',
  heroP1: 'शाश्वत सामाजिक कार्य, पर्यावरण संवर्धन आणि समाजकल्याणाच्या उपक्रमांद्वारे संपूर्ण भारतात ',
  heroStrong1: 'जीवन सक्षम करणे',
  heroP2: ' आणि ',
  heroStrong2: 'निसर्गाचे रक्षण करणे',
  heroP3: ' यासाठी आम्ही कटिबद्ध आहोत.',
  donateNow: 'आता देणगी द्या',
  joinUs: 'आमच्यात सामील व्हा',
  stats: ['गरजूंना मदत', 'पर्यावरण उपक्रम', 'कार्याची वर्षे'],
  pillars: [
    'पारदर्शक आणि उत्तरदायी कार्यपद्धती',
    'समाजाच्या सहभागातून संवर्धन प्रकल्प',
    'वंचित कुटुंबांना थेट मदत',
  ],
  whoWeAre: 'आम्ही कोण आहोत',
  missionTitle: 'आमचे ध्येय आणि दृष्टी',
  missionBody:
    'आम्ही 2019 मध्ये मैत्री फाउंडेशनची स्थापना केली. गरजूंना मदत करणे आणि शक्य त्या सर्व मार्गांनी निसर्गमातेची सेवा करणे, या हेतूने हे फाउंडेशन सुरू झाले. सर्वांनी मिळून अर्थपूर्ण बदल घडवण्याचा आमचा प्रयत्न आहे.',
  aboutUs: 'आमच्याबद्दल',
  slumAlt: 'झोपडपट्टी भागातील फाउंडेशनचे उपक्रम',
  quote: '"एकेक पाऊल टाकत, अर्थपूर्ण बदल घडवूया."',
  seedlingAlt: 'सुपीक मातीतील हिरवे रोप हातात धरलेले, सामुदायिक संवर्धनाचे प्रतीक',
  approach:
    'पर्यावरण आणि समाजकल्याणाच्या तातडीच्या, प्रभावी कामाला आम्ही आपुलकीच्या, माणूसकेंद्री दृष्टिकोनाची जोड देतो. पर्यावरणाचे रक्षण करून आपण सर्वांना बहरता येईल असे अधिक चांगले जग निर्माण करतो, असा आमचा विश्वास आहे.',
  eventsKicker: 'उपक्रम',
  highlightsTitle: 'ताज्या घडामोडी',
  viewAll: 'सर्व पहा',
  highlights: [
    {
      category: 'पर्यावरण',
      title: 'वृक्षारोपण मोहीम',
      desc: 'पर्यावरणीय शाश्वततेसाठी उपनगरातील हरित पट्ट्यांमध्ये होणाऱ्या आमच्या वार्षिक महा-वृक्षारोपण उपक्रमात सहभागी व्हा.',
      location: 'पुणे',
    },
    {
      category: 'समाजकल्याण',
      title: 'सामुदायिक अन्नवाटप',
      desc: 'वंचित कुटुंबे आणि ज्येष्ठ नागरिकांच्या आधारासाठी आवश्यक रेशन किट आणि पौष्टिक शिजवलेले जेवण पुरवणे.',
      location: 'पुणे',
    },
    {
      category: 'आरोग्य आणि सेवा',
      title: 'महा रक्तदान शिबिर',
      desc: 'रक्ताच्या तीव्र तुटवड्याच्या काळात शहरातील रुग्णालयांना मदत व्हावी म्हणून मोठ्या प्रमाणावर सामुदायिक रक्तदान शिबिरांचे आयोजन.',
      location: 'पुणे',
    },
  ],
  gotQuestions: 'काही प्रश्न आहेत?',
  faqTitle: 'वारंवार विचारले जाणारे प्रश्न',
  contactUs: 'संपर्क साधा',
  faqs: [
    {
      q: 'मैत्री वेलफेअर फाउंडेशनचे मुख्य ध्येय काय आहे?',
      a: 'शाश्वत समाजकल्याण उपक्रमांद्वारे समाजाला सक्षम करणे हे आमचे मुख्य ध्येय आहे. यात पर्यावरण संवर्धन, वृक्षारोपण मोहिमा आणि प्रोजेक्ट कौशल्याद्वारे महिला सक्षमीकरण यांचा समावेश आहे.',
    },
    {
      q: 'मैत्री वेलफेअर फाउंडेशन कुठे आहे?',
      a: 'आम्ही कात्रज, पुणे (महाराष्ट्र) येथे आहोत. आमचे प्रत्यक्ष कार्य प्रामुख्याने पुणे परिसरात चालते, तर आमचा डिजिटल परिवार संपूर्ण भारतभर पसरलेला आहे.',
    },
    {
      q: 'फाउंडेशनच्या कार्यात हातभार कसा लावता येईल?',
      a: 'आमच्या सत्यापित बँक खात्यात (सहयोग पानावर उपलब्ध) थेट देणगी देऊन, आमच्या विविध मोहिमांसाठी स्वयंसेवक म्हणून वेळ देऊन किंवा आमच्या सामाजिक व पर्यावरणीय उपक्रमांबद्दल जनजागृती करून तुम्ही हातभार लावू शकता.',
    },
    {
      q: 'प्रोजेक्ट कौशल्या म्हणजे काय?',
      a: 'प्रोजेक्ट कौशल्या हा आमचा प्रमुख महिला सक्षमीकरण उपक्रम आहे. वंचित पार्श्वभूमीतील महिलांना आत्मनिर्भर होता यावे यासाठी यात व्यावसायिक प्रशिक्षण, आर्थिक साक्षरता आणि नेतृत्व कौशल्ये दिली जातात.',
    },
    {
      q: 'मैत्री वेलफेअर फाउंडेशन ही नोंदणीकृत संस्था आहे का?',
      a: 'होय, आम्ही नोंदणी क्रमांक F-0062418(PUN) अंतर्गत कायदेशीररीत्या नोंदणीकृत ना-नफा संस्था (एनजीओ) आहोत.',
    },
  ],
  stayConnected: 'संपर्कात राहा',
  ctaBody:
    'आमच्या प्रवासात सहभागी व्हा आणि बदलाचा भाग बना. आमचे कार्य वाढवण्यासाठी आम्ही नेहमीच उत्साही स्वयंसेवकांच्या शोधात असतो.',
  supportMission: 'आमच्या ध्येयाला पाठबळ द्या',
  meetTeam: 'आमची टीम भेटा',
};

export const homeDict: Dict<typeof en> = { en, hi, mr };
