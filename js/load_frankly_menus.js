jQuery(document).ready(function($){

	var menu_array;
	
	function set_menu_array(array) {
		menu_array = array;
	}
	
	function load_menus() {
		var frankly_nav_bar_menu = "", frankly_side_bar_menu = "", tempLine;
		for (var i = 0; i < menu_array.length; i++) {
		
			//For the first one, set the attributes of the unordered list
			if (i==0) {
				frankly_nav_bar_menu = add_class(menu_array[i], "nav navbar-nav");
				frankly_side_bar_menu = add_class(menu_array[i], "sidebar");
				frankly_side_bar_menu = add_id(frankly_side_bar_menu, "sidenavbar");
			} else if(menu_array[i].indexOf("<li") == 0) {
				if (i+1<menu_array.length && menu_array[i+1].indexOf("<ul")==0) {
					// The next element is a dropdown list
					menu_array[i] = menu_array[i].replace('</a>', '<b class="caret"></b></a>');
					frankly_nav_bar_menu += menu_array[i].replace('<a', '<a class="dropdown-toggle" data-toggle="dropdown"');
					
					frankly_nav_bar_menu += add_class(menu_array[i+1], "dropdown-menu");
					
					frankly_side_bar_menu += menu_array[i];
					frankly_side_bar_menu += menu_array[i+1];
					i = i+1;
					
				} else {
					frankly_nav_bar_menu += menu_array[i];
					frankly_side_bar_menu += menu_array[i];
				}
			} else {
				frankly_nav_bar_menu += menu_array[i];
				frankly_side_bar_menu += menu_array[i];
			}
		}
		
		$('#frankly-navbar-collapse').html(frankly_nav_bar_menu);
		$('#side-nav-container').html(frankly_side_bar_menu);
	}
	
	function add_class(str, classes) {
		if (str.indexOf("class=") == -1) {
			return str.replace(">", ' class="'+classes+'">');
		} else {
			return str.replace('class="', ' class="'+classes+' ');
		}
	}
	
	function add_id(str, id) {
		return str.replace(">", ' id="'+id+'">');
	}
	
	window.load_menus = load_menus;
	window.set_menu_array = set_menu_array;
});