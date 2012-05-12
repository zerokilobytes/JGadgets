/*!
 * Desktop plugin file
 * Copyright (C) 2011-2012 Markel Mairs
 * GNU General Public Version 2 License
 */

var DesktopPlugin = $model({
	extend: Window,
	type: 'DesktopPlugin',
	load: function(){
		var object = this;
		include_style("plugins/desktop/style.css");
		this.$panel.addClass("windowPanel");
		
		load_file("plugins/desktop/template.jst", function(data){
			object.$panel.append(data);
		});
	}
});