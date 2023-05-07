// abstract pattern 
// aniq ketma ketlikni ko'rsatmasdan qisqa qilib muammoni yechish

// MUAMMO
/**
 * Bizda mebel do'kon obr deylik
 * bizda stol stul divan shkaf degan classlar bor
 * 
 * va bular uchun har birining ham turli xil modellari bor
 * 
 * bizga bularni yaratadigan umumiylik kerak abstraksiya ishlatish kerak
 * 
 * har bir model bir biri bilan to'gri kelishi kerak bo'ladi
 */

// YECHIM
/**
 * Har bir model uchun alohida interface elon qilish 
 * masalan devanlar uchun alohida 
 * 
 * kiyin biz biror modelga kiriuvchi barcha turlarni aniqlab olishimiz kerak bo'ladi
 * masalan devan(o'tiradigan divancha, yotadigan, uch kishilik, ...)
 * 
 * 
 */


// TUZULISHI
/**
 * 1. Abstract Mahsulotlar mahsulot oilasini tashkil etuvchi bir-biridan farq qiluvchi, 
 * ammo o'zaro bog'liq mahsulotlar to'plami uchun interfeyslarni e'lon qiladi.
 * 
 * 2. Beton buyumlar - bu variantlar bo'yicha guruhlangan mavhum mahsulotlarning turli xil ilovalari.
 *  Har bir mavhum mahsulot (stul / divan) barcha berilgan variantlarda (Viktoriya / Zamonaviy) amalga oshirilishi kerak.
 * 
 * 3. Abstract Factory interfeysi mavhum mahsulotlarning har birini yaratish usullari to'plamini e'lon qiladi.
 */