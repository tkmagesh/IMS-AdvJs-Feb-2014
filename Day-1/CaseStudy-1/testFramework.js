function test(title,specFn){
	$("<li>")
		.text(title)
		.addClass(specFn() ? "pass" : "fail")
		.appendTo("#ulTestList");
}