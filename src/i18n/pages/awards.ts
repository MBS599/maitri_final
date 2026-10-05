import type { Dict } from '../LanguageContext';

const en = {
  heroAlt: 'Awards Background',
  badge: 'Our Achievements',
  heroTitle: 'Awards & Recognition: Our Social Impact',
  heroText: 'A decade of dedicated service recognized by esteemed institutions. These awards are a testament to our volunteers, donors, and the communities we serve.',
  awards: [
    { title: 'Corona Yoddha Award', desc: 'Honored for exceptional service and selfless dedication during the COVID-19 pandemic, providing essential supplies, medical aid, and frontline support to thousands in need.' },
    { title: 'Samaj Seva Gaurav Award', desc: 'Honored for outstanding contributions to community welfare and social empowerment through persistent grassroots initiatives.' },
    { title: 'Vishesh Sanman Award', desc: 'Awarded for extraordinary dedication to community development and visionary social leadership in the year 2025.' },
    { title: 'Kartutva Gaurav Award', desc: 'Honored for exceptional leadership and significant contributions to social welfare and community empowerment.' },
    { title: 'Maharashtra Vishesh Gaurav Award', desc: 'Recognized for outstanding contributions to public welfare, social upliftment, and community service initiatives.' },
  ],
  stats: ['Awards', 'Lives Impacted Annually', 'Of Continuous Service'],
  ctaTitle: 'Be Part of the Success',
  ctaText: 'Every award we win is shared with our supporters. Your contribution fuels the impact that makes these recognitions possible.',
  donate: 'Donate Now',
  volunteer: 'Volunteer',
};

const hi: typeof en = {
  heroAlt: 'पुरस्कारों की पृष्ठभूमि',
  badge: 'हमारी उपलब्धियाँ',
  heroTitle: 'पुरस्कार और सम्मान: हमारा सामाजिक प्रभाव',
  heroText: 'समर्पित सेवा के वर्षों को प्रतिष्ठित संस्थाओं ने सराहा है। ये पुरस्कार हमारे स्वयंसेवकों, दानदाताओं और उन समुदायों के प्रति समर्पण का प्रमाण हैं जिनकी हम सेवा करते हैं।',
  awards: [
    { title: 'कोरोना योद्धा पुरस्कार', desc: 'COVID-19 महामारी के दौरान असाधारण सेवा और निःस्वार्थ समर्पण के लिए सम्मानित — हज़ारों ज़रूरतमंदों तक आवश्यक सामग्री, चिकित्सा सहायता और अग्रिम पंक्ति का सहयोग पहुँचाया।' },
    { title: 'समाज सेवा गौरव पुरस्कार', desc: 'निरंतर ज़मीनी पहलों के माध्यम से सामुदायिक कल्याण और सामाजिक सशक्तिकरण में उत्कृष्ट योगदान के लिए सम्मानित।' },
    { title: 'विशेष सम्मान पुरस्कार', desc: 'वर्ष 2025 में सामुदायिक विकास के प्रति असाधारण समर्पण और दूरदर्शी सामाजिक नेतृत्व के लिए प्रदान किया गया।' },
    { title: 'कर्तृत्व गौरव पुरस्कार', desc: 'असाधारण नेतृत्व तथा समाज कल्याण और सामुदायिक सशक्तिकरण में महत्वपूर्ण योगदान के लिए सम्मानित।' },
    { title: 'महाराष्ट्र विशेष गौरव पुरस्कार', desc: 'जनकल्याण, सामाजिक उत्थान और सामुदायिक सेवा पहलों में उत्कृष्ट योगदान के लिए सम्मानित।' },
  ],
  stats: ['पुरस्कार', 'हर साल लाभान्वित जीवन', 'निरंतर सेवा के वर्ष'],
  ctaTitle: 'इस सफलता का हिस्सा बनें',
  ctaText: 'हमें मिलने वाला हर पुरस्कार हमारे समर्थकों का भी है। आपका योगदान ही वह प्रभाव संभव बनाता है जिसके लिए ये सम्मान मिलते हैं।',
  donate: 'अभी दान करें',
  volunteer: 'स्वयंसेवक बनें',
};

const mr: typeof en = {
  heroAlt: 'पुरस्कारांची पार्श्वभूमी',
  badge: 'आमची कामगिरी',
  heroTitle: 'पुरस्कार आणि सन्मान: आमचा सामाजिक प्रभाव',
  heroText: 'समर्पित सेवेच्या वाटचालीची प्रतिष्ठित संस्थांनी दखल घेतली आहे. हे पुरस्कार आमचे स्वयंसेवक, देणगीदार आणि आम्ही ज्या समाजासाठी काम करतो त्यांच्या योगदानाची साक्ष आहेत.',
  awards: [
    { title: 'कोरोना योद्धा पुरस्कार', desc: 'COVID-19 महामारीच्या काळात असामान्य सेवा आणि निःस्वार्थ समर्पणाबद्दल सन्मानित — हजारो गरजूंपर्यंत जीवनावश्यक साहित्य, वैद्यकीय मदत आणि आघाडीवरचा आधार पोहोचवला.' },
    { title: 'समाजसेवा गौरव पुरस्कार', desc: 'सातत्यपूर्ण तळागाळातील उपक्रमांद्वारे समाजकल्याण आणि सामाजिक सक्षमीकरणातील उल्लेखनीय योगदानाबद्दल सन्मानित.' },
    { title: 'विशेष सन्मान पुरस्कार', desc: 'वर्ष 2025 मध्ये समाजविकासासाठीचे असामान्य समर्पण आणि दूरदर्शी सामाजिक नेतृत्वाबद्दल प्रदान.' },
    { title: 'कर्तृत्व गौरव पुरस्कार', desc: 'असामान्य नेतृत्व आणि समाजकल्याण व सामाजिक सक्षमीकरणातील महत्त्वपूर्ण योगदानाबद्दल सन्मानित.' },
    { title: 'महाराष्ट्र विशेष गौरव पुरस्कार', desc: 'लोककल्याण, सामाजिक उन्नती आणि समाजसेवा उपक्रमांतील उल्लेखनीय योगदानाबद्दल गौरव.' },
  ],
  stats: ['पुरस्कार', 'दरवर्षी लाभार्थी जीवने', 'अखंड सेवेची वर्षे'],
  ctaTitle: 'या यशाचे भागीदार व्हा',
  ctaText: 'आम्हाला मिळणारा प्रत्येक पुरस्कार आमच्या समर्थकांचाही आहे. तुमच्या योगदानामुळेच हा प्रभाव आणि हे सन्मान शक्य होतात.',
  donate: 'आत्ताच देणगी द्या',
  volunteer: 'स्वयंसेवक व्हा',
};

export const awardsDict: Dict<typeof en> = { en, hi, mr };
