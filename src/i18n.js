import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)  // Use the React integration
  .init({
    resources: {
      en: {
        "home": {
          "title": "Your Trusted Dental Care",
          "subtitle": "We're here to keep your smile healthy and beautiful. Trusted by hundreds of families.",
          "bookAppointment": "Book an Appointment",
          "ourServices": "Our Services",
          "previous": "Previous",
          "next": "Next",
          "meetOurTeam": "Meet Our Expert Team",
          "teamDescription": "Our team is dedicated to providing you with top-quality dental care and personalized treatments.",
          "getInTouch": "Get in Touch with Us",
          "contactMessage": "If you have any questions or want to schedule an appointment, please fill out the form below.",
          "form": {
            "fullName": "Full Name",
            "email": "Email Address",
            "phone": "Phone Number",
            "message": "Message",
            "send": "Send Message"
          }
        },
        "services": {
          "title": "Services",
          "learnMore": "Learn More",
          "generalDentistry": {
            "title": "General Dentistry",
            "description": "Routine check-ups, cleanings, fillings, and preventive care."
          },
          "orthodontics": {
            "title": "Orthodontics",
            "description": "Braces, retainers, and other teeth alignment services."
          },
          "cosmeticDentistry": {
            "title": "Cosmetic Dentistry",
            "description": "Teeth whitening, veneers, bonding, and smile makeovers."
          },
          "pediatricDentistry": {
            "title": "Pediatric Dentistry",
            "description": "Specialized dental care for children, including first visits."
          },
          "periodontics": {
            "title": "Periodontics",
            "description": "Treatment of gum disease and other conditions affecting the gums."
          },
          "endodontics": {
            "title": "Endodontics",
            "description": "Root canal therapy and treatment of dental pulp issues."
          },
          "oralSurgery": {
            "title": "Oral Surgery",
            "description": "Surgical procedures including tooth extractions and jaw surgery."
          },
          "dentalImplants": {
            "title": "Dental Implants",
            "description": "Permanent solutions for missing teeth using titanium implants."
          },
          "teethWhitening": {
            "title": "Teeth Whitening",
            "description": "Professional whitening treatments for a brighter smile."
          },
          "sedationDentistry": {
            "title": "Sedation Dentistry",
            "description": "Anxiety-free dental care using sedation techniques."
          },
          "crownsBridges": {
            "title": "Dental Crowns and Bridges",
            "description": "Restorative solutions for damaged or missing teeth."
          },
          "oralHygieneEducation": {
            "title": "Oral Hygiene Education",
            "description": "Guidance on proper brushing, flossing, and oral care routines."
          }
        },
        "team": {
          "drMahmoudAtef": {
            "name": "Dr. Mahmoud Atef",
            "specialty": "General Dentist",
            "description": "Dr. Mahmoud specializes in preventive care, general dental procedures, and patient education."
          },
          "drAhmedDahy": {
            "name": "Dr. Ahmed Dahy",
            "specialty": "Orthodontist",
            "description": "Dr. Ahmed is an expert in orthodontics, offering solutions like braces and aligners for a perfect smile."
          },
          "drMahmoudAli": {
            "name": "Dr. Mahmoud Ali",
            "specialty": "Cosmetic Dentist",
            "description": "Dr. Mahmoud focuses on cosmetic dentistry, helping patients enhance their smile with treatments like teeth whitening and veneers."
          },
          "drOmarGameel": {
            "name": "Dr. Omar Gameel",
            "specialty": "Pediatric Dentist",
            "description": "Dr. Omar specializes in pediatric dentistry, offering gentle and caring dental care for children."
          },
          "header": "Meet Our Expert Team",
          "description": "Our team is dedicated to providing you with top-quality dental care and personalized treatments."
        },
        "about": {
          "title": "About Us",
          "subtitle": "Where Smiles Shine Brighter",
          "visitClinic": "Visit Our Clinic",
          "location": "We are located at **Obour City (9th District - Abbas El Akkad Street - Medical Destination Mall - Clinic G7), Cairo, Egypt**. Our team is ready to provide the best dental care. Come visit us!",
          "appointmentHours": "Appointment Hours",
          "available": "(available 24/7)",
          "workingHours": "Saturday - Thursday: **9:00 AM - 12:00 PM**",
          "phone": "Phone",
          "email": "Email"
        },
        "features": {
          "title": "About Our Dental Clinic",
          "description": "At our clinic, we believe that a healthy smile is a reflection of overall well-being. Our team is dedicated to providing compassionate, high-quality dental care to every patient. From preventive treatments to advanced cosmetic procedures, we ensure your dental health is our top priority.",
          "services": [
            {
              "icon": "medical_services",
              "text": "Comprehensive dental exams and cleanings to keep your smile healthy and bright."
            },
            {
              "icon": "medical_services",
              "text": "State-of-the-art cosmetic and restorative treatments tailored to your needs."
            },
            {
              "icon": "emoji_people",
              "text": "A friendly and welcoming environment where patient comfort comes first."
            }
          ]
        },
        "contact": {
          "title": "Contact Us At Lumina Dental Studio",
          "description": "For appointments, inquiries, or patient support, please reach out to us via the form below.",
          "fullName": "Full Name",
          "email": "Email",
          "message": "How can we assist you?",
          "placeholder": "Describe your concern or appointment request",
          "submit": "Send Message"
        },
        "cases": {
          "title": "Our Dental Cases",
          "description": "Explore some of our successful dental treatments. Our team specializes in various dental procedures to provide the best care for our patients.",
          "teethWhitening": {
            "title": "Teeth Whitening",
            "description": "This case showcases how our professional teeth whitening treatments helped the patient achieve a bright, confident smile."
          },
          "orthodontics": {
            "title": "Orthodontics",
            "description": "This case highlights the transformation of a patient's smile with our orthodontic treatments, including braces and aligners."
          },
          "implants": {
            "title": "Dental Implants",
            "description": "Our dental implant procedure restored the patient's smile and dental function, providing a permanent solution for missing teeth."
          },
          "learnMore": "Learn More"
        },
        "routes": {
          "home": "Home",
          "aboutUs": "About Us",
          "contactUs": "Contact Us",
          "ourCases": "Our Cases"
        },
        "dentalCard": {
          "title": "Experience the Best Dental Care",
          "subtitle": "Your Smile, Our Priority",
          "description": "We offer top-notch dental services to help you maintain a healthy smile. From routine check-ups to advanced treatments, we've got you covered.",
          "learnMore": "Discover Our Services",
          "details": "We provide comprehensive dental care including teeth whitening, cosmetic dentistry, and more. Visit us for a consultation.",
          "bookNow": "Book an Appointment"
        }
      }
      ,
      ar: {
        "home": {
          "title": "رعايتك الصحية للأسنان الموثوقة",
          "subtitle": "نحن هنا للحفاظ على ابتسامتك صحية وجميلة. موثوق به من قبل مئات العائلات.",
          "bookAppointment": "احجز موعدًا",
          "ourServices": "خدماتنا",
          "previous": "السابق",
          "next": "التالي",
          "meetOurTeam": "تعرف على فريق الخبراء",
          "teamDescription": "فريقنا مكرس لتقديم رعاية أسنان عالية الجودة وعلاجات مخصصة لك.",
          "getInTouch": "تواصل معنا",
          "contactMessage": "إذا كان لديك أي أسئلة أو ترغب في تحديد موعد، يرجى ملء النموذج أدناه.",
          "form": {
            "fullName": "الاسم الكامل",
            "email": "البريد الإلكتروني",
            "phone": "رقم الهاتف",
            "message": "الرسالة",
            "send": "إرسال الرسالة"
          }
        },
        "services": {
          "title": "خدمات",
          "learnMore": "معرفة المزيد",
          "generalDentistry": {
            "title": "طب الأسنان العام",
            "description": "الفحوصات الدورية، التنظيفات، الحشوات، والرعاية الوقائية."
          },
          "orthodontics": {
            "title": "تقويم الأسنان",
            "description": "التقويمات، المثبتات، وخدمات تصحيح الأسنان الأخرى."
          },
          "cosmeticDentistry": {
            "title": "طب الأسنان التجميلي",
            "description": "تبييض الأسنان، الفينير، الترابط، وتجميل الابتسامة."
          },
          "pediatricDentistry": {
            "title": "طب أسنان الأطفال",
            "description": "رعاية الأسنان المتخصصة للأطفال، بما في ذلك الزيارات الأولى."
          },
          "periodontics": {
            "title": "أمراض اللثة",
            "description": "علاج أمراض اللثة والحالات الأخرى التي تؤثر على اللثة."
          },
          "endodontics": {
            "title": "علاج جذور الأسنان",
            "description": "علاج قنوات الجذور والمشاكل المتعلقة بلب الأسنان."
          },
          "oralSurgery": {
            "title": "جراحة الفم",
            "description": "الإجراءات الجراحية بما في ذلك خلع الأسنان وجراحة الفك."
          },
          "dentalImplants": {
            "title": "زراعة الأسنان",
            "description": "حلول دائمة للأسنان المفقودة باستخدام غرسات التيتانيوم."
          },
          "teethWhitening": {
            "title": "تبييض الأسنان",
            "description": "علاجات تبييض احترافية لابتسامة أكثر إشراقًا."
          },
          "sedationDentistry": {
            "title": "طب الأسنان المهدئ",
            "description": "رعاية أسنان خالية من القلق باستخدام تقنيات التهدئة."
          },
          "crownsBridges": {
            "title": "تيجان وجسور الأسنان",
            "description": "حلول ترميمية للأسنان التالفة أو المفقودة."
          },
          "oralHygieneEducation": {
            "title": "تعليم نظافة الفم",
            "description": "إرشادات حول تنظيف الأسنان بالفرشاة والخيط والعناية بالفم."
          }
        },
        "team": {
          "drMahmoudAtef": {
            "name": "د. محمود عاطف",
            "specialty": "طبيب أسنان عام",
            "description": "يختص الدكتور محمود في الرعاية الوقائية وإجراءات الأسنان العامة وتثقيف المرضى."
          },
          "drAhmedDahy": {
            "name": "د. أحمد داهي",
            "specialty": "أخصائي تقويم الأسنان",
            "description": "يعتبر الدكتور أحمد خبيرًا في تقويم الأسنان، حيث يقدم حلولًا مثل التقويمات والمصففات للحصول على ابتسامة مثالية."
          },
          "drMahmoudAli": {
            "name": "د. محمود علي",
            "specialty": "طبيب أسنان تجميلي",
            "description": "يركز الدكتور محمود على تجميل الأسنان، حيث يساعد المرضى في تحسين ابتسامتهم من خلال علاجات مثل تبييض الأسنان والفينير."
          },
          "drOmarGameel": {
            "name": "د. عمر جميل",
            "specialty": "طبيب أسنان أطفال",
            "description": "يتخصص الدكتور عمر في طب أسنان الأطفال، ويقدم رعاية أسنان لطيفة ومهتمة للأطفال."
          },
          "header": "تعرف على فريقنا الخبراء",
          "description": "فريقنا مكرس لتقديم رعاية أسنان عالية الجودة وعلاجات مخصصة."
        },
        "about": {
          "title": "معلومات عنا",
          "subtitle": "حيث تتألق الابتسامات",
          "visitClinic": "قم بزيارة عيادتنا",
          "location": "نحن موجودون في **مدينة العبور ( الحي التاسع - شارع عباس العقاد - مول ميديكال ديستنيشن - عيادة G7 ), القاهرة، مصر**. فريقنا جاهز لتقديم أفضل رعاية للأسنان. قم بزيارتنا!",
          "appointmentHours": "ساعات العمل",
          "available": "(متاح 24/7)",
          "workingHours": "السبت - الخميس: **9:00 صباحًا - 12:00 مساءً**",
          "phone": "الهاتف",
          "email": "البريد الإلكتروني"
        },
        "features": {
          "title": "عن عيادتنا للأسنان",
          "description": "في عيادتنا، نؤمن بأن الابتسامة الصحية تعكس الرفاهية العامة. يكرس فريقنا جهوده لتقديم رعاية أسنان عالية الجودة برفق لكل مريض. بدءًا من العلاجات الوقائية إلى الإجراءات التجميلية المتقدمة، نحن نضمن أن صحة فمك هي أولويتنا القصوى.",
          "services": [
            {
              "icon": "medical_services",
              "text": "فحوصات وتنظيفات أسنان شاملة للحفاظ على ابتسامتك صحية ومشرقة."
            },
            {
              "icon": "medical_services",
              "text": "علاجات تجميلية وترميمية متطورة مصممة خصيصًا لاحتياجاتك."
            },
            {
              "icon": "emoji_people",
              "text": "بيئة ودية ومرحبة حيث تأتي راحة المريض أولاً."
            }
          ]
        },
        "contact": {
          "title": "اتصل بنا",
          "description": "لحجز المواعيد أو الاستفسارات أو دعم المرضى، يرجى التواصل معنا عبر النموذج أدناه.",
          "fullName": "الاسم الكامل",
          "email": "البريد الإلكتروني",
          "message": "كيف يمكننا مساعدتك؟",
          "placeholder": "وصف مشكلتك أو طلب موعد",
          "submit": "إرسال الرسالة"
        },
        "cases": {
          "title": "حالاتنا",
          "description": "استعرض بعض من حالات العلاج السني الناجحة لدينا. فريقنا متخصص في مختلف الإجراءات السنية لتقديم أفضل رعاية لمرضانا.",
          "teethWhitening": {
            "title": "تبييض الأسنان",
            "description": "تُظهر هذه الحالة كيف ساعدت علاجات تبييض الأسنان الاحترافية لدينا المريض في الحصول على ابتسامة مشرقة وواثقة."
          },
          "orthodontics": {
            "title": "تقويم الأسنان",
            "description": "تُبرز هذه الحالة التحول في ابتسامة المريض من خلال علاجات تقويم الأسنان لدينا، بما في ذلك الأقواس والمحاذاة."
          },
          "implants": {
            "title": "زرع الأسنان",
            "description": "استعادة الابتسامة ووظيفة الأسنان للمريض من خلال زرع الأسنان، حيث قدمنا حلاً دائماً للأسنان المفقودة."
          },
          "learnMore": "تعلم المزيد"
        },
        "routes": {
          "home": "الصفحة الرئيسية",
          "aboutUs": "معلومات عنا",
          "contactUs": "اتصل بنا",
          "ourCases": "حالاتنا"
        },
        "dentalCard": {
          "title": "اختبر أفضل رعاية أسنان",
          "subtitle": "ابتسامتك، أولويتنا",
          "description": "نقدم خدمات أسنان عالية الجودة لمساعدتك في الحفاظ على ابتسامة صحية. من الفحوصات الروتينية إلى العلاجات المتقدمة، نحن هنا لخدمتك.",
          "learnMore": "اكتشف خدماتنا",
          "details": "نقدم رعاية شاملة للأسنان تشمل تبييض الأسنان، وطب الأسنان التجميلي، وأكثر. قم بزيارتنا للحصول على استشارة.",
          "bookNow": "احجز موعدك"
        }

      }
    },
    lng: "en",  // Default language
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false, // React already protects from XSS
    }
  });

export default i18n;
