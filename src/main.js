console.log(/^Plugins.\w+$/.test("Plugins.Desktop"));

var APPLICATION_PATH = "../src";

(function($){
	$.getScript("../src/bootstrap.js", function(){

	require("Core.Application");
	require("Core.UI.Window");
	require("Core.UI.Plugin");
	
	require("Plugins.Desktop");
	require("Plugins.Taskbar");
	require("Plugins.Taskbar");

	application = new Application($("#desktop"), {
			init: function(){
				//$log.write("Application started!");
			}
		}
	);
	//$log.write(jQuery.isReady);
	//alert("E0");
	//alert(jQuery.isReady);
	application.registerWindow(new DesktopPlugin());

	application.registerComponent(new TaskbarPlugin());
	application.start();
	$log.write("E3");
	
	});
})(jQuery);