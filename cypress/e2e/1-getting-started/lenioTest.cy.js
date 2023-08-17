describe( 'loginOrangeHRM', () => {
    it('loginSucessfully', (username, password, env) => {
    let url = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    cy.visit(url)
    cy.get('[name="username"]').click().type('Admin')
    cy.get('[name="password"]').click().type('admin123')
    cy.get('[type="submit"]').click()
    //let button = cy.get('[type="button"]')
    //expect('[type="button"]').to.be.visible()
    cy.get('[type="button"]').should('be.visible')
    })
})