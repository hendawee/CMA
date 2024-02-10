const translations = {
  ar: {
    "digital-business-lang": "English",
    "main-lang": "EN",
    'username-or-email': 'اسم المستخدم أو البريد الإلكتروني',
    'sign-in': 'تسجيل دخول',
    'password': 'كلمة السر',
    'remember-me': 'تذكرني',
    'login': 'تسجيل الدخول',
    'forgot-password': 'هل نسيت كلمة السر؟',
    'username': 'اسم المستخدم',
    'email': 'البريد الإلكتروني',
    'confirm-password': 'تأكيد كلمة السر',
    'sign-up': 'إنشاء حساب',
    "link-Facilities-and-services": "المرافق والخدمات",
    "Access-cards-Requests" : "طلبات بطاقات الدخول" ,
    "Government-Relationship" : "خدمة العلاقات الحكومية" ,
    "Car-Parking-Request" : "طلب تصريح دخول سيارات لاصق" ,
    "Assets-Disbursement-Request" : "طلب صرف أصول" ,
    "Communication-Services" : "خدمات الاتصالات " ,
    "Open-Office-Request" : "طلب مفتاح / فتح مكتب" ,
    "Premises-Access-Authority-Requests" : "طلب صلاحية دخول مرافق الهيئة" ,
    "Business-Card-Request" : "طلب بطاقات أعمال " ,
    "CMA-Visitor": "طلب تأشيرة زيارة لضيوف الهيئة",
    "Office-Allocation" : "خدمة تخصيص مكتب" ,
    "Report-missing-items" : "الإبلاغ عن المفقودات" ,
    "Human-Resources" : "الموارد البشرية",
    "Contacts" : "التواصل",
    "CMA-Banquets" : "المناسبات",
    "Gifts-Request" : "طلب هدايا"
  },
  en: {
    "digital-business-lang": "عربي",
    "main-lang": "ع",
    'sign-in-to-your-account': 'Sign in to your account',
    'username-or-email': 'username or email',
    'sign-in': 'sign in',
    'password': 'Password',
    'remember-me': 'Remember me',
    'login': 'Login',
    'forgot-password': 'Forgot password',
    'username': 'username',
    'email': 'Email',
    'confirm-password': 'Confirm password',
    'sign-up': 'Sign Up',
       "link-Facilities-and-services": "link Facilities and services" ,
    "Access-cards-Requests" : "Access cards Requests"  ,
    "Government-Relationship" : "Government Relationship"  ,
    "Car-Parking-Request" : "Car Parking Request"  ,
    "Assets-Disbursement-Request" : "Assets Disbursement Request"  ,
    "Communication-Services" : "Communication Services"  ,
    "Open-Office-Request" : "Open Office Request"  ,
    "Premises-Access-Authority-Requests" : "Premises Access Authority Requests"  ,
    "Business-Card-Request" : "Business Card Request"  ,
    "CMA-Visitor": "CMA Visitor" ,
    "Office-Allocation" : "Office Allocation"  ,
    "Report-missing-items" : "Report missing items"  ,
    "Human-Resources" : "Human Resources"  ,
    "Contacts" : "Contacts"  ,
    "CMA-Banquets" : "CMA Banquets"  ,
    "Gifts-Request" : "Gifts Request"  ,
  },
};
function translatePageTo(language) {
  document.querySelectorAll("[data-lang]").forEach((elem) => {
    const key = elem.getAttribute("data-lang");
    if (translations[language] && translations[language][key]) {
      elem.textContent = translations[language][key];
    }
  });
}

var body = document.body;

// Function to toggle or set language
function toggleLanguage(lang) {

  if (lang) {
    setLanguage(lang);
    // translatePageTo(lang);
  } else {

    var currentLang = body.getAttribute("lang") || 'en';
    var newLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    // translatePageTo(newLang);
  }
}

// Function to set language
function setLanguage(lang) {
  if (lang === "ar") {
    body.classList.remove("ltr");
    body.classList.add("rtl");
    body.setAttribute("lang", "ar");
    localStorage.setItem("lang", "ar");
  } else {
    body.classList.remove("rtl");
    body.classList.add("ltr");
    body.setAttribute("lang", "en");
    localStorage.setItem("lang", "en");
  }
}

document.addEventListener("DOMContentLoaded", function () {
var savedLang = localStorage.getItem('lang');
    if (savedLang) {
        setLanguage(savedLang);
    }
});
