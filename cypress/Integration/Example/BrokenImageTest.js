describe('Broken Images Testing', () => {

let URL = "http://the-internet.herokuapp.com/broken_images"

    it('Validating broken images', () => {

      cy.visit(URL)
  
    // Declared an array to store broken image URLs
      const brokenImages = [];
  
      // Get all images on the page
      cy.get('img').each(($img) => {

        const imgUrl = $img.prop('src')
  
        cy.request({
          url: imgUrl,
          failOnStatusCode: false 
        }).then((response) => {
          if (response.status === 404) {
            brokenImages.push(imgUrl) // Storing the broken image URL
          }
        })
        
      }).then(() => {
        // After checking all images, logging the broken image 
        if (brokenImages.length > 0) {
          cy.log(`Found ${brokenImages.length} broken images:`)
          cy.log(brokenImages.join('\n'))
        }
      })
    })
  })
  