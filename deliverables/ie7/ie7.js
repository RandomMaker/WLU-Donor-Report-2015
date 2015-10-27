/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'WLU-Donor-Report\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-school3': '&#xe600;',
		'icon-solid-bucket-2': '&#xe601;',
		'icon-solid-document-2': '&#xe602;',
		'icon-solid-group-1': '&#xe603;',
		'icon-solid-group-2': '&#xe604;',
		'icon-solid-up-2': '&#xe605;',
		'icon-stroke-gift-2': '&#xe606;',
		'icon-stroke-money-2': '&#xe607;',
		'icon-stroke-plus-1': '&#xe608;',
		'icon-stroke-up-3': '&#xe609;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
