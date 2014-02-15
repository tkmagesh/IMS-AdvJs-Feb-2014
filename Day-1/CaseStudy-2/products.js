var products = [
	{id:10,name:'pen',cost:120,units:12,category:2},
	{id:20,name:'den',cost:100,units:24,category:1},
	{id:30,name:'len',cost:110,units:32,category:2},
	{id:50,name:'hen',cost:210,units:28,category:1},
	{id:90,name:'ten',cost:310,units:20,category:2},
	{id:40,name:'zen',cost:160,units:21,category:1}
]

function sort(list){
	/*
		implement the sort logic for sorting the list based on "id" (assuming that all the objects in the list have "id" attribute)
	*/
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i].id > list[j].id){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

/*
	Modify the above sort function in such way that the user can sort the list based on ANY attribute
*/

function sort(list,comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (comparerFn(list[i],list[j]) > 0){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}


function sort(list,attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			if (list[i][attrName] > list[j][attrName]){
				var temp = list[i];
				list[i] = list[j];
				list[j] = temp;
			}
		}
}

function filter(list,criteria){
	//you decide what should be the implementation of criteria
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteria(list[i])) result.push(list[i]);
	return result;
}

function filter(list,criteria,intResult){
	if (list.length === 0) return intResult;
	if (criteria(list[0])) intResult.push(list[0]);
	return filter.call(this,[].slice.call(list,1),criteria, intResult);
}

function groupBy(list,iterator,intResult){
	intResult = intResult || {};
	if (list.length === 0) return intResult;
	var key = iterator(list[0]);
	if (!intResult[key]) intResult[key] = [];
	intResult[key].push(list[0]);
	return groupBy.call(this,[].slice.call(list,1),iterator, intResult);
}