var $imports = new Array();

function include(component){
	var path = getpath(component);
	$bootstrap.includeScript(APPLICATION_PATH + "/" + path);
	$log.write("included " + component);
}

function require(component){
	if(!component_loaded(component)){
		var path = getpath(component);
		$imports.push({name: component, path:path, loaded: true});
		$bootstrap.getScript(APPLICATION_PATH + "/" + path);
		$log.write("Required " + component);
		return true;
	}
	$log.write("Could not required " + component + ". Component already required.");
	return false;
}
 function getpath(component){
	component = component.replace(/\./g, "/");
	return component + '.js';
};
function component_loaded(component){
	for (var i = 0; i < $imports.length; i++) {
		if($imports[i].name == component){
			return true;
		}
	}
	return false;
}
(function($){

	var Bootstrap = function(){
		this.init = function(){
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

		this.getScript = function(script, callback, async){
			async = async || false;
			jQuery.ajax({
			    async:async,
			    type:'GET',
			    url:script,
			    data:null,
			    success:callback,
			    dataType:'script',
			    error: function(xhr, textStatus, errorThrown) {
			    }
			});
		};
	};

	$bootstrap = new Bootstrap();

	require("Core.Logger");
	require("Core.Model");
})(jQuery);

