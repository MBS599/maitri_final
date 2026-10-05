import type { Dict } from '../LanguageContext';

const en = {
  heroAlt: 'Supporting community welfare initiatives',
  heroTitle: 'Empower Change with Your Kindness',
  heroBody:
    'Every contribution fuels our mission to bring sustainable growth and social welfare to communities in need. Your trust is our greatest asset.',
  regNo: 'Reg No: ',
  badges: ['NGO Verified', 'Transparent Impact', 'Safe & Secure'],
  directTitle: 'Direct Contribution',
  bankTitle: 'Bank Transfer Details',
  bankLabels: ['Bank Name', 'Account No.', 'IFSC Code', 'Branch'],
  bankName: 'Canara Bank',
  branch: 'Dhankawadi, Pune - 411043',
  transparencyTitle: 'Our Transparency Report',
  stats: ['Funds Allocation', 'Lives Impacted', 'Projects Completed', 'Donor Support'],
};

const hi: typeof en = {
  heroAlt: 'सामुदायिक कल्याण पहलों को सहयोग',
  heroTitle: 'अपनी उदारता से बदलाव को सशक्त बनाएँ',
  heroBody:
    'आपका हर योगदान ज़रूरतमंद समुदायों तक सतत विकास और समाज कल्याण पहुँचाने के हमारे मिशन को गति देता है। आपका विश्वास ही हमारी सबसे बड़ी पूँजी है।',
  regNo: 'पंजीकरण सं.: ',
  badges: ['सत्यापित एनजीओ', 'पारदर्शी प्रभाव', 'सुरक्षित और भरोसेमंद'],
  directTitle: 'सीधा योगदान',
  bankTitle: 'बैंक ट्रांसफ़र विवरण',
  bankLabels: ['बैंक का नाम', 'खाता संख्या', 'IFSC कोड', 'शाखा'],
  bankName: 'Canara Bank',
  branch: 'Dhankawadi, Pune - 411043',
  transparencyTitle: 'हमारी पारदर्शिता रिपोर्ट',
  stats: ['निधि का उपयोग', 'प्रभावित जीवन', 'पूर्ण परियोजनाएँ', 'दानदाता सहायता'],
};

const mr: typeof en = {
  heroAlt: 'समाजकल्याण उपक्रमांना पाठबळ',
  heroTitle: 'तुमच्या दातृत्वातून बदलाला बळ द्या',
  heroBody:
    'तुमचे प्रत्येक योगदान गरजू समाजापर्यंत शाश्वत विकास आणि समाजकल्याण पोहोचवण्याच्या आमच्या ध्येयाला गती देते. तुमचा विश्वास हीच आमची सर्वात मोठी संपत्ती आहे.',
  regNo: 'नोंदणी क्र.: ',
  badges: ['सत्यापित एनजीओ', 'पारदर्शक परिणाम', 'सुरक्षित आणि विश्वासार्ह'],
  directTitle: 'थेट योगदान',
  bankTitle: 'बँक हस्तांतरण तपशील',
  bankLabels: ['बँकेचे नाव', 'खाते क्रमांक', 'IFSC कोड', 'शाखा'],
  bankName: 'Canara Bank',
  branch: 'Dhankawadi, Pune - 411043',
  transparencyTitle: 'आमचा पारदर्शकता अहवाल',
  stats: ['निधीचा विनियोग', 'प्रभावित जीवने', 'पूर्ण प्रकल्प', 'देणगीदार सहाय्य'],
};

export const supportDict: Dict<typeof en> = { en, hi, mr };
