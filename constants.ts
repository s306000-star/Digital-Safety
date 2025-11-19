import { RiskItem, LinkItem } from './types';

export const RISK_DATA: RiskItem[] = [
  {
    risk: "الاختراق",
    description: "محاولة الوصول إلى جهازك أو حساباتك دون إذن",
    protection: "كلمات مرور قوية + تحقق ثنائي"
  },
  {
    risk: "التنمر الإلكتروني",
    description: "إيذاء الآخرين عبر الرسائل أو التعليقات المسيئة",
    protection: "الإبلاغ – حظر المسيء – إخبار المعلم"
  },
  {
    risk: "الاحتيال",
    description: "رسائل وروابط مزيفة تهدف لسرقة البيانات",
    protection: "عدم الضغط على الروابط – التحقق من المصدر"
  }
];

export const USEFUL_LINKS: LinkItem[] = [
  {
    title: "موقع التوعية الرقمية السعودي",
    url: "https://www.saferinternet.sa"
  },
  {
    title: "منصة CyberSafe",
    url: "https://cybersafegirl.org"
  },
  {
    title: "Google Safety Center",
    url: "https://safety.google"
  }
];
