var myApp = myApp || {};
(function(myApp){
	function Task(taskName){
		var _name = taskName,
			_isCompleted = false;

		this.subscribers = {};
		this.name = function(val){
			if (typeof val === "undefined") return _name;
			_name = val;
			this.trigger('name');
		};

		this.isCompleted = function(){
			return _isCompleted;
		};

		this.toggleCompletion = function(){
			_isCompleted = !_isCompleted;
			this.trigger('isCompleted');
		}
	}


	Task.prototype.addSubscriber = function(attrName,callback){
		if (!this.subscribers[attrName]) this.subscribers[attrName] = [];
		this.subscribers[attrName].push(callback);
	}

	Task.prototype.trigger = function(attrName){
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
	myApp.Task = Task;
})(myApp);