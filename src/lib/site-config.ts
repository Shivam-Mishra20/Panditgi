export const siteConfig = {
  name: "PanditGi",
  legalName: "Pandit Ramnarayan Mishra",
  tagline: "परंपरा, संस्कार और श्रद्धा के साथ",
  description:
    "PanditGi — Pandit Ramnarayan Mishra द्वारा प्रामाणिक हिंदू पूजा, वैदिक अनुष्ठान, संस्कार, विवाह, हवन, कथा-पाठ एवं ज्योतिष सेवाएं। परंपरा के अनुसार श्रद्धापूर्वक सम्पन्न।",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.panditgi.online",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98738 92736",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919873892736",
  email: process.env.NEXT_PUBLIC_EMAIL || "panditgicontact@gmail.com",
  city: process.env.NEXT_PUBLIC_BUSINESS_CITY || "Delhi NCR, Noida, Ghaziabad",
  state: process.env.NEXT_PUBLIC_BUSINESS_STATE || "Delhi",

  ogImage: "/images/og-cover.jpg",
  links: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
  },
} as const;

export function getWhatsAppLink(message?: string) {
  const defaultMessage =
    "नमस्ते Pandit Ji, मुझे पूजा बुक करने के बारे में जानकारी चाहिए।";
  const text = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${siteConfig.whatsapp}?text=${text}`;
}

export function getCallLink() {
  return `tel:${siteConfig.phone.replace(/\s+/g, "")}`;
}

export function getEmailLink() {
  return `mailto:${siteConfig.email}`;
}
