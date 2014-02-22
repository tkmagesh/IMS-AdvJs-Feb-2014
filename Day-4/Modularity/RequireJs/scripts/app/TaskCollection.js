define([],function(){
	function TaskCollection(){
		this.list = [];
		this.subscribers = {};
	}

	TaskCollection.prototype.add = function(task){
		this.list.push(task);
		this.trigger('added',task);
	}

	TaskCollection.prototype.addSubscriber = function(attrName,callback){
		if (!this.subscribers[attrName]) this.subscribers[attrName] = [];
		this.subscribers[attrName].push(callback);
	}

	TaskCollection.prototype.trigger = function(attrName){
		var aName = attrName;
		var args = arguments;
		for(var i=0;this.subscribers[aName] && i<this.subscribers[aName].length;i++){
			var self = this;
			setTimeout((function(index){
				return function(){
					self.subscribers[aName][index].apply(this,[].splice.call(args,1));
				}
			})(i));
		}
	}
	return TaskCollection;
});