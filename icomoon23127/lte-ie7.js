/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-ampersand' : '&#xe000;',
			'icon-html5' : '&#xe001;',
			'icon-css3' : '&#xe002;',
			'icon-download' : '&#xe003;',
			'icon-cloud-download' : '&#xe004;',
			'icon-trophy' : '&#xe005;',
			'icon-earth' : '&#xe006;',
			'icon-html5-2' : '&#xe007;',
			'icon-cc' : '&#xe009;',
			'icon-mt' : '&#xe00a;',
			'icon-paperplane' : '&#xe008;',
			'icon-brush' : '&#xe00b;',
			'icon-paint-format' : '&#xe00c;',
			'icon-github' : '&#xe00e;',
			'icon-accessibility' : '&#xe00f;',
			'icon-chrome' : '&#xe00d;',
			'icon-key-fill' : '&#xe010;',
			'icon-key-stroke' : '&#xe011;',
			'icon-arrow-down-alt1' : '&#xe012;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};