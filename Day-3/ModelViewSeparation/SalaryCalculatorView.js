function SalaryCalculatorView(calculator,template){

		this.$root = $(template);
		var self = this;	
		this.init = function(){
				
			/*calculator.addChangeSubscriber("basic",function(){
				self.$root.find("#txtBasic").val(calculator.basic());
			});*/
			var callBackBoundToTHIS = $.proxy(function(){
				this.$root.find("#txtBasic").val(calculator.basic());
			},this);
			calculator.addChangeSubscriber("basic",callBackBoundToTHIS);

			calculator.addChangeSubscriber("hra",function(){
				self.$root.find("#txtHra").val(calculator.hra());
			});

			calculator.addChangeSubscriber("da",function(){
				self.$root.find("#txtDa").val(calculator.da());
			});


			calculator.addChangeSubscriber("tax",function(){
				self.$root.find("#rangeTax").val(calculator.tax());
				self.$root.find("#spanTax").text("[" + calculator.tax() + "]");
			});


			calculator.addChangeSubscriber("salary",updateSalary);
			
			this.$root.find("#txtBasic").change(onTxtBasicChange);
			
			this.$root.find("#txtHra").change(onTxtHraChange);

			this.$root.find("#txtDa").change(onTxtDaChange);

			this.$root.find("#rangeTax").change(onRangeTaxChange);

			this.$root.find("#btnCalculate").click(onBtnCalculateClick);
		}
		
		function onTxtBasicChange(){
			calculator.basic(parseInt(this.value));
		}

		function onTxtHraChange(){
			calculator.hra(parseInt(this.value));
		}
		function onTxtDaChange(){
			calculator.da(parseInt(this.value));
		}
		function onRangeTaxChange(){
			calculator.tax(parseInt(this.value));
			
		}

		function updateSalary(){
			self.$root.find("#divSalary").text(calculator.salary);
		}

		function onBtnCalculateClick(){
			calculator.calculate();
		}

	}