function add(){
	function parseArg(n){
		if (!isNaN(n)) return parseInt(n);
		if (typeof n === "string") return 0;	
		if (typeof n === "function") return parseArg(n());
		if (n && !!n.length)	return add.apply(this,n);
		return 0;
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) :
		parseArg(arguments[0]) + add.apply(this,[].slice.call(arguments,1));
}