function SalaryCalculator(){
		this.basic = 0;
		this.hra = 0;
		this.da = 0;
		this.tax = 0;
		this.subscribers = [];
	}

	SalaryCalculator.prototype.calculate = function(){
		var gross = this.basic + this.hra + this.da;
		var net = gross * ((100-this.tax)/100);
		this.salary = net;
		this.triggerSalaryChange();
	};

	SalaryCalculator.prototype.addChangeSubscriber = function(attrName,callback){
		this.subscribers.push(callback);
	}

	SalaryCalculator.prototype.triggerChange = function(attrName){
		for(var i=0;i<this.subscribers.length;i++){
			var self = this;
			setTimeout((function(index){
				return function(){
					self.subscribers[index]();
				}
			})(i));
		}
	}

	//SalaryCalculator.prototype.onSalaryChange = function(){};