const { test, expect } = require("@playwright/test");

test("test about sign in", async ({page}) => {
 
   await page.goto("https://netology.ru", { timeout: 100000 } ); 

  // Click 'Войти'
  await page.getByRole('link', { name: 'Войти'}).click();   
  
  // Click text="Email"
  const user = require("../user");
  await page.getByPlaceholder("Email").fill(user.validEmail); 

  //  Click text="Пароль"  
  await page.getByPlaceholder("Пароль").fill(user.validPassword); 

  //  Click profile
  await page.getByTestId('login-submit-btn').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(
    page.getByRole("heading", { name: "Мои курсы и профессии" })
  ).toBeVisible();
  //await browser.close();
});

test("test about invalid login-password", async ({page}) => {
 
  await page.goto("https://netology.ru", { timeout: 100000 } ); 

 // Click 'Войти'
  await page.getByRole('link', { name: 'Войти'}).click();
 
 // "дз 7.3  п.4.повторите тест 1, используя невалидные данные для авторизации"
 //const user = require("../user");
  await page.getByPlaceholder('Email').fill("petrov@mail.ru"); 
 
 //  Click text="Пароль"  
 await page.getByPlaceholder('Пароль').fill("10022023");

 //  Click profile
  await page.getByTestId('login-submit-btn').click();  
  await expect(page).toHaveURL("https://netology.ru/profile");
  await expect(
    page.getByRole("heading", { name: "Мои курсы и профессии" })
  ).toBeVisible();
  await browser.close();
});

