(function($){
	$.getScript("../src/core/kernel.js", function(){
		
	set_environment_path("../src");
	require  ("Bootstrap");

	require  ("Core.Process");

	require  ("Core.UI.Window");
	require  ("Core.UI.Plugin");
	
	require  ("Plugins.Desktop");
	require  ("Plugins.Taskbar");
	require  ("Plugins.Taskbar");
	require  ("Plugins.Notes");
	require  ("Plugins.Shortcut");

	process = new Process($("#desktop"));

	process.registerWindow(new DesktopPlugin());
	process.registerPlugin(new TaskbarPlugin());
	process.registerPlugin(new NotesPlugin());
	process.registerPlugin(new ShortcutPlugin());
	
	process.start();
	$log.write("Process was successfully started.");

	});
})(jQuery);