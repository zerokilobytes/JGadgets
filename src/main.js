(function($){
	application = new Application($("#desktop"), {
			init: function(){
				log.write("Application started!");
			}
		}
	);
	application.start();
	application.registerWindow(new DesktopPlugin());
	application.registerComponent(new TaskbarPlugin());
})(jQuery);