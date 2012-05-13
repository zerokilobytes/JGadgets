/*!
 * Application file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var Process = function(container, options){
	var $this = this;
	$this.window = null;
	$this.container = null;
	

	this.start = function() {
		$this.window.load();
	};

	this.close = function() {
		options.close();
		return $this;
	};

	this.exit = function() {
		options.exit();
		return $this;
	};

	this.registerPlugin = function(plugin){
		$this.window.addPlugin(plugin);
	};
	
	this.registerWindow = function(windowPanel){
		windowPanel.setContainer($this.container);
		$this.window = windowPanel;
	};

	this.Bootstrap = function (object) {
		this.container = $(container);
		_render();
		if(options){
			options.init = options.init || function(){};
		}
		return $this;
    };

	function _register(){
		
	}
	function _render(){
		$("body").css("overflow", "hidden");
		$this.container.css('position', 'relative');
		$this.container.width($(window).width());
		$this.container.height($(window).height());
		
		$(window).resize(function() {
			$this.container.width($(window).width());
			$this.container.height($(window).height());
		});
	}
	$this.Bootstrap($this);
	return $this;
};