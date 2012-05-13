/*!
 * Notes plugin file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var ShortcutPlugin = $model({
	extend: Plugin,
	type: 'ShortcutPlugin',
	init: function(){
	},
	render: function(callback){
		include_style("plugins/shortcut/style.css");
		load_file("plugins/shortcut/template.jst", callback);
	}
});