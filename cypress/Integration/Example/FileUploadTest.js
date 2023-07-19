describe('File Upload Test', () => {

    let URL = "http://the-internet.herokuapp.com/upload"

    it('Uploading File', () => {

        cy.visit(URL) // visiting the URL of website

        cy.get("#file-upload").selectFile("cypress/fixtures/file.txt") //taking file from fixtures folder

        cy.get("#file-submit").click()

        cy.get("#uploaded-files").contains("file.txt")

        cy.get("h3", { timeout: 30000 }).should("have.text","File Uploaded!")

    });

});