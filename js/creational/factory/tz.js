// loyiha logistika(mahsulot yetkazib berish)

// bizda faqatgina tasi orqali yetkazib berish xizmati bor edi kod ham shunga moz edi
// bir ozdan kiyin bir qancha xizmatlar qo'shildi(samaliyot, keyma, avtobus va boshqa)

// muammo shundaki biz boshida yozgan kidimizga har safar yangi transport qo'shilganda unga kodga
// o'zgartirishlar kiritilishi kerak bo'ladi bu esa juda yomon

/**
 * Zavod usulidan foydalanadigan kod (ko'pincha mijoz kodi deb ataladi)
 * turli kichik sinflar tomonidan qaytarilgan haqiqiy mahsulotlar o'rtasidagi farqni ko'rmaydi.
 * Mijoz barcha mahsulotlarni mavhum deb hisoblaydi Transport.
 * Mijoz barcha transport ob'ektlarida usul bo'lishi kerakligini biladi deliver,
 * lekin uning qanday ishlashi mijoz uchun muhim emas.

 */

// DASTUR YARATISH KETMA KETLIGI
/**
 * 1. Mahsulot yaratuvchi va uning quyi sinflari tomonidan ishlab chiqarilishi mumkin 
 * bo'lgan barcha ob'ektlar uchun umumiy bo'lgan interfeysni e'lon qiladi.
 * 
 * 2. Concrete(beton) mahsulotlari - bu mahsulot interfeysining turli xil ilovalari.
 * 
 * 3. Creator klassi yangi mahsulot ob'ektlarini qaytaradigan zavod usulini e'lon qiladi. Ushbu usulning qaytarish turi mahsulot interfeysiga mos kelishi muhim.
    
        Siz zavod usulini abstractbarcha kichik sinflarni usulning o'z versiyalarini amalga oshirishga majburlash uchun e'lon qilishingiz mumkin. Shu bilan bir qatorda, asosiy zavod usuli ba'zi bir standart mahsulot turini qaytarishi mumkin.
    
        E'tibor bering, uning nomiga qaramay, mahsulotni yaratish ijodkorning asosiy vazifasi emas . 
        Odatda, ijodkorlar sinfi allaqachon mahsulotlarga oid asosiy biznes mantiqiga ega. 
        Zavod usuli bu mantiqni aniq mahsulot sinflaridan ajratishga yordam beradi. 
        Mana bir o'xshashlik: dasturiy ta'minotni ishlab chiqish bo'yicha yirik kompaniyada dasturchilarni 
        tayyorlash bo'limi bo'lishi mumkin. Biroq, umuman kompaniyaning asosiy vazifasi dasturchilarni 
        ishlab chiqarish emas, balki kod yozishdir.
        
 */


// QO'LLASH
/**
 * Kodingiz bilan ishlashi kerak bo'lgan ob'ektlarning aniq turlari va bog'liqliklarini oldindan 
 * bilmaganingizda Zavod usulidan foydalaning.
 * 
 * Masalan, ilovaga yangi mahsulot turini qo‘shish uchun siz faqat yangi yaratuvchi subklassini 
 * yaratishingiz va undagi zavod usulini bekor qilishingiz kerak bo‘ladi.
 * 
 * Kutubxonangiz yoki ramkangiz foydalanuvchilariga uning ichki komponentlarini kengaytirish 
 * usulini taqdim qilmoqchi bo'lsangiz, zavod usulidan foydalaning.
 * 
 * Mavjud ob'ektlarni har safar qayta tiklash o'rniga ularni qayta ishlatish orqali tizim 
 * resurslarini tejashni istasangiz, zavod usulidan foydalaning.
 */