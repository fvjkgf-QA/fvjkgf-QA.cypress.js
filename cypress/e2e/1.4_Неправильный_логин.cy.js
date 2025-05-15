  it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('gerrrrmans@dolnikov.ru')
        cy.get('#pass').type('iLoveqastudio1')
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })