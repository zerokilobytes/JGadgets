(function($){
	$.getScript("../src/bootstrap.js", function(){
		
	set_environment_path("../src");

	require  ("Core.Application");
	require  ("Core.UI.Window");
	require  ("Core.UI.Plugin");
	
	require  ("Plugins.Desktop");
	require  ("Plugins.Taskbar");
	require  ("Plugins.Taskbar");
	require  ("Plugins.Notes");

	application = new Application($("#desktop"));

	application.registerWindow(new DesktopPlugin());
	application.registerPlugin(new TaskbarPlugin());
	application.registerPlugin(new NotesPlugin());
	
	application.start();
	$log.write("E3");

	});
})(jQuery);