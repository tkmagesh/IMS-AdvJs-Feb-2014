define(['jquery'],function($){
	function TaskView(task){
		this.$root = $("<li>").text(task.name());
		var self = this;
		this.init = function(){

			//View Events
			this.$root.click(function(){
				task.toggleCompletion();
			});

			//Model Events
			task.addSubscriber('isCompleted',function(){
				if (task.isCompleted()){
					self.$root.addClass("completed");
				} else {
					self.$root.removeClass("completed");
				}
				
			});
		}
	}
	return TaskView;
});
