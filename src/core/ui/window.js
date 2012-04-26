/*!
 * Window file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var Window = $model({
	type: 'Window',
	panel: null,
	init: function($panel){
		panel = $panel;
		log.write("Window loaded!");
	},

	addChild: function(child){
		
	}
});