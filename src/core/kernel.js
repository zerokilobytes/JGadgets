var APPLICATION_PATH = null;
var $imports = new Array();

function include(component){
	var path = getpath(component);
	$kernel.includeScript(APPLICATION_PATH + "/" + path);
	$log.write("included " + component);
}

function require(component){
	if(!component_loaded(component)){
		var path = getpath(component);
		$imports.push({name: component, path:path, loaded: true});
		$kernel.getScript(APPLICATION_PATH + "/" + path);
		$log.write("Required " + component);
		return true;
	}
	$log.write("Could not required '" + component + "'. Component already required.");
	return false;
}
 function getpath(component){
	if(/^Plugins.\w+$/.test(component)){
		component = component + ".Script";
	}
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

function set_environment_path(path){
	APPLICATION_PATH = path;
	init_application();
}
function init_application(){
	require  ("Core.Component.Logger") ;
	require  ("Core.Model");
}
function include_style(style){
	$('head').append($('<link rel="stylesheet" type="text/css" />').attr('href',  APPLICATION_PATH + "/" + style + uid()));
}
function load_file(path, success){
	$kernel.ajax(true, 'GET', APPLICATION_PATH + "/" + path + uid(), null, null, success, null);
}
function uid() {
	var min = 10000;
	var max = 99999;
	return "?uid=" + Math.floor(Math.random() * (max - min + 1)) + min + "";
}
var Kernel = function(){
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
	return this.ajax(async, 'GET', script, null, 'script', null, null);
	};
	this.ajax = function(async, type, url, data, dataType, success, error){
		jQuery.ajax({
		    async:async,
		    type:type,
		    url:url,
		    data:data,
		    success:success,
		    dataType:dataType,
		    error: function(xhr, textStatus, errorThrown) {
		    }
		});
	};
};
var ObjectManager = function(){
};
var ProcessManager = function(){
};
var SecurityManager = function(){
};

$kernel = new Kernel();