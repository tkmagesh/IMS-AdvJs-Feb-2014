var myApp = myApp || {};
(function(myApp){
	function TaskCollectionView(tasks,templateId,$){
		this.$root = $;
		var self = this;
		this.init = function(){
			this.$root = $($(templateId).html());

			//View Events
			this.$root.find("#btnAdd").click(function(){
				var taskName = self.$root.find("#txtTask").val();
				var taskModel = new myApp.Task(taskName);
				tasks.add(taskModel);
			});

			//Model Events
			tasks.addSubscriber('added',function(task){
				var taskModelView = new myApp.TaskView(task,$);
				taskModelView.init();
				self.$root.find("#ulTaskList").append(taskModelView.$root);
			});
		};
	}
	myApp.TaskCollectionView = TaskCollectionView;
})(myApp);