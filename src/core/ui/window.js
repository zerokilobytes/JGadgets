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
	
	setPanel: function(panel){
		this.$panel = panel;
			log.write("Panel loaded!");
		},

	addChild: function(child){
		
	}
});