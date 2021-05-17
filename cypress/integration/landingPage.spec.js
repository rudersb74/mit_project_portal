describe("landing page test", function() {
    it("renders landing page correctly", function(){
        cy.visit("/login");
        cy.get("form").should("exist")
        cy.get("#username").should("exist").type("mit201251@stud.mit.edu.au");
        cy.get("#password").should("exist").type("xxxxxxxxxx")
    })


    it("visits signup page", function() {
        cy.contains("Signup").click();
        cy.url().should("include", "/signup");
    })

})