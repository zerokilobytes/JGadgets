(function($){
	
	
	alert("Main");
	
	alert("L");
	//application = new Application();
	
	
	
	application = new Application($("#desktop"), {
			init: function(){
				//$log.write("Application started!");
			}
		}
	);
	alert("T");
	
	application.registerWindow(new DesktopPlugin());
	application.registerComponent(new TaskbarPlugin());
	application.start();
	alert("E");
})(jQuery);