/*!
 * Task plugin file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var DesktopPlugin = $model({
	extend: Window,
	type: 'DesktopPlugin',
	$panel : null,
	setPanel: function(panel){
	$panel = panel;
	//this.$super.init.apply(this, arguments);
	log.write("Desktop loaded!");
	log.write("Panel @" + $(this.$panel.html()));
	}
});