import React from 'react';
import { toast } from 'sonner';

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
    toast.success('Email copied & opening mail app', {
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

  toast.success('Email copied & opening mail: ' + email, {
    description: 'Email copied to clipboard. You can paste it into any mail app.'
  });
};
