//cypress - Spec
///<reference types ="Cypress" />
describe('My First Test', function()

{

    before(function(){

        //Runs once before all tests in the block

        cy.fixture('example').then(function(data)
        {
            
            this.data = data
        })

    })


    it('Does not do much!', function(){
       
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        cy.get('select').select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength','2')
        cy.get('#inlineRadio3').should('be.disabled')
    })
})