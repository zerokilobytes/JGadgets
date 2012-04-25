/*!
 * Application file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var Application = function(container, options){
	var panel = null;
	
	this.start = function() {
		panel = $(container);
		_render();
		options.init();
		return this;
	};
	
	this.close = function() {
		options.close();
		return this;
	};
	
	this.exit = function() {
		options.exit();
		return this;
	};
	
	this.register = function(component){
		
	};
	
	var Bootstrap = function (object) {

    };
	
	function _register(){
		
	}
	function _render(container){
		$("body").css("overflow", "hidden");
		panel.css('background-color', 'green');
		panel.width($(window).width());
		panel.height($(window).height());
		
		$(window).resize(function() {
			panel.width($(window).width());
			panel.height($(window).height());
		});
		log.write(container + " Css Set!");
	}
	Bootstrap(this);
	return this;
};