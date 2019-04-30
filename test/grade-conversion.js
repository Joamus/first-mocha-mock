const expect = require('chai').expect
const gradeConversion = require('../grade_conversion/grade-conversion')


describe('convertGrade()', () => {

  context('with arguments', () => {
    it('should convert the 12 in the Danish scale, to an A in the American scale', () => {

      expect(gradeConversion.convertGrade("12", "DK", "USA")).to.equal("A")
    })
  
    it('should convert an American B into a Danish 10', () => {
      
      expect(gradeConversion.convertGrade("B", "USA", "DK")).to.equal("10")
    })


  })
  


})
