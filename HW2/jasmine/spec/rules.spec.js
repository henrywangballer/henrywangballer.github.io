describe("Bonus", function(){
   it("Any non-empty string: should Return False",function() { 
      expect(isEmpty("KOBE")).toEqual(false); 
   }); 

   it("Empty String: should Return True",function() { 
      expect(isEmpty("")).toEqual(true); 
   }); 

   it("undefined: should Return True",function() { 
      expect(isEmpty(NaN)).toEqual(true); 
   }); 

});