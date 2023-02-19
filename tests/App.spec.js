const { test, expect } = require("@playwright/test");

test("test about sign in", async ({page}) => {
 
   await page.goto("https://netology.ru", { timeout: 60000 } ); 

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
 
  await page.goto("https://netology.ru", { timeout: 60000 } ); 

 // Click 'Войти'
  await page.getByRole('link', { name: 'Войти'}).click();
 
 // Click невалидная регистрация c PageObgect"
  const user = require("../user");
  await page.getByPlaceholder("login-error-hint").fill(user.validEmail); 
  await page.getByPlaceholder("Пароль").fill(user.validPassword);
   
  /*  Click невалидная регистрация напрямую в коде
  await page.getByPlaceholder('Email').fill("petrov@mail.ru");    
  await page.getByPlaceholder('Пароль').fill("19022023");*/
 
  await page.getByTestId('login-submit-btn').click();  
  await expect(page).toHaveURL("https://netology.ru/?modal=sign_in");
  await expect(
    page.getByRole("Email", { name: "Вы ввели неправильно логин или пароль" })
  ).toBeVisible();
  await browser.close();
});

