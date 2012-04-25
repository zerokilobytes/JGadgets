(function($){
	application = new Application($("#desktop"), {
			init: function(){
				log.write("Application started!");
			}
		}
	);
	application.start();
	application.registerComponent("ui.window");
	application.registerComponent("ui.taskbar");
})(jQuery);