/*!
 * Task plugin file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var DesktopPlugin = $model({
	extend: Window,
	type: 'DesktopPlugin',
	init: function(){
	log.write("Desktop loaded!");
	}
});