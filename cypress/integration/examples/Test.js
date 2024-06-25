//cypress - Spec
///<reference types ="Cypress" />

import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/ProductPage"

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
       
       const homePage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)
        homePage.getEditBox().should('have.attr','minlength','2')
        homePage.getEntrepreneurRadio3().should('be.disabled')
        homePage.getShopTab().click()


        this.data.productName

        this.data.productName.forEach(element => {

            cy.selectProduct(element)

        });
       
        const productPage = new ProductPage()
        productPage.checoutbtn().click()
      
    })
})