/*!
 * Task plugin file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var TaskbarPlugin = $model({
	extend: Plugin,
	type: 'TaskbarPlugin',
	init: function(){
	},
	render: function(callback){
		include_style("plugins/taskbar/style.css");
		load_file("plugins/taskbar/template.jst", callback);
	}
});