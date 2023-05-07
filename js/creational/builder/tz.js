// uy class 

// muammolar yoritilishi kerak 
// va o'sha muammolarga yechimlar yoritilishi kerak

// baseni bor uy
// bogi bor
// moziy bor
// garaj bor
// yana qo'shimchalari bor masalan(isitish tizimi, dush, )
// buni churish uchun juda ham ko'p class ishlatish mumkin lekin classlarning soni ko'bayib ketadi
// buni oldini olish methodlardan foydalanish buni ham yomon tomoni bazi methodlar kerak emas bazida

// buning uchun yechim uy quradigan class yozish unda bazi methodlar privete asosiylari public


// Turli quruvchilar bir xil vazifani turli yo'llar bilan bajaradilar.

// Direktor ishlaydigan mahsulotni olish uchun qaysi qurilish bosqichlarini bajarish kerakligini biladi.

// Bundan tashqari, direktor klassi mahsulot qurilishi tafsilotlarini mijoz kodidan butunlay yashiradi. 
//Mijoz faqat quruvchini direktor bilan bog'lashi, 
//direktor bilan qurilishni boshlashi va quruvchidan natija olishi kerak.


/** 
 * 1. builder interfeysi barcha turdagi quruvchilar uchun umumiy 
 * bo'lgan mahsulotni qurish bosqichlarini e'lon qiladi .
 * 
 * 2. Concrete builders qurilish bosqichlarining turli xil amalga oshirilishini ta'minlaydi.
 * Concrete builders umumiy interfeysga rioya qilmaydigan mahsulotlarni ishlab chiqarishi mumkin.
 * 
 * 3. Products hosil bo'lgan ob'ektlardir. Turli quruvchilar tomonidan yaratilgan mahsulotlar 
 * bir xil sinf ierarxiyasi yoki interfeysiga tegishli bo'lishi shart emas.
 * 
 * 4. Direktor klassi qurilish bosqichlarini chaqirish tartibini belgilaydi, shuning uchun siz 
 * mahsulotlarning muayyan konfiguratsiyasini yaratishingiz va qayta foydalanishingiz mumkin 
 * 
 * 5. Buyurtmachi quruvchi ob'ektlardan birini direktor bilan bog'lashi kerak . 
 * Odatda, bu faqat bir marta, rejissyor konstruktorining parametrlari orqali amalga oshiriladi. 
 * Keyin direktor o'sha quruvchi ob'ektni barcha keyingi qurilish uchun ishlatadi. 
 * Biroq, mijoz quruvchi ob'ektni direktorning ishlab chiqarish usuliga o'tkazish uchun 
 * muqobil yondashuv mavjud. Bunday holda, siz rejissyor bilan har 
 * safar biror narsa ishlab chiqarganingizda boshqa quruvchidan foydalanishingiz mumkin.
 * 
 * */ 

// amaliyot uchun 
/**
 * uy qurish loyihasi
 * mashina quradigan zavod loyihasi
 */

/**
 * Avtomobil murakkab ob'ekt bo'lib, uni yuz xil usulda qurish mumkin. 
 * Sinfni ulkan konstruktor bilan to'ldirishning o'rniga Car, 
 * biz avtomobil yig'ish kodini alohida avtomobil quruvchi sinfiga ajratdik. 
 * Ushbu sinfda avtomobilning turli qismlarini sozlash usullari to'plami mavjud.
 * 
 * Agar mijoz kodi avtomobilning maxsus, nozik sozlangan modelini yig'ishi kerak bo'lsa, 
 * u to'g'ridan-to'g'ri quruvchi bilan ishlashi mumkin. 
 * Boshqa tomondan, mijoz yig'ishni direktor sinfiga topshirishi mumkin, 
 * u quruvchidan bir nechta eng mashhur avtomobil modellarini qurish uchun qanday foydalanishni biladi.
 */