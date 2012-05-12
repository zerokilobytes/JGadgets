/*!
 * Window file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var Window = $model({
	type: 'Window',
	$panel: null,
	init: function(panel){
	},
	addPlugin: function(plugin){
		var object = this;
		plugin.render(function(data){
			object.$panel.append(data);
		});
	},
	setContainer: function(panel){
		this.$panel = panel;
	}
});