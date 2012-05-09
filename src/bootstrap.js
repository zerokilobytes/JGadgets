var APPLICATION_PATH = "../src";
$imports = new Array();

function include(component){
	var path = getpath(component);
	//$imports.push({name: component, path:path, loaded: true});
	$bootstrap.includeScript(APPLICATION_PATH + "/" + path);
	//alert(jQuery.isReady);
}
function require(component){
	var path = getpath(component);
	$imports.push({name: component, path:path, loaded: true});
	//$bootstrap.includeScript(APPLICATION_PATH + "/" + path);
	$bootstrap.getScript(APPLICATION_PATH + "/" + path);
	//alert();
}
 function getpath(component){
	component = component.replace(/\./g, "/");
	return component + '.js';
};
function start(){
	
	$.each($imports, function(index, value) {
		$bootstrap.getScript(APPLICATION_PATH + "/" + value.path, function(){
			value.loaded = true;
			//alert(value.name);
			$log.write(value.name);
		});
	});
	//while(!jQuery.isReady){setTimeout({}, 1);}
	//alert(jQuery.isReady);
}
(function($){

	var Bootstrap = function(){
		this.init = function(){
			//include("Core.Logger");
			
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
			//$.getScript(script, callback);
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

	//start();
})(jQuery);

