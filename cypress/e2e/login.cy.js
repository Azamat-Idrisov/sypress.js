describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');  // Зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru')  // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1')  // Ввели верный пароль
         cy.get('#loginButton').click();  // Нажал войти 
         cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю, что после автор. вижу текст
         cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
     })





     // Нажать «Забыли пароль»
     // Ввести любой имейл
     // Проверка, что получили нужный текст и есть кнопка крестика
     it('восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажали «Забыли пароль»
        cy.get('#mailForgot').type('germannnnnn@dolnikov.ru') // Ввели любой имейл
        cy.get('#restoreEmailButton').click(); // Нажали Отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');  // Проверяю, что после автор. вижу текст
         cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
    })




    // Ввести правильный логин
     // Ввести НЕправильный пароль
     // Нажать войти
     // Проверить нужный текст и наличие кнопки крестик
     it('Верный логин и НЕверный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru')  // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio9')  // Ввели верный пароль
        cy.get('#loginButton').click();  // Нажал войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю, что после автор. вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
    })



    // Ввести НЕправильный логин
     // Ввести правильный пароль
     // Нажать войти
     // Проверить нужный текст и наличие кнопки крестик
     it('НЕверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('germannnnn@dolnikov.ru')  // Ввели НЕверный логин
        cy.get('#pass').type('iLoveqastudio1')  // Ввели верный пароль
        cy.get('#loginButton').click();  // Нажал войти 
        cy.get('#messageHeader').contains('Такого логина или пароля нет');  // Проверяю, что после автор. вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
    })



    // Ввести логин без @
     // Ввести правильный пароль
     // Нажать войти
     // Проверить нужный текст и наличие кнопки крестик
     it('логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru')  // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1')  // Ввели верный пароль
        cy.get('#loginButton').click();  // Нажал войти 
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');  // Проверяю, что после автор. вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
    })



    // Ввести логин GerMan@Dolnikov.ru
     // Ввести правильный пароль
     // Нажать войти
     // Проверить нужный текст и наличие кнопки крестик
     it('логин без @ и верный пароль', function () {
        cy.visit('https://login.qa.studio/');  // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru')  // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1')  // Ввели верный пароль
        cy.get('#loginButton').click();  // Нажал войти 
        cy.get('#messageHeader').contains('Авторизация прошла успешно');  // Проверяю, что после автор. вижу текст
        cy.get('#messageHeader').should('be.visible');  // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Есть крестик и он виден для пользователя
    })
 })