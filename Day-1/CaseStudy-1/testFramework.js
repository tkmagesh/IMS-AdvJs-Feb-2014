function test(title,specFn){
	var testElement = document.createElement("li");
	testElement.innerText = title;
	if (specFn()){
		testElement.classList.add("pass");
	} else {
		testElement.classList.add("fail");
	}
	document.getElementById("ulTestList").appendChild(testElement);
}