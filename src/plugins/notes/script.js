/*!
 * Notes plugin file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var NotesPlugin = $model({
	extend: Plugin,
	type: 'NotesPlugin',
	init: function(){
	},
	render: function(callback){
		include_style("plugins/notes/style.css");
		load_file("plugins/notes/template.jst", callback);
	}
});