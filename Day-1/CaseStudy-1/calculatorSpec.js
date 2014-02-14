function run(){
	test("should be able to add two numbers",function(){
		//arrange
		var number1 = 10, number2 = 20, expectedResult = 30;

		//act
		var result = add(number1, number2);
		
		//assert
		return result === expectedResult;
	});
}