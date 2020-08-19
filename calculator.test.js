const{add,subtract,multiply,divide,equals,decimal,clear}=require("./calculator");

//Test cases for addition
describe("valid additions", () => {
    
    test("-2 + 1 = -1", () => {
      expect(add(-2, 1)).toEqual(-1);
    });
  
    test("10 + 20 != 40", () => {
      expect(add(10, 20)).not.toEqual(40);
    });
  });
  //Test cases for subtraction
  describe("valid subtraction", () => {
    
    test("10 -10 = 0", () => {
      expect(subtract(10, 10)).toEqual(0);
    });
    //Should be able to subtract an integer from a floating point number
    test("9.35 - 1 = 8.35", () => {
      expect(subtract(9.35, 1)).toEqual(8.35);
    });
  });
  //Test cases for Multiplication
  describe("valid Multiplication", () => {
    
    test("10 *-10 = -100", () => {  
      expect(multiply(10, -10)).toEqual(-100);
    });
  
    test("100 * 20 = 2000", () => {
      expect(multiply(100, 20)).toEqual(2000);
    });
  });
  ////Test cases for Division
  describe("valid divide", () => {
  //Should be able to divide 0 by a integer divisor  
    test("0/2000=0", () => {              
      expect(divide(0,2000)).toEqual(0);
    });
    //Should be able to divide a negative dividend by a positive divisor
    test("-1500/2000=-0.75", () => {              
      expect(divide(-1500,2000)).toEqual(-0.75);
    
  });
});
//Test cases for Decimal
describe("Valid decimal", () => {
   //Should be able to give a decimal 
      test("0.5/0.2=2.5", () => {
          expect(decimal(0.5,0.2)).toBe(2.5)

      });
      test("0.6/2.5=0.24" , () => {
          expect(decimal(0.6,2.5)).toBe(0.24)
      });
  });
  
//Test cases for Equal to
  
  describe("Valid Equals", () => {
    // Should be able to give valid result after the equal sign
        test("5*4 = 20", () => {
            expect(multiply(5, 4)).toEqual(20)
        });
    
         test("8-5 = 3", () => {
                expect(subtract(8,5)).toEqual(3)
            });
          });
    

  //Test cases for Clear

  describe("Clear", () => {
   // Should be able to clear the screen after inserting a negative floating point number and setting it to 0
    test("Clear the number to 0", () => {              
      expect(clear(-50.00)).toEqual(0);
    });
   // Should be able to clear the screen after inserting a positive integer
    test("Clear the number to 0", () => {
      expect(clear(100)).toEqual(0);
    });
  })
  


