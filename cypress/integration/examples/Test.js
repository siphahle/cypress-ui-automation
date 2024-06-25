//cypress - Spec
///<reference types ="Cypress" />
describe('My First Test', function()

{

    before(function(){

        //Runs once before all tests in the block

    })


    it('Does not do much!', function(){
       
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type("Siphahle")
        cy.get('select').select("Female")
    })
})