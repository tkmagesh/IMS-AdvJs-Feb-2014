require.config({
    baseUrl: "/scripts/app",
    paths: {
    	"jquery" : "/scripts/lib/jquery",
        "lib": "/scripts/lib"
    }
});
require(['jquery','TaskCollection','TaskCollectionView'],function($,TaskCollection,TaskCollectionView){
		console.log($);
		$(function(){
			var tasks = new TaskCollection();
			var tasksView = new TaskCollectionView(tasks,"#appTemplate",$);
			tasksView.init();
			$(document.body).append(tasksView.$root);
		});
		
	});