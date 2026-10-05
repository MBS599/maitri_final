import type { Dict } from '../LanguageContext';

const en = {
  hero: {
    bgAlt: 'Team background',
    title: 'Meet Our Compassionate Team',
    subtitle:
      'A dedicated group of professionals and community leaders united by a single mission: creating sustainable social change through empathy and action.',
  },
  core: {
    eyebrow: 'Governance',
    title: 'Core Committee',
    subtitle: "The dedicated individuals guiding Maitri's mission and strategic decisions.",
  },
  roles: {
    president: 'President',
    vicePresident: 'Vice President',
    secretary: 'Secretary',
    jointSecretary: 'Joint Secretary',
    treasurer: 'Treasurer',
    directorEvents: 'Director (Event Management)',
    directorSocial: 'Director (Social Media)',
    directorKaushalya: 'Director (Kaushalya)',
    jointDirectorKaushalya: 'Joint Director (Kaushalya),',
    teamLeaderPromotion: 'Team Leader (Promotion & Marketing)',
    executiveRep: 'Executive Representative',
    committeeMember: 'Committee Member',
    committeeMemberReport: 'Committee Member (Report Writing)',
  },
  awards: {
    eyebrow: 'Excellence in Service',
    title: 'Best Volunteer Award',
    subtitle:
      'Honoring the dedicated individuals who have gone above and beyond to serve the community through the Maitri Welfare Foundation.',
    maitrianOfYear: 'Maitrian of the Year',
    awardedYear: 'Awarded Year:',
    descs: [
      'Always active in groups and events, providing invaluable support and help whenever possible.',
      "Recognized for his exceptional financial management and transparency in handling the foundation's resources.",
      'Awarded for his creative leadership in enhancing our social media presence and digital outreach.',
    ],
  },
  voices: {
    eyebrow: 'Collective Impact',
    title: 'Voices of Maitri',
    subtitle:
      'Recognizing outstanding teamwork, exceptional outreach, and collective department excellence driving our mission forward.',
    badge: 'Department Excellence',
    teamName: 'Social Media Team',
    desc: "Honored for brilliant digital storytelling, exceptional brand promotion, and expanding Maitri's digital footprint across the nation.",
  },
  steering: {
    eyebrow: 'Governance',
    title: 'The Steering Committee',
    items: ['Finance Committee', 'Ethics & Governance', 'Community Impact'],
    desc: "Strategic oversight and guidance ensuring the foundation's long-term sustainability.",
  },
};

const hi: typeof en = {
  hero: {
    bgAlt: 'टीम की पृष्ठभूमि छवि',
    title: 'मिलिए हमारी संवेदनशील टीम से',
    subtitle:
      'समर्पित पेशेवरों और सामुदायिक नेतृत्वकर्ताओं का एक समूह, जो एक ही ध्येय से जुड़ा है: संवेदना और कर्म के माध्यम से स्थायी सामाजिक परिवर्तन लाना।',
  },
  core: {
    eyebrow: 'शासन व्यवस्था',
    title: 'मुख्य समिति',
    subtitle: 'वे समर्पित लोग जो मैत्री के मिशन और रणनीतिक निर्णयों का मार्गदर्शन करते हैं।',
  },
  roles: {
    president: 'अध्यक्ष',
    vicePresident: 'उपाध्यक्ष',
    secretary: 'सचिव',
    jointSecretary: 'संयुक्त सचिव',
    treasurer: 'कोषाध्यक्ष',
    directorEvents: 'निदेशक (कार्यक्रम प्रबंधन)',
    directorSocial: 'निदेशक (सोशल मीडिया)',
    directorKaushalya: 'निदेशक (कौशल्या)',
    jointDirectorKaushalya: 'संयुक्त निदेशक (कौशल्या),',
    teamLeaderPromotion: 'टीम लीडर (प्रचार एवं मार्केटिंग)',
    executiveRep: 'कार्यकारी प्रतिनिधि',
    committeeMember: 'समिति सदस्य',
    committeeMemberReport: 'समिति सदस्य (रिपोर्ट लेखन)',
  },
  awards: {
    eyebrow: 'सेवा में उत्कृष्टता',
    title: 'सर्वश्रेष्ठ स्वयंसेवक पुरस्कार',
    subtitle:
      'उन समर्पित व्यक्तियों का सम्मान, जिन्होंने मैत्री वेलफेयर फाउंडेशन के माध्यम से समाज की सेवा में अपेक्षा से कहीं बढ़कर योगदान दिया है।',
    maitrianOfYear: 'मैत्रियन ऑफ द ईयर',
    awardedYear: 'पुरस्कार वर्ष:',
    descs: [
      'समूहों और कार्यक्रमों में सदैव सक्रिय, और जब भी संभव हो, अमूल्य सहयोग और सहायता देने वाली।',
      'फाउंडेशन के संसाधनों के प्रबंधन में उत्कृष्ट वित्तीय कुशलता और पारदर्शिता के लिए सम्मानित।',
      'हमारी सोशल मीडिया उपस्थिति और डिजिटल पहुँच बढ़ाने में रचनात्मक नेतृत्व के लिए पुरस्कृत।',
    ],
  },
  voices: {
    eyebrow: 'सामूहिक प्रभाव',
    title: 'मैत्री की आवाज़ें',
    subtitle:
      'उत्कृष्ट टीमवर्क, असाधारण जनसंपर्क और विभागीय उत्कृष्टता का सम्मान, जो हमारे मिशन को आगे बढ़ा रहे हैं।',
    badge: 'विभागीय उत्कृष्टता',
    teamName: 'सोशल मीडिया टीम',
    desc: 'शानदार डिजिटल कहानी-कथन, उत्कृष्ट ब्रांड प्रचार और देशभर में मैत्री की डिजिटल पहचान बढ़ाने के लिए सम्मानित।',
  },
  steering: {
    eyebrow: 'शासन व्यवस्था',
    title: 'संचालन समिति',
    items: ['वित्त समिति', 'नैतिकता एवं सुशासन', 'सामुदायिक प्रभाव'],
    desc: 'फाउंडेशन की दीर्घकालिक स्थिरता सुनिश्चित करने हेतु रणनीतिक निगरानी और मार्गदर्शन।',
  },
};

const mr: typeof en = {
  hero: {
    bgAlt: 'टीमची पार्श्वभूमी प्रतिमा',
    title: 'भेटा आमच्या संवेदनशील टीमला',
    subtitle:
      'एकाच ध्येयाने जोडलेला समर्पित व्यावसायिक आणि समाजातील नेतृत्वाचा समूह: सहानुभूती आणि कृतीतून शाश्वत सामाजिक परिवर्तन घडवणे.',
  },
  core: {
    eyebrow: 'प्रशासन',
    title: 'मुख्य समिती',
    subtitle: 'मैत्रीच्या ध्येयाला आणि धोरणात्मक निर्णयांना दिशा देणारी समर्पित मंडळी.',
  },
  roles: {
    president: 'अध्यक्ष',
    vicePresident: 'उपाध्यक्ष',
    secretary: 'सचिव',
    jointSecretary: 'सहसचिव',
    treasurer: 'खजिनदार',
    directorEvents: 'संचालक (कार्यक्रम व्यवस्थापन)',
    directorSocial: 'संचालक (सोशल मीडिया)',
    directorKaushalya: 'संचालक (कौशल्या)',
    jointDirectorKaushalya: 'सहसंचालक (कौशल्या),',
    teamLeaderPromotion: 'टीम लीडर (प्रसिद्धी व मार्केटिंग)',
    executiveRep: 'कार्यकारी प्रतिनिधी',
    committeeMember: 'समिती सदस्य',
    committeeMemberReport: 'समिती सदस्य (अहवाल लेखन)',
  },
  awards: {
    eyebrow: 'सेवेतील उत्कृष्टता',
    title: 'सर्वोत्कृष्ट स्वयंसेवक पुरस्कार',
    subtitle:
      'मैत्री वेलफेअर फाउंडेशनच्या माध्यमातून समाजसेवेत अपेक्षेपलीकडे योगदान देणाऱ्या समर्पित व्यक्तींचा गौरव.',
    maitrianOfYear: 'मैत्रियन ऑफ द इयर',
    awardedYear: 'पुरस्कार वर्ष:',
    descs: [
      'गट आणि कार्यक्रमांमध्ये नेहमी सक्रिय, आणि शक्य तेव्हा मोलाचा आधार व मदत करणाऱ्या.',
      'फाउंडेशनच्या संसाधनांच्या हाताळणीतील उत्कृष्ट आर्थिक व्यवस्थापन आणि पारदर्शकतेसाठी सन्मानित.',
      'आमची सोशल मीडिया उपस्थिती आणि डिजिटल पोहोच वाढवण्यातील सर्जनशील नेतृत्वासाठी पुरस्कृत.',
    ],
  },
  voices: {
    eyebrow: 'सामूहिक प्रभाव',
    title: 'मैत्रीचे आवाज',
    subtitle:
      'उत्कृष्ट टीमवर्क, उल्लेखनीय जनसंपर्क आणि आमचे ध्येय पुढे नेणाऱ्या विभागीय उत्कृष्टतेचा सन्मान.',
    badge: 'विभागीय उत्कृष्टता',
    teamName: 'सोशल मीडिया टीम',
    desc: 'प्रभावी डिजिटल कथाकथन, उत्कृष्ट ब्रँड प्रसिद्धी आणि देशभरात मैत्रीची डिजिटल ओळख विस्तारल्याबद्दल सन्मानित.',
  },
  steering: {
    eyebrow: 'प्रशासन',
    title: 'सुकाणू समिती',
    items: ['वित्त समिती', 'नीतिमत्ता व सुशासन', 'सामुदायिक प्रभाव'],
    desc: 'फाउंडेशनची दीर्घकालीन शाश्वतता सुनिश्चित करणारे धोरणात्मक देखरेख व मार्गदर्शन.',
  },
};

export const teamDict: Dict<typeof en> = { en, hi, mr };
