import React from 'react';
import { toast } from 'sonner';

const MESSAGES = {
  en: {
    mobile: 'Email copied & opening mail app',
    desktop: 'Email copied & opening mail: ',
    desktopNote: 'Email copied to clipboard. You can paste it into any mail app.',
  },
  hi: {
    mobile: 'ईमेल कॉपी हो गया, मेल ऐप खुल रहा है',
    desktop: 'ईमेल कॉपी हो गया, मेल खुल रहा है: ',
    desktopNote: 'ईमेल क्लिपबोर्ड पर कॉपी हो गया है। आप इसे किसी भी मेल ऐप में पेस्ट कर सकते हैं।',
  },
  mr: {
    mobile: 'ईमेल कॉपी झाला, मेल ॲप उघडत आहे',
    desktop: 'ईमेल कॉपी झाला, मेल उघडत आहे: ',
    desktopNote: 'ईमेल क्लिपबोर्डवर कॉपी झाला आहे. तुम्ही तो कोणत्याही मेल ॲपमध्ये पेस्ट करू शकता.',
  },
};

const messages = () => {
  const lang = typeof document !== 'undefined' ? document.documentElement.lang : 'en';
  return MESSAGES[lang as keyof typeof MESSAGES] ?? MESSAGES.en;
};

export const handleContactEmail = (e?: React.MouseEvent) => {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const email = 'support@maitriwelfarefoundation.org';

  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(email).catch(() => { });
  }

  const isMobile =
    typeof window !== 'undefined' &&
    (window.innerWidth < 768 ||
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));

  const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    'Inquiry: Maitri Welfare Foundation'
  )}`;

  if (isMobile) {
    window.location.href = mailtoUrl;
    toast.success(messages().mobile, {
      description: email
    });
    return;
  }

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}&su=${encodeURIComponent('Inquiry: Maitri Welfare Foundation')}`;

  const win = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

  if (!win || win.closed || typeof win.closed === 'undefined') {
    window.location.href = mailtoUrl;
  }

  toast.success(messages().desktop + email, {
    description: messages().desktopNote
  });
};
