// script.js

// Ushbu kod faqat foydalanuvchilar havolaga bosganda aksiyalarni yozib olish yoki animatsiya qo'shish uchun ishlatiladi.
document.querySelectorAll('.contact-item').forEach((link) => {
    link.addEventListener('click', (e) => {
        console.log(`${e.target.textContent.trim()} link was clicked!`);
    });
});
