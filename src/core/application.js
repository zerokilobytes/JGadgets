/*!
 * Application file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */
alert("Application!");
var Application = function(container, options){
	var $window = null;
	var $panel = null;
	var $this = this;

	this.start = function() {
		
	};

	this.close = function() {
		options.close();
		return $this;
	};

	this.exit = function() {
		options.exit();
		return $this;
	};

	this.registerComponent = function(component){
	};
	
	this.registerWindow = function(windowPanel){
		windowPanel.setPanel($panel);
		$window = windowPanel;
	};

	this.Bootstrap = function (object) {
		$panel = $(container);
		_render();
		options.init();
		return $this;
    };

    function attachWindow(windowPanel){
    	//$this.registerComponent($window);
    }

	function _register(){
		
	}
	function _render(){
		$("body").css("overflow", "hidden");
		$panel.css('background-color', 'green');
		$panel.width($(window).width());
		$panel.height($(window).height());
		
		$(window).resize(function() {
			$panel.width($(window).width());
			$panel.height($(window).height());
		});
	}
	this.Bootstrap($this);
	return $this;
};
