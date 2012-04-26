/*!
 * Application file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var Application = function(container, options){
	var $window = null;
	var $panel = null;
	var $this = this;

	this.start = function() {
		$panel = $(container);
		_render();
		options.init();
		return $this;
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
		log.write("Registered component " + component.type);
		log.write("Html 1" + $($panel).html());
	};
	
	this.registerWindow = function(windowPanel){
		log.write("Html ***" + $($panel).html());
		//windowPanel.setPanel($panel);
		//attachWindow(windowPanel);
		log.write("Registered window! " + windowPanel.type);
	};

	var Bootstrap = function (object) {

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
		log.write($panel + " Css Set!");
		log.write("Html 1" + $($panel).html());
	}
	Bootstrap($this);
	return $this;
};