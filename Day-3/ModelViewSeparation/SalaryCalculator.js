function SalaryCalculator(){
		var _basic, _hra, _da, _tax;

		this.basic = function(val){
			if (typeof val === "undefined") return _basic;
			_basic = val;
			this.triggerChange('basic');
		};
		this.hra = function(val){
			if (typeof val === "undefined") return _hra;
			_hra = val;
			this.triggerChange('hra');
		};
		this.da = function(val){
			if (typeof val === "undefined") return _da;
			_da = val;
			this.triggerChange('da');
		};
		this.tax = function(val){
			if (typeof val === "undefined") return _tax;
			_tax = val;
			this.triggerChange('tax');
		};

		
		this.subscribers = {};
	}

	SalaryCalculator.prototype.calculate = function(){
		var gross = this.basic() + this.hra() + this.da();
		var net = gross * ((100-this.tax())/100);
		this.salary = net;
		this.triggerChange('salary');
	};

	SalaryCalculator.prototype.addChangeSubscriber = function(attrName,callback){
		if (!this.subscribers[attrName]) this.subscribers[attrName] = [];
		this.subscribers[attrName].push(callback);
	}

	SalaryCalculator.prototype.triggerChange = function(attrName){
		var aName = attrName;
		for(var i=0;this.subscribers[aName] && i<this.subscribers[aName].length;i++){
			var self = this;
			setTimeout((function(index){
				return function(){
					self.subscribers[aName][index]();
				}
			})(i));
		}
	}

	//SalaryCalculator.prototype.onSalaryChange = function(){};