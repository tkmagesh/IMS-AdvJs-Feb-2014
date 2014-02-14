function run(){
	test("should be able to add two numbers",function(){
		//arrange
		var number1 = 10, number2 = 20, expectedResult = 30;

		//act
		var result = add(number1, number2);

		//assert
		return result === expectedResult;
	});

	test("should be able to add two numbers in string format",function(){
		//arrange
		var number1 = "10", number2 = "20", expectedResult = 30;

		//act
		var result = add(number1, number2);
		
		//assert
		return result === expectedResult;
	});

	test("should be able to ignore strings that are not numbers",function(){
		//arrange
		var number1 = "10", number2 = "a", expectedResult = 10;

		//act
		var result = add(number1, number2);
		
		//assert
		return result === expectedResult;
	});

	test("should be able to add more than two numbers",function(){
		//arrange
		var number1 = "10", number2 = 20, number3 = 30, expectedResult = 60;

		//act
		var result = add(number1, number2, number3);
		
		//assert
		return result === expectedResult;
	});

	test("should be able to add more than two arguments in combinations",function(){
		//arrange
		var number1 = "10", number2 = 20, number3 = "a", expectedResult = 30;

		//act
		var result = add(number1, number2, number3);
		
		//assert
		return result === expectedResult;
	});

	test("should be able to pass functions returning numbers as arguments",function(){
		//arrange
		var f1 = function(){ return 10;}
			, f2 = function(){ return 20;}
			, expectedResult = 30;

		//act
		var result = add(f1, f2);
		
		//assert
		return result === expectedResult;
	});
	test("should be able to pass functions returning functions returning numbers as arguments",function(){
		//arrange
		var f1 = function(){ return function(){ return 10;}}
			, f2 = function(){ return function(){return 20;}}
			, expectedResult = 30;

		//act
		var result = add(f1, f2);
		
		//assert
		return result === expectedResult;
	});
	test("should be able to add an array of numbers",function(){
		//arrange
		var numbers = [10,20,30]
			, expectedResult = 60;

		//act
		var result = add(numbers);
		
		//assert
		return result === expectedResult;
	});
	test("should be able to add a nested array of numbers",function(){
		//arrange
		var numbers = [10,[20,[30,[40]]]]
			, expectedResult = 100;

		//act
		var result = add(numbers);
		
		//assert
		return result === expectedResult;
	});
	test("should be able to add functions returning  array of numbers",function(){
		//arrange
		var f1 = function(){ return [10,20];},
			f2 = function() { return [30,40];}
			, expectedResult = 100;
		

		//act
		var result = add(f1,f2);
		
		//assert
		return result === expectedResult;
	});
	test("should be able to add an array of functions returning  array of numbers",function(){
		//arrange
		var f1 = function(){ return [10,20];},
			f2 = function() { return [30,40];}
			, expectedResult = 100;
		

		//act
		var result = add([f1,f2]);
		
		//assert
		return result === expectedResult;
	});

}