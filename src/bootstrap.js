var APPLICATION_PATH = "../src";
$imports = new Array();

function include(component){
	var path = getpath(component);
	$imports.push({name: component, path:path});
	$bootstrap.getScript(APPLICATION_PATH + "/" + path);
}
function require(component){
	var path = getpath(component);
	$imports.push({name: component, path:path});
	$bootstrap.includeScript(APPLICATION_PATH + "/" + path);
}
getpath = function(component){
	component = component.replace(/\./g, "/");
	return component + '.js';
};
(function($){

	var Bootstrap = function(){
		this.init = function(){
			include("Core.Logger");
			
		};

		this.includeScript = function (path, onsuccess, oneror){
			var scriptUrl = path;
			var head = document.getElementsByTagName("head")[0];
			script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = scriptUrl;
	
			script.onload = function(e) {
				if(oneror){onsuccess(e);};
			};
	
			script.onerror = function(e) {
				if(oneror){oneror(e);};
			};
	
			head.appendChild(script);
		};
		
		this.getScript = function(script){
			$.getScript(script, function(xhr){
				//$log.write("Sript loaded!");
			});
		};
	};

	$bootstrap = new Bootstrap();

	include("Core.Logger");
	include("Core.Model");
	require("Core.Application");
	include("Core.Loader");
	
	include("Plugins.Desktop.Script");
	include("Core.UI.Plugin");
	include("Core.UI.Window");
	
})(jQuery);

