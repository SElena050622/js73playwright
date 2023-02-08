const { chromium } = require("playwright");

(async () => {
   const browser = await chromium.launch({
     headless: false,
     slowMo: 5000,
     devtools: true
   });
   const page = await browser.newPage();
   await page.goto("https://netology.ru", { timeout: 100000 });
   await page.click("text=Каталог курсов");
   await page.pause();
   await page.getByRole('link', { name: 'Войти' }).click();
   await page.getByPlaceholder('Email').click();
   const inputEmail = page.getByPlaceholder("Email");
   await inputEmail.fill(user.email);
   await page.getByPlaceholder('Пароль').click();
   await page.getByPlaceholder("Пароль").fill(user.psswrd);
   await page.getByTestId('login-submit-btn').click();
   await page.goto('https://netology.ru/profile');

   await browser.close();
});
