// JavaScript Document
function insstr(s1, s2, n) { return s1.slice(0, n) + s2 + s1.slice(n+1) }

function get_wweight() {
	var frameWidth=800; 
	if (self.innerWidth) frameWidth = self.innerWidth; 
	else if (document.documentElement && document.documentElement.clientWidth) frameWidth = document.documentElement.clientWidth; 
	else if (document.body) frameWidth = document.body.clientWidth; 

	return frameWidth; }

function get_wheight() {
	var frameHeight=640; 
	if (self.innerHeight) frameHeight = self.innerHeight; 
	else if (document.documentElement && document.documentElement.clientHeight) frameHeight = document.documentElement.clientHeight; 
	else if (document.body) frameHeight = document.body.clientHeight; 
	return frameHeight; }

function text_3d(text, x, y, tcolor, fsize, xid, fweight, ffamily, zind){
	if (!text) return null
	if (!ffamily) ffamily="arial"
	if (!fweight) fweight=800
	if (!fsize) fsize=36
	if (!tcolor) tcolor="00aaff"
	if (!x) x=0
	if (!y) y=0 
	if (!xid) xid="" 

	var sd=4, hd=2 // сдвиг тени и подсветки
	var xzind=" ;z-Index:1 "
	if (zind) xzind=" ;z-Index: " + zind
	var xstyle="font-family: " + ffamily + "; font-size: " + fsize + "; font-weight: " + fweight + ";"

	var xstr='<div STYLE="position: absolute; top:' + (y + sd) + '; left: ' + (x + sd) + xzind + '">'
	xstr+='<p ID=' + xid +'_3 STYLE="' + xstyle + ' color: gray">' + text + '</p> </div>'

	xstr+='<div STYLE="position: absolute; top: ' + y + '; left: ' + x + xzind + '">'
	xstr+='<p ID=' + xid +'_2 STYLE="' + xstyle + ' color: silver">' + text + '</p> </div>'

	xstr+='<div STYLE="position: absolute; top: ' + (y + hd) + '; left: ' + (x + hd) + xzind + '">'
	xstr+='<p ID=' + xid +'_3 STYLE="' + xstyle + ' color: ' + tcolor + '">' + text + '</p> </div>'

	return xstr }// запись в документ 


//*************************************************************************     TOP    ********************************************************
//*********************************************************************************************************************************************	
function tl_move(alpha, a, b, omega, x0, y0, ztime, dt, start_img_size, scr_size) {
	if (screen.width >= 1280) {
		document.write('<img SRC="pic/zemlya' + scr_size + '.gif" STYLE="top:50px; left:27px"> <img ID="tl_move_img" SRC="pic/tl_pic-1.gif" STYLE="visibility:hidden">')}
	if (screen.width >= 1024 & screen.width < 1280) {
		document.write('<img SRC="pic/zemlya' + scr_size + '.gif" STYLE="top:35px; left:27px"> <img ID="tl_move_img" SRC="pic/tl_pic-1.gif" STYLE="visibility:hidden">')}
	if (screen.width < 1024) {
		document.write('<img SRC="pic/zemlya' + scr_size + '.gif" STYLE="top:37px; left:22px"> <img ID="tl_move_img" SRC="pic/tl_pic-1.gif" STYLE="visibility:hidden">')}

	tl_img_size=0
	tl_t = 120 
	setInterval("move_elipse('tl_move_img'," + alpha+ "," + a + "," + b + "," + omega + "," + x0 + "," + y0 + "," + ztime + "," + dt + "," + start_img_size + ")",  ztime*100) }

function move_elipse(xid, alpha, a, b, omega, x0, y0, ztime, dt, start_img_size) {    // пересчет координат,вызывается из tl_moveO 
	tl_t+= ztime
	
	// х,у - координаты в собственной системе координат 
	var x = a*Math.cos((omega*tl_t + dt)*Math.PI/180)
	var y = b*Math.sin((omega*tl_t + dt)*Math.PI/180)
	var as = Math.sin(alpha*Math.PI/180)
	var ac = Math.cos(alpha*Math.PI/180)

	if (screen.width >= 1280) {
		switch (tl_t) {
			case 51: document.all[xid].style.visibility = "visible"; break
			case 70: tl_img_size ++; break
			case 74: tl_img_size ++; break
			case 81: tl_img_size --; break
			case 103: tl_img_size = 0; break
			case 104: tl_img_size = -2; break
			case 125: {
				tl_t=49; 
				tl_img_size=0; 
				document.all[xid].style.visibility = "hidden"
				document.all[xid].height=start_img_size
			
				tl_img_number = parseInt(document.all[xid].src.substr(document.all[xid].src.length-5,1)) + 1
				if (tl_img_number == 8) tl_img_number=1
				document.all[xid].src = insstr(document.all[xid].src, tl_img_number.toString(), document.all[xid].src.length-5)	} } }
	if (screen.width >= 1024 & screen.width < 1280) {
		switch (tl_t) {
			case 48: document.all[xid].style.visibility = "visible"; break
			case 71: tl_img_size ++; break
			case 82: tl_img_size --; break
			case 89: tl_img_size ++; break
			case 93: tl_img_size ++; break
			case 99: tl_img_size = 0; break
			case 102: tl_img_size = -2; break
			case 121: {
				tl_t=45; 
				tl_img_size=0; 
				document.all[xid].style.visibility = "hidden"
				document.all[xid].height=start_img_size
			
				tl_img_number = parseInt(document.all[xid].src.substr(document.all[xid].src.length-5,1)) + 1
				if (tl_img_number == 8) tl_img_number=1
				document.all[xid].src = insstr(document.all[xid].src, tl_img_number.toString(), document.all[xid].src.length-5)	} } }
	if (screen.width < 1024) {
		switch (tl_t) {
			case 48: document.all[xid].style.visibility = "visible"; break
			case 68: tl_img_size ++; break
			case 74: tl_img_size ++; break
			case 76: tl_img_size --; break
			case 95: tl_img_size --; break
			case 99: tl_img_size --; break
			case 106: tl_img_size --; break
			case 121: {
				tl_t=45; 
				tl_img_size=0; 
				document.all[xid].style.visibility = "hidden"
				document.all[xid].height=start_img_size
			
				tl_img_number = parseInt(document.all[xid].src.substr(document.all[xid].src.length-5,1)) + 1
				if (tl_img_number == 8) tl_img_number=1
				document.all[xid].src = insstr(document.all[xid].src, tl_img_number.toString(), document.all[xid].src.length-5)	} } }
			
	document.all[xid].height += tl_img_size
	document.all[xid].style.top = -x*as + y*ac + y0
	document.all[xid].style.left = x*ac + y*as + x0  }

function paint_top() {
	var xstr = '', kv = "'", tmp = -1, loc_tmp = ''

	navigator_name = 'Explorer'
	tmp = navigator.userAgent.indexOf('Opera')
	if (tmp != -1) navigator_name = 'Opera'
	tmp = -1
	tmp = navigator.userAgent.indexOf('Navigator')
	if (tmp != -1) navigator_name = 'Netscape'

	loc_tmp = window.location.href.slice(window.location.href.lastIndexOf('/') + 1)
	loc_tmp = loc_tmp.slice(0, loc_tmp.indexOf('_'))
	
	
	if (screen.width >= 1280) {
		if (navigator_name == 'Opera' || navigator_name == 'Netscape') w_weight = get_wweight() - 17 
		else w_weight = get_wweight()
		if (w_weight < 870 ) w_weight = 870
		var text_left = w_weight - 295
	
		document.all['main_table'].width =  w_weight.toString() + "px" 

		scr_size = '_1280_1024'
		document.all['main_table_top'].height =  '143px'
		document.all['main_table_top'].style.background ='url(pic/top_fon' + scr_size + '.gif) repeat-x left top'

		tl_move(65, 62, 50, 4, 50, 63, 1, 1, 20, scr_size)

		if (navigator_name != 'Netscape') {
			xstr += text_3d('PRODUCTION',  text_left, 17, '330033', 18)
			xstr += text_3d('COMMERCIAL', text_left, 45, '330033', 14)
			xstr += text_3d('COMPANY', text_left + 110, 45, '330033', 14)
			xstr += text_3d('"LASTOCHKA"', text_left, 65, 'CC0000', 28) }
		else {
			xstr += text_3d('PRODUCTION',  text_left, 1, '330033', 18)
			xstr += text_3d('COMMERCIAL', text_left, 32, '330033', 14)
			xstr += text_3d('COMPANY', text_left + 110, 32, '330033', 14)
			xstr += text_3d('"LASTOCHKA"', text_left, 35, 'CC0000', 28) }
		xstr += '<img SRC="pic/tr_logo' + scr_size + '.gif" STYLE="top:5px; left:' + (w_weight - 100).toString() + 'px">'
		xstr += '<img SRC="pic/top_kontyr.gif" WIDTH="146px" HEIGHT="3px" STYLE="top:140px; left:0px">'

		xstr += '<img SRC="pic/tc_lang_change_naklon' + scr_size + '.gif" STYLE="top:132px; left:146px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon_naklonleft' + scr_size + '.gif" STYLE="top:101px; left:154px">'

		for (i = 160; i < w_weight - 300; i += 50) xstr += '<img SRC="pic/tc_lang_change' + scr_size + '.gif" STYLE="top:132px; left:' + i.toString() + 'px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon' + scr_size + '.gif" HEIGHT="31" WIDTH="' + (w_weight - 540).toString() + '" STYLE="top:101px; left:199px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon_naklonright' + scr_size + '.gif" STYLE="top:101px; left:' + (w_weight - 354).toString() + 'px">'

		for (i = 100; i <= 290; i += 95) xstr += '<img SRC="pic/tr_lang_change' + scr_size + '.gif" STYLE="top:110px; left:' + (w_weight - i).toString() + 'px">'
		xstr += '<img SRC="pic/tr_lang_change_naklon' + scr_size + '.gif" STYLE="top:110px; left:' + (w_weight - 315).toString() + 'px">'

		xstr += '<a HREF="main_news.html" STYLE="top:116px; left:' + (w_weight - 35).toString() + '"><img ID="tr_rus" SRC="pic/tr_rus' + scr_size + '.gif" BORDER="0" ALT="Русский" onMouseOver="tr_mouse_move('+kv+'tr_rus'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_rus'+kv+','+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_rus'+kv+', '+kv+'_down'+kv+')"></a>'
		xstr += '<a HREF="main_news_eng.html" STYLE="top:116px; left:' + (w_weight - 70).toString() + '"><img ID="tr_eng" SRC="pic/tr_eng' + scr_size + '.gif" BORDER="0" ALT="English" onMouseOver="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+'_down'+kv+')"></a>'
		xstr += '<a HREF="find.html" STYLE="top:117px; left:' + (w_weight - 115).toString() + '"><img ID="tr_find" SRC="pic/tr_find' + scr_size + '.gif" BORDER="0" ALT="Find" onMouseOver="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+'_down'+kv+')"></a>'
		xstr += '<input TYPE="text" ID="tr_find_form" DIR="ltr" LANG="eng" VALUE="site search" STYLE="position:absolute; font-size:8pt; background:#a9aba8; top:117px; left:' + (w_weight - 290).toString() + '" SIZE="30" onMouseOver="tr_find_form_over()" onMouseOut="tr_find_form_out()" onFocus="tr_find_form_focus()">'

		xstr += '<table WIDTH="' + (w_weight - 500).toString() + '" BORDER="0" BORDERCOLOR="red" CELLSPACING="0" CELLPADDING="0" STYLE="position:absolute; top:0px; left:185px">'
		xstr += '<tr ALIGN="center" VALIGN="top">'
		xstr += 	'<td WIDTH="21%" HEIGHT="102px"><img ID="tc_main_pic" SRC="pic/tc_main_pic.gif" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="26%" HEIGHT="102px"><img ID="tc_product_pic" SRC="pic/tc_product_pic.gif" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="17%" HEIGHT="102px"><img ID="tc_services_pic" SRC="pic/tc_services_pic.gif" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="36%" HEIGHT="102px"><img ID="tc_cooperation_pic" SRC="pic/tc_cooperation_pic.gif" STYLE="position:relative; visibility:hidden"></td>'
		xstr += '</tr>'
		xstr += '<tr ALIGN="center" VALIGN="middle">'
		if (loc_tmp == 'main') 	xstr += 	'<td WIDTH="21%"><a HREF="main_news_eng.html" ID="tc_zagolovki_main" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_1280_1024("tc_zagolovki_main","tc_main_pic") onMouseOut=tc_out_1280_1024("tc_zagolovki_main","tc_main_pic")>Home</a></td>'
		else 					xstr += 	'<td WIDTH="21%"><a HREF="main_news_eng.html" ID="tc_zagolovki_main" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_1280_1024("tc_zagolovki_main","tc_main_pic") onMouseOut=tc_out_1280_1024("tc_zagolovki_main","tc_main_pic")>Home</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'product')	xstr += 	'<td WIDTH="26%"><a HREF="product_induct-pech_eng.html" ID="tc_zagolovki_product" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_1280_1024("tc_zagolovki_product","tc_product_pic") onMouseOut=tc_out_1280_1024("tc_zagolovki_product","tc_product_pic")>Products</a></td>'
		else						xstr += 	'<td WIDTH="26%"><a HREF="product_induct-pech_eng.html" ID="tc_zagolovki_product" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_1280_1024("tc_zagolovki_product","tc_product_pic") onMouseOut=tc_out_1280_1024("tc_zagolovki_product","tc_product_pic")>Products</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'services')	xstr += 	'<td WIDTH="17%"><a HREF="services_design_eng.html" ID="tc_zagolovki_services" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_1280_1024("tc_zagolovki_services","tc_services_pic") onMouseOut=tc_out_1280_1024("tc_zagolovki_services","tc_services_pic")>Services</a></td>'
		else						xstr += 	'<td WIDTH="17%"><a HREF="services_design_eng.html" ID="tc_zagolovki_services" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_1280_1024("tc_zagolovki_services","tc_services_pic") onMouseOut=tc_out_1280_1024("tc_zagolovki_services","tc_services_pic")>Services</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'cooperation')	xstr += 	'<td WIDTH="36%"><a HREF="cooperation_projects_eng.html" ID="tc_zagolovki_cooperation" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_1280_1024("tc_zagolovki_cooperation","tc_cooperation_pic") onMouseOut=tc_out_1280_1024("tc_zagolovki_cooperation","tc_cooperation_pic")>Cooperation</a></td>'
		else							xstr += 	'<td WIDTH="36%"><a HREF="cooperation_projects_eng.html" ID="tc_zagolovki_cooperation" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_1280_1024("tc_zagolovki_cooperation","tc_cooperation_pic") onMouseOut=tc_out_1280_1024("tc_zagolovki_cooperation","tc_cooperation_pic")>Cooperation</a></td>'
		xstr += '</tr></table>' }

	if (screen.width >= 1024 & screen.width < 1280) {
		if (navigator_name == 'Opera' || navigator_name == 'Netscape') w_weight = get_wweight() - 17 
		else w_weight = get_wweight()
		if (w_weight < 680) w_weight = 680
		var text_left = w_weight - 221
	
		document.all['main_table'].width =  w_weight.toString() + "px" 

		scr_size = '_1024_768'
		document.all['main_table_top'].height =  '103px'
		document.all['main_table_top'].style.background ='url(pic/top_fon' + scr_size + '.gif) repeat-x left top'

		tl_move(55, 48, 38, 4, 42, 48, 1, 1, 18, scr_size)
		
		if (navigator_name != 'Netscape') {
			xstr += text_3d('PRODUCTION',  text_left, 8, "330033", 14)
			xstr += text_3d('COMMERCIAL', text_left, 29, "330033", 10)
			xstr += text_3d('COMPANY', text_left + 80, 29, "330033", 10)
			xstr += text_3d('"LASTOCHKA"', text_left, 44, "CC0000", 21) }
		else {
			xstr += text_3d('PRODUCTION',  text_left, -8, "330033", 14)
			xstr += text_3d('COMMERCIAL', text_left, 16, "330033", 10)
			xstr += text_3d('COMPANY', text_left + 80, 16, "330033", 10)
			xstr += text_3d('"LASTOCHKA"', text_left, 20, "CC0000", 21) }
		xstr += '<img SRC="pic/tr_logo' + scr_size + '.gif" STYLE="top:5px; left:' + (w_weight - 67).toString() + 'px">'
		xstr += '<img SRC="pic/top_kontyr.gif" WIDTH="125px" HEIGHT="3px" STYLE="top:100px; left:0px">'

		xstr += '<img SRC="pic/tc_lang_change_naklon' + scr_size + '.gif" STYLE="top:94px; left:125px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon_naklonleft' + scr_size + '.gif" STYLE="top:68px; left:130px">'

		for (i = 135; i < w_weight - 200; i += 50) xstr += '<img SRC="pic/tc_lang_change' + scr_size + '.gif" STYLE="top:94px; left:' + i.toString() + 'px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon' + scr_size + '.gif" HEIGHT="26" WIDTH="' + (w_weight - 430).toString() + '" STYLE="top:68px; left:175px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon_naklonright' + scr_size + '.gif" STYLE="top:68px; left:' + (w_weight - 258).toString() + 'px">'

		xstr += '<img SRC="pic/tr_lang_change' + scr_size + '.gif" STYLE="top:77px; left:' + (w_weight - 115).toString() + 'px">'
		xstr += '<img SRC="pic/tr_lang_change' + scr_size + '.gif" STYLE="top:77px; left:' + (w_weight - 215).toString() + 'px">'
		xstr += '<img SRC="pic/tr_lang_change_naklon' + scr_size + '.gif" STYLE="top:77px; left:' + (w_weight - 235).toString() + 'px">'

		xstr += '<a HREF="main_news.html" STYLE="top:82px; left:' + (w_weight - 30).toString() + '"><img ID="tr_rus" SRC="pic/tr_rus' + scr_size + '.gif" BORDER="0" ALT="Русский" onMouseOver="tr_mouse_move('+kv+'tr_rus'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_rus'+kv+','+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_rus'+kv+', '+kv+'_down'+kv+')"></a>'
		xstr += '<a HREF="main_news_eng.html" STYLE="top:82px; left:' + (w_weight - 60).toString() + '"><img ID="tr_eng" SRC="pic/tr_eng' + scr_size + '.gif" BORDER="0" ALT="English" onMouseOver="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+'_down'+kv+')"></a>'
		xstr += '<a HREF="find.html" STYLE="top:82px; left:' + (w_weight - 85).toString() + '"><img ID="tr_find" SRC="pic/tr_find' + scr_size + '.gif" BORDER="0" ALT="Find" onMouseOver="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+'_down'+kv+')"></a>'
		if (navigator_name != "Opera") {
			xstr += '<input TYPE="text" ID="tr_find_form" DIR="ltr" LANG="en" VALUE="site search" STYLE="position:absolute; font-size:9px; background:#a9aba8; top:80px; left:' + (w_weight - 210).toString() + '" SIZE="19" onMouseOver="tr_find_form_over()" onMouseOut="tr_find_form_out()" onFocus="tr_find_form_focus()">' }
		else {
			xstr += '<input TYPE="text" ID="tr_find_form" DIR="ltr" LANG="en" VALUE="site search" STYLE="position:absolute; font-size:11px; background:#a9aba8; top:80px; left:' + (w_weight - 210).toString() + '" SIZE="22" onMouseOver="tr_find_form_over()" onMouseOut="tr_find_form_out()" onFocus="tr_find_form_focus()">' }

		xstr += '<table WIDTH="' + (w_weight - 395).toString() + '" BORDER="0" BORDERCOLOR="red" CELLSPACING="0" CELLPADDING="0" STYLE="position:absolute; top:0px; left:160px">'
		xstr += '<tr ALIGN="center" VALIGN="top">'
		xstr += 	'<td WIDTH="21%" HEIGHT="71px"><img ID="tc_main_pic" SRC="pic/tc_main_pic.gif" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="26%" HEIGHT="71px"><img ID="tc_product_pic" SRC="pic/tc_product_pic.gif" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="17%" HEIGHT="71px"><img ID="tc_services_pic" SRC="pic/tc_services_pic.gif" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="36%" HEIGHT="71px"><img ID="tc_cooperation_pic" SRC="pic/tc_cooperation_pic.gif" STYLE="position:relative; visibility:hidden"></td>'
		xstr += '</tr>'
		xstr += '<tr ALIGN="center" VALIGN="middle">'
		if (loc_tmp == 'main')	xstr += 	'<td WIDTH="21%"><a HREF="main_news_eng.html" ID="tc_zagolovki_main" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_1024_768("tc_zagolovki_main","tc_main_pic") onMouseOut=tc_out_1024_768("tc_zagolovki_main","tc_main_pic")>Home</a></td>'
		else					xstr += 	'<td WIDTH="21%"><a HREF="main_news_eng.html" ID="tc_zagolovki_main" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_1024_768("tc_zagolovki_main","tc_main_pic") onMouseOut=tc_out_1024_768("tc_zagolovki_main","tc_main_pic")>Home</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'product')	xstr += 	'<td WIDTH="26%"><a HREF="product_induct-pech_eng.html" ID="tc_zagolovki_product" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_1024_768("tc_zagolovki_product","tc_product_pic") onMouseOut=tc_out_1024_768("tc_zagolovki_product","tc_product_pic")>Products</a></td>'
		else						xstr += 	'<td WIDTH="26%"><a HREF="product_induct-pech_eng.html" ID="tc_zagolovki_product" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_1024_768("tc_zagolovki_product","tc_product_pic") onMouseOut=tc_out_1024_768("tc_zagolovki_product","tc_product_pic")>Products</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'services')	xstr += 	'<td WIDTH="17%"><a HREF="services_design_eng.html" ID="tc_zagolovki_services" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_1024_768("tc_zagolovki_services","tc_services_pic") onMouseOut=tc_out_1024_768("tc_zagolovki_services","tc_services_pic")>Services</a></td>'	
		else						xstr += 	'<td WIDTH="17%"><a HREF="services_design_eng.html" ID="tc_zagolovki_services" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_1024_768("tc_zagolovki_services","tc_services_pic") onMouseOut=tc_out_1024_768("tc_zagolovki_services","tc_services_pic")>Services</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'cooperation')	xstr += 	'<td WIDTH="36%"><a HREF="cooperation_projects_eng.html" ID="tc_zagolovki_cooperation" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_1024_768("tc_zagolovki_cooperation","tc_cooperation_pic") onMouseOut=tc_out_1024_768("tc_zagolovki_cooperation","tc_cooperation_pic")>Cooperation</a></td>'
		else							xstr += 	'<td WIDTH="36%"><a HREF="cooperation_projects_eng.html" ID="tc_zagolovki_cooperation" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_1024_768("tc_zagolovki_cooperation","tc_cooperation_pic") onMouseOut=tc_out_1024_768("tc_zagolovki_cooperation","tc_cooperation_pic")>Cooperation</a></td>'
		xstr += '</tr></table>' }

	if (screen.width < 1024) {
		if (navigator_name == 'Opera' || navigator_name == 'Netscape') w_weight = get_wweight() - 17 
		else w_weight = get_wweight()
		if (w_weight < 620) w_weight = 620
		var text_left = w_weight - 193
	
		document.all['main_table'].width =  w_weight.toString() + "px" 

		scr_size = '_800_600'
		document.all['main_table_top'].height =  '91px'
		document.all['main_table_top'].style.background ='url(pic/top_fon' + scr_size + '.gif) repeat-x left top'

		tl_move(55, 45, 32, 4, 37, 44, 1, 1, 15, scr_size)

		if (navigator_name != "Netscape") {
			xstr += text_3d("PRODUCTION",  text_left, 6, "330033", 12)
			xstr += text_3d("COMMERCIAL", text_left, 25, "330033", 9)
			xstr += text_3d("COMPANY", text_left + 70, 25, "330033", 9)
			xstr += text_3d('"LASTOCHKA"', text_left, 39, "CC0000", 17) }
		else {
			xstr += text_3d("PRODUCTION",  text_left, -7, "330033", 12)
			xstr += text_3d("COMMERCIAL", text_left, 16, "330033", 9)
			xstr += text_3d("COMPANY", text_left + 70, 16, "330033", 9)
			xstr += text_3d('"LASTOCHKA"', text_left, 20, "CC0000", 17) }
		xstr += '<img SRC="pic/tr_logo' + scr_size + '.gif" STYLE="top:5px; left:' + (w_weight - 63).toString() + 'px">'
		xstr += '<img SRC="pic/top_kontyr.gif" WIDTH="110px" HEIGHT="3px" STYLE="top:88px; left:0px">'

		xstr += '<img SRC="pic/tc_lang_change_naklon' + scr_size + '.gif" STYLE="top:84px; left:110px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon_naklonleft' + scr_size + '.gif" STYLE="top:63px; left:114px">'

		for (i = 120; i < w_weight - 200; i += 50) xstr += '<img SRC="pic/tc_lang_change' + scr_size + '.gif" STYLE="top:84px; left:' + i.toString() + 'px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon' + scr_size + '.gif" HEIGHT="21" WIDTH="' + (w_weight - 370).toString() + '" STYLE="top:63px; left:150px">'
		xstr += '<img SRC="pic/tc_zagolovki_fon_naklonright' + scr_size + '.gif" STYLE="top:63px; left:' + (w_weight - 226).toString() + 'px">'

		xstr += '<img SRC="pic/tr_lang_change' + scr_size + '.gif" STYLE="top:69px; left:' + (w_weight - 100).toString() + 'px">'
		xstr += '<img SRC="pic/tr_lang_change' + scr_size + '.gif" STYLE="top:69px; left:' + (w_weight - 193).toString() + 'px">'
		xstr += '<img SRC="pic/tr_lang_change_naklon' + scr_size + '.gif" STYLE="top:69px; left:' + (w_weight - 210).toString() + 'px">'

		xstr += '<a HREF="main_news.html" STYLE="top:74px; left:' + (w_weight - 27).toString() + '"><img ID="tr_rus" SRC="pic/tr_rus' + scr_size + '.gif" BORDER="0" ALT="Русский" onMouseOver="tr_mouse_move('+kv+'tr_rus'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_rus'+kv+','+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_rus'+kv+', '+kv+'_down'+kv+')"></a>'
		xstr += '<a HREF="main_news_eng.html" STYLE="top:74px; left:' + (w_weight - 54).toString() + '"><img ID="tr_eng" SRC="pic/tr_eng' + scr_size + '.gif" BORDER="0" ALT="English" onMouseOver="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_eng'+kv+', '+kv+'_down'+kv+')"></a>'
		xstr += '<a HREF="find.html" STYLE="top:74px; left:' + (w_weight - 80).toString() + '"><img ID="tr_find" SRC="pic/tr_find' + scr_size + '.gif" BORDER="0" ALT="Find" onMouseOver="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+'_over'+kv+')" onMouseOut="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+kv+')" onMouseDown="tr_mouse_move('+kv+'tr_find'+kv+', '+kv+'_down'+kv+')"></a>'
		if (navigator_name != "Opera") {
			xstr += '<input TYPE="text" ID="tr_find_form" DIR="ltr" LANG="en" VALUE="site search" STYLE="position:absolute; font-size:8px; background:#a9aba8; top:73px; left:' + (w_weight - 193).toString() + '" SIZE="23" onMouseOver="tr_find_form_over()" onMouseOut="tr_find_form_out()" onFocus="tr_find_form_focus()">' }
		else {
			xstr += '<input TYPE="text" ID="tr_find_form" DIR="ltr" LANG="en" VALUE="site search" STYLE="position:absolute; font-size:8px; background:#a9aba8; top:73px; left:' + (w_weight - 194).toString() + '" SIZE="26" onMouseOver="tr_find_form_over()" onMouseOut="tr_find_form_out()" onFocus="tr_find_form_focus()">' }

		xstr += '<table WIDTH="' + (w_weight - 345).toString() + '" BORDER="0" BORDERCOLOR="red" CELLSPACING="0" CELLPADDING="0" STYLE="position:absolute; top:0px; left:135px">'
		xstr += '<tr ALIGN="center" VALIGN="top">'
		xstr += 	'<td WIDTH="21%" HEIGHT="67px"><img ID="tc_main_pic" SRC="pic/tc_main_pic.gif" HEIGHT="6px" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="26%" HEIGHT="67px"><img ID="tc_product_pic" SRC="pic/tc_product_pic.gif" HEIGHT="6px" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="17%" HEIGHT="67px"><img ID="tc_services_pic" SRC="pic/tc_services_pic.gif" HEIGHT="6px" STYLE="position:relative; visibility:hidden"></td>'
		xstr += 	'<td WIDTH="2px"></td>'
		xstr += 	'<td WIDTH="36%" HEIGHT="67px"><img ID="tc_cooperation_pic" SRC="pic/tc_cooperation_pic.gif" HEIGHT="6px" STYLE="position:relative; visibility:hidden"></td>'
		xstr += '</tr>'
		xstr += '<tr ALIGN="center" VALIGN="middle">'
		if (loc_tmp == 'main')	xstr += 	'<td WIDTH="21%"><a HREF="main_news_eng.html" ID="tc_zagolovki_main" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_800_600("tc_zagolovki_main","tc_main_pic") onMouseOut=tc_out_800_600("tc_zagolovki_main","tc_main_pic")>Home</a></td>'
		else					xstr += 	'<td WIDTH="21%"><a HREF="main_news_eng.html" ID="tc_zagolovki_main" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_800_600("tc_zagolovki_main","tc_main_pic") onMouseOut=tc_out_800_600("tc_zagolovki_main","tc_main_pic")>Home</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'product')	xstr += 	'<td WIDTH="26%"><a HREF="product_induct-pech_eng.html" ID="tc_zagolovki_product" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_800_600("tc_zagolovki_product","tc_product_pic") onMouseOut=tc_out_800_600("tc_zagolovki_product","tc_product_pic")>Products</a></td>'
		else						xstr += 	'<td WIDTH="26%"><a HREF="product_induct-pech_eng.html" ID="tc_zagolovki_product" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_800_600("tc_zagolovki_product","tc_product_pic") onMouseOut=tc_out_800_600("tc_zagolovki_product","tc_product_pic")>Products</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'services')	xstr += 	'<td WIDTH="17%"><a HREF="services_design_eng.html" ID="tc_zagolovki_services" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_800_600("tc_zagolovki_services","tc_services_pic") onMouseOut=tc_out_800_600("tc_zagolovki_services","tc_services_pic")>Services</a></td>'
		else						xstr += 	'<td WIDTH="17%"><a HREF="services_design_eng.html" ID="tc_zagolovki_services" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_800_600("tc_zagolovki_services","tc_services_pic") onMouseOut=tc_out_800_600("tc_zagolovki_services","tc_services_pic")>Services</a></td>'
		xstr += 	'<td WIDTH="2px"><img SRC="pic/tc_zagolovki_razdel' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td>'
		if (loc_tmp == 'cooperation')	xstr += 	'<td WIDTH="36%"><a HREF="cooperation_projects_eng.html" ID="tc_zagolovki_cooperation" CLASS=tc_sel_text_class' + scr_size + ' onMouseOver=tc_over_800_600("tc_zagolovki_cooperation","tc_cooperation_pic") onMouseOut=tc_out_800_600("tc_zagolovki_cooperation","tc_cooperation_pic")>Cooperation</a></td>'
		else							xstr += 	'<td WIDTH="36%"><a HREF="cooperation_projects_eng.html" ID="tc_zagolovki_cooperation" CLASS=tc_text_class' + scr_size + ' onMouseOver=tc_over_800_600("tc_zagolovki_cooperation","tc_cooperation_pic") onMouseOut=tc_out_800_600("tc_zagolovki_cooperation","tc_cooperation_pic")>Cooperation</a></td>'
		xstr += '</tr></table>' }

	document.write(xstr) }

function tr_mouse_move(xid, pic_id) { document.all[xid].src = 'pic/' + xid + pic_id + scr_size + '.gif' }

function tr_find_form_over() { document.all["tr_find_form"].style.background = "#ffffff" }
function tr_find_form_out() { document.all["tr_find_form"].style.background = "#a9aba8" }
function tr_find_form_focus() { document.all["tr_find_form"].value = "" }

// ---------------------------------------------------------------------          1280_1024         ----------------------------------------------------------------
function move_tc_pic_up_1280_1024(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var tmp_height = document.all[xid].height
	var d_top = 0, d_height = 0

	if (tmp_height <= 66) { d_top = 5; d_height = 4 }
	else { clearInterval(parseInt(document.all[xid].name.slice(1)))
		document.all[xid].name = '1'
		document.all[xid].name += setInterval('move_tc_pic_1280_1024("' + xid + '")', 50).toString() }

	document.all[xid].style.top = (tmp_top - d_top).toString() + 'px'
	document.all[xid].height = tmp_height + d_height }

function move_tc_pic_1280_1024(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var d_top = 0

	if ((tmp_top >= 8) && (document.all[xid].name.substr(0, 1) == '1')) d_top = 1
	else document.all[xid].name = '2' + document.all[xid].name.slice(1)

	if ((tmp_top <= 15) && (document.all[xid].name.substr(0, 1) == "2")) d_top = -1
	else document.all[xid].name = "1" + document.all[xid].name.slice(1)
	
	document.all[xid].style.top = (tmp_top - d_top).toString() + "px" }

function move_tc_pic_down_1280_1024(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var tmp_height = document.all[xid].height
	var d_top = 0, d_height = 0

	if (tmp_height >= 6) { d_top = -5; d_height = -4 }
	else { clearInterval(parseInt(document.all[xid].name.slice(1)))
		document.all[xid].name = "0"
		document.all[xid].style.visibility = "hidden" }

	document.all[xid].style.top = (tmp_top - d_top).toString() + "px"
	document.all[xid].height = tmp_height + d_height }

function tc_over_1280_1024(text_id, pic_id) { 
	document.all[text_id].style.color = "#CCCCCC" 
	document.all[pic_id].height = 6 
	document.all[pic_id].style.visibility = "visible" 
	document.all[pic_id].style.top = 95
	clearInterval(parseInt(document.all[pic_id].name.slice(1)))
	document.all[pic_id].name = "0" + setInterval('move_tc_pic_up_1280_1024("' + pic_id + '")', 10).toString() }

function tc_out_1280_1024(text_id, pic_id) { 
	document.all[text_id].style.color = "#FFFFFF" 
	clearInterval(parseInt(document.all[pic_id].name.slice(1)))
	document.all[pic_id].name = "0" + setInterval('move_tc_pic_down_1280_1024("' + pic_id + '")', 10).toString() }

// ---------------------------------------------------------------------          1024_768         ----------------------------------------------------------------
function move_tc_pic_up_1024_768(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var tmp_height = document.all[xid].height
	var d_top = 0, d_height = 0

	if (tmp_height <= 50) { d_top = 4; d_height = 3 }
	else { clearInterval(parseInt(document.all[xid].name.slice(1)))
		document.all[xid].name = '1'
		document.all[xid].name += setInterval('move_tc_pic_1024_768("' + xid + '")', 50).toString() }

	document.all[xid].style.top = (tmp_top - d_top).toString() + 'px'
	document.all[xid].height = tmp_height + d_height }

function move_tc_pic_1024_768(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var d_top = 0

	if ((tmp_top >= 5) && (document.all[xid].name.substr(0, 1) == '1')) d_top = 1
	else document.all[xid].name = '2' + document.all[xid].name.slice(1)

	if ((tmp_top <= 13) && (document.all[xid].name.substr(0, 1) == "2")) d_top = -1
	else document.all[xid].name = "1" + document.all[xid].name.slice(1)
	
	document.all[xid].style.top = (tmp_top - d_top).toString() + "px" }

function move_tc_pic_down_1024_768(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var tmp_height = document.all[xid].height
	var d_top = 0, d_height = 0

	if (tmp_height >= 6) { d_top = -5; d_height = -4 }
	else { clearInterval(parseInt(document.all[xid].name.slice(1)))
		document.all[xid].name = "0"
		document.all[xid].style.visibility = "hidden" }

	document.all[xid].style.top = (tmp_top - d_top).toString() + "px"
	document.all[xid].height = tmp_height + d_height }

function tc_over_1024_768(text_id, pic_id) { 
	document.all[text_id].style.color = "#CCCCCC" 
	document.all[pic_id].height = 6 
	document.all[pic_id].style.visibility = "visible" 
	document.all[pic_id].style.top = 65
	clearInterval(parseInt(document.all[pic_id].name.slice(1)))
	document.all[pic_id].name = "0" + setInterval('move_tc_pic_up_1024_768("' + pic_id + '")', 15).toString() }

function tc_out_1024_768(text_id, pic_id) { 
	document.all[text_id].style.color = "#FFFFFF" 
	clearInterval(parseInt(document.all[pic_id].name.slice(1)))
	document.all[pic_id].name = "0" + setInterval('move_tc_pic_down_1024_768("' + pic_id + '")', 15).toString() }

// ---------------------------------------------------------------------          800_600         ----------------------------------------------------------------
function move_tc_pic_up_800_600(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var tmp_height = document.all[xid].height
	var d_top = 0, d_height = 0

	if (tmp_height <= 47) { d_top = 4; d_height = 3 }
	else { clearInterval(parseInt(document.all[xid].name.slice(1)))
		document.all[xid].name = '1'
		document.all[xid].name += setInterval('move_tc_pic_800_600("' + xid + '")', 50).toString() }

	document.all[xid].style.top = (tmp_top - d_top).toString() + 'px'
	document.all[xid].height = tmp_height + d_height }

function move_tc_pic_800_600(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var d_top = 0

	if ((tmp_top >= 5) && (document.all[xid].name.substr(0, 1) == '1')) d_top = 1
	else document.all[xid].name = '2' + document.all[xid].name.slice(1)

	if ((tmp_top <= 10) && (document.all[xid].name.substr(0, 1) == "2")) d_top = -1
	else document.all[xid].name = "1" + document.all[xid].name.slice(1)
	
	document.all[xid].style.top = (tmp_top - d_top).toString() + "px" }

function move_tc_pic_down_800_600(xid) {
	var tmp_top = parseInt(document.all[xid].style.top.substr(0, document.all[xid].style.top.length - 2)) //nado ydalit text PX iz znacheniya
	var tmp_height = document.all[xid].height
	var d_top = 0, d_height = 0

	if (tmp_height >= 10) { d_top = -5; d_height = -4 }
	else { clearInterval(parseInt(document.all[xid].name.slice(1)))
		document.all[xid].name = "0"
		document.all[xid].style.visibility = "hidden" }

	document.all[xid].style.top = (tmp_top - d_top).toString() + "px"
	document.all[xid].height = tmp_height + d_height }

function tc_over_800_600(text_id, pic_id) { 
	document.all[text_id].style.color = "#CCCCCC" 
	document.all[pic_id].height = 6 
	document.all[pic_id].style.visibility = "visible" 
	document.all[pic_id].style.top = 60
	clearInterval(parseInt(document.all[pic_id].name.slice(1)))
	document.all[pic_id].name = "0" + setInterval('move_tc_pic_up_800_600("' + pic_id + '")', 15).toString() }

function tc_out_800_600(text_id, pic_id) { 
	document.all[text_id].style.color = "#FFFFFF" 
	clearInterval(parseInt(document.all[pic_id].name.slice(1)))
	document.all[pic_id].name = "0" + setInterval('move_tc_pic_down_800_600("' + pic_id + '")', 15).toString() }
	
//**********************************************************************         LEFT          ************************************************
//*********************************************************************************************************************************************	
function paint_left(img_name, urls_list){
	var xstr = '', tmp = -1, tmp_list = '', now_text = '', now_url = '', i = 0, tsikl_not_fin = true

	if (screen.width >= 1280) {
		document.all['main_table_left'].width =  '250px'
		document.all['main_table_left'].style.background ='url(pic/l_fon' + scr_size + '.gif) repeat-y left top'

		xstr += '<table BORDER="0" BORDERCOLOR="red" WIDTH="244px" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'

		xstr += 	'<tr><td><img SRC="pic/' + img_name + scr_size + '.jpg" WIDTH="250px" STYLE="position:relative"></td></tr>'
		xstr += 	'<tr><td><img SRC="pic/l_lang_change' + scr_size + '.gif" WIDTH="250px" STYLE="position:relative"></td></tr>'
		xstr += 	'<tr><td HEIGHT="5px"></td></tr>'

		if (img_name != 'l_find') {
			xstr += 	'<tr><td><table BORDER="0" CELLSPACING="0" CELLPADDING="5">'
		
			do {
				if (urls_list.indexOf('@') == -1) { 
					tsikl_not_fin = false
					tmp_list = urls_list }	
				else { tmp_list = urls_list.slice(0, urls_list.indexOf('@'))
					urls_list = urls_list.slice(urls_list.indexOf('@') + 1) }
			
				if (tmp_list.charAt(0) == '%') {
					text_class = 'l_text_sel_class'
					tmp_list = tmp_list.slice(1) }
				else text_class = 'l_text_class'
			
				now_text = tmp_list.slice(0, tmp_list.indexOf('|'))
				now_url = tmp_list.slice(tmp_list.indexOf('|') + 1)

				xstr += 	'<tr><td WIDTH="230px"><a HREF="' + now_url + '.html" ID="l_url_' + i.toString() + '" CLASS=' + text_class + scr_size + ' onMouseOver=l_over("l_url_' + i.toString() + '") onMouseOut=l_out("l_url_' + i.toString() + '")>' + now_text + '</a></td></tr>'
				xstr += 	'<tr><td WIDTH="230px"><img SRC="pic/l_url_razdel_pic.gif" WIDTH="230px" HEIGHT="2px" BORDER="0" STYLE="position:relative"></td></tr>'
			
				i ++ }
			while (tsikl_not_fin)		
			xstr += 	'</table></tr></td>'
			xstr += 	'<tr><td HEIGHT="5px"></td></tr>'
			xstr += 	'<tr><td><img SRC="pic/l_lang_change' + scr_size + '.gif" WIDTH="250px" STYLE="position:relative"></td></tr>' }

		xstr += 	'<tr><td HEIGHT="5px"></td></tr>'

		xstr += 	'<tr><td HEIGHT="55px" ALIGN="center" VALIGN="middle"><a target=_top href="http://top.mail.ru/jump?from=1401536" STYLE="position:relative"><img src="http://d2.c6.b5.a1.top.list.ru/counter?id=1401536;t=56" border=0 height=31 width=88 alt="Рейтинг@Mail.ru" STYLE="position:relative"></a></td></tr>'

		xstr += 	'<tr><td HEIGHT="100%"></td></tr>'
		xstr += 	'<tr><td><img SRC="pic/ld_lang_change' + scr_size + '.gif" STYLE="position:relative">'

		xstr += '</table>' 	}
	if (screen.width >= 1024 & screen.width < 1280) {
		document.all['main_table_left'].width =  '200px'
		document.all['main_table_left'].style.background ='url(pic/l_fon' + scr_size + '.gif) repeat-y left top'

		xstr += '<table BORDER="0" BORDERCOLOR="red" WIDTH="200px" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'

		xstr += 	'<tr><td><img SRC="pic/' + img_name + scr_size + '.jpg" WIDTH="200px" STYLE="position:relative"></td></tr>'
		xstr += 	'<tr><td><img SRC="pic/l_lang_change' + scr_size + '.gif" WIDTH="200px" STYLE="position:relative"></td></tr>'
		xstr += 	'<tr><td HEIGHT="5px"></td></tr>'

		if (img_name != 'l_find') {
			xstr += 	'<tr><td><table BORDER="0" CELLSPACING="0" CELLPADDING="4">'
		
			do {
				if (urls_list.indexOf('@') == -1) { 
					tsikl_not_fin = false
					tmp_list = urls_list }	
				else { tmp_list = urls_list.slice(0, urls_list.indexOf('@'))
					urls_list = urls_list.slice(urls_list.indexOf('@') + 1) }
				
				if (tmp_list.charAt(0) == '%') {
					text_class = 'l_text_sel_class'
					tmp_list = tmp_list.slice(1) }
				else text_class = 'l_text_class'
			
				now_text = tmp_list.slice(0, tmp_list.indexOf('|'))
				now_url = tmp_list.slice(tmp_list.indexOf('|') + 1)

				xstr += 	'<tr><td WIDTH="185px"><a HREF="' + now_url + '.html" ID="l_url_' + i.toString() + '" CLASS=' + text_class + scr_size + ' onMouseOver=l_over("l_url_' + i.toString() + '") onMouseOut=l_out("l_url_' + i.toString() + '")>' + now_text + '</a></td></tr>'
				xstr += 	'<tr><td WIDTH="185px"><img SRC="pic/l_url_razdel_pic.gif" WIDTH="188px" HEIGHT="2px" BORDER="0" STYLE="position:relative"></td></tr>'
			
				i ++ }
			while (tsikl_not_fin)		
			xstr += 	'</table></tr></td>'		
			xstr += 	'<tr><td HEIGHT="5px"></td></tr>'
			xstr += 	'<tr><td><img SRC="pic/l_lang_change' + scr_size + '.gif" WIDTH="200px" STYLE="position:relative"></td></tr>' }
		
		xstr += 	'<tr><td HEIGHT="5px"></td></tr>'

		xstr += 	'<tr><td HEIGHT="55px" ALIGN="center" VALIGN="middle"><a target=_top href="http://top.mail.ru/jump?from=1401536" STYLE="position:relative"><img src="http://d2.c6.b5.a1.top.list.ru/counter?id=1401536;t=56" border=0 height=31 width=88 alt="Рейтинг@Mail.ru" STYLE="position:relative"></a></td></tr>'

		xstr += 	'<tr><td HEIGHT="100%"></td></tr>'
		xstr += 	'<tr><td><img SRC="pic/ld_lang_change' + scr_size + '.gif" STYLE="position:relative">'

		xstr += '</table>' 	}
	if (screen.width < 1024) {
		document.all['main_table_left'].width = '150px'
		document.all['main_table_left'].style.background ='url(pic/l_fon' + scr_size + '.gif) repeat-y left top'

		xstr += '<table BORDER="0" BORDERCOLOR="red" WIDTH="150px" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'

		xstr += 	'<tr><td><img SRC="pic/' + img_name + scr_size + '.jpg" WIDTH="150px" STYLE="position:relative"></td></tr>'
		xstr += 	'<tr><td><img SRC="pic/l_lang_change' + scr_size + '.gif" WIDTH="150px" STYLE="position:relative"></td></tr>'
		xstr += 	'<tr><td HEIGHT="5px"></td></tr>'

		if (img_name != 'l_find') {
			xstr += 	'<tr><td><table BORDER="0" CELLSPACING="0" CELLPADDING="2">'
			
			do {
				if (urls_list.indexOf('@') == -1) { 
					tsikl_not_fin = false
					tmp_list = urls_list }	
				else { tmp_list = urls_list.slice(0, urls_list.indexOf('@'))
					urls_list = urls_list.slice(urls_list.indexOf('@') + 1) }
			
				if (tmp_list.charAt(0) == '%') {
					text_class = 'l_text_sel_class'
					tmp_list = tmp_list.slice(1) }
				else text_class = 'l_text_class'
			
				now_text = tmp_list.slice(0, tmp_list.indexOf('|'))
				now_url = tmp_list.slice(tmp_list.indexOf('|') + 1)

				xstr += 	'<tr><td WIDTH="135px"><a HREF="' + now_url + '.html" ID="l_url_' + i.toString() + '" CLASS=' + text_class + scr_size + ' onMouseOver=l_over("l_url_' + i.toString() + '") onMouseOut=l_out("l_url_' + i.toString() + '")>' + now_text + '</a></td></tr>'
				xstr += 	'<tr><td WIDTH="135px"><img SRC="pic/l_url_razdel_pic.gif" WIDTH="138px" HEIGHT="2px" BORDER="0" STYLE="position:relative; left:2px"></td></tr>'
			
				i ++ }
			while (tsikl_not_fin)		
			xstr += 	'</table></tr></td>'
			xstr += 	'<tr><td HEIGHT="5px"></td></tr>'
			xstr += 	'<tr><td><img SRC="pic/l_lang_change' + scr_size + '.gif" WIDTH="150px" STYLE="position:relative"></td></tr>' }
			
		xstr += 	'<tr><td HEIGHT="5px"></td></tr>'

		xstr += 	'<tr><td HEIGHT="55px" ALIGN="center" VALIGN="middle"><a target=_top href="http://top.mail.ru/jump?from=1401536" STYLE="position:relative"><img src="http://d2.c6.b5.a1.top.list.ru/counter?id=1401536;t=56" border=0 height=31 width=88 alt="Рейтинг@Mail.ru" STYLE="position:relative"></a></td></tr>'

		xstr += 	'<tr><td HEIGHT="100%"></td></tr>'
		xstr += 	'<tr><td><img SRC="pic/ld_lang_change' + scr_size + '.gif" STYLE="position:relative">'

		xstr += '</table>' 	}

	document.write(xstr) }

function l_over(xid) { document.all[xid].style.color = "#CCCCCC" }
function l_out(xid) { document.all[xid].style.color = "#FFFFFF" }

function paint_down() {
	var xstr = '', i = 0
	
	if (screen.width >= 1280) {
		document.all['main_table_down'].height = '50px'

		xstr += '<table BORDER="0" BORDERCOLOR="red" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'
		xstr += 	'<tr><td WIDTH="250px" STYLE="background:url(pic/dl_fon' + scr_size + '.gif) repeat-x right top">'
		xstr +=			'<table BORDER="0" BORDERCOLOR="red" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'
		xstr +=				'<tr><td WIDTH="210px" ALIGN="left" VALIGN="top"><a HREF="mailto:shartep@gcn.ua" STYLE="position:relative"><img SRC="pic/dl_design_name_eng' + scr_size + '.gif" BORDER="0" ALT="Design: Shartep Studio" STYLE="position:relative"></a></td>'
		xstr += 			'<td ALIGN="right" VALIGN="top"><img SRC="pic/d_lch_naklon' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td></tr>'
		xstr +=			'</table>'
		xstr +=		'</td>'
		xstr +=		'<td STYLE="background:url(pic/dr_fon' + scr_size + '.gif) repeat-x left top">'

		xstr += '<table BORDER="0" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="12"><tr><td ALIGN="right" VALIGN="bottom"><a HREF="main_news_eng.html" CLASS=D_text_class>Product Commercial Company "Lastochka" LTD.</a></tr></td></table>'		
		
		xstr += '</td></tr></table>' }
	if (screen.width >= 1024 & screen.width < 1280) {
		document.all['main_table_down'].height = '50px'

		xstr += '<table BORDER="0" BORDERCOLOR="red" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'
		xstr += 	'<tr><td WIDTH="200px" STYLE="background:url(pic/dl_fon' + scr_size + '.gif) repeat-x right top">'
		xstr +=			'<table BORDER="0" BORDERCOLOR="red" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'
		xstr +=				'<tr><td WIDTH="170px" ALIGN="left" VALIGN="top"><a HREF="mailto:shartep@gcn.ua" STYLE="position:relative"><img SRC="pic/dl_design_name_eng' + scr_size + '.gif" BORDER="0" ALT="Design: Shartep Studio" STYLE="position:relative"></a></td>'
		xstr += 			'<td ALIGN="right" VALIGN="top"><img SRC="pic/d_lch_naklon' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td></tr>'
		xstr +=			'</table>'
		xstr +=		'</td>'
		xstr +=		'<td STYLE="background:url(pic/dr_fon' + scr_size + '.gif) repeat-x left top">'
		xstr += 		'<table BORDER="0" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="12"><tr><td ALIGN="right" VALIGN="bottom"><a HREF="main_news_eng.html" CLASS=D_text_class>Product Commercial Company "Lastochka" LTD.</a></tr></td></table>'		
		xstr += 	'</td></tr></table>' }
	if (screen.width < 1024) {
		document.all['main_table_down'].height = '40px'

		xstr += '<table BORDER="0" BORDERCOLOR="red" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'
		xstr += 	'<tr><td WIDTH="150px" STYLE="background:url(pic/dl_fon' + scr_size + '.gif) repeat-x right top">'
		xstr +=			'<table BORDER="0" BORDERCOLOR="red" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="0">'
		xstr +=				'<tr><td WIDTH="130px" ALIGN="left" VALIGN="top"><a HREF="mailto:shartep@gcn.ua" STYLE="position:relative"><img SRC="pic/dl_design_name_eng' + scr_size + '.gif" BORDER="0" ALT="Design: Shartep Studio" STYLE="position:relative"></a></td>'
		xstr += 			'<td ALIGN="right" VALIGN="top"><img SRC="pic/d_lch_naklon' + scr_size + '.gif" BORDER="0" STYLE="position:relative"></td></tr>'
		xstr +=			'</table>'
		xstr +=		'</td>'
		xstr +=		'<td STYLE="background:url(pic/dr_fon' + scr_size + '.gif) repeat-x left top">'
		xstr += 		'<table BORDER="0" WIDTH="100%" HEIGHT="100%" CELLSPACING="0" CELLPADDING="15"><tr><td ALIGN="right" VALIGN="bottom"><a HREF="main_news_eng.html" CLASS=D_text_class' + scr_size + '>Product Commercial Company "Lastochka" LTD.</a></tr></td></table>'		
		xstr += 	'</td></tr></table>' }
	
	document.write(xstr) }

function paint_main_ban() {
	document.write('<img SRC="pic/test_banner.gif" BORDER="0" STYLE="position:relative">') 
	img_koef = 1

	document.all['main_table_text'].style.color = '#0c3b3e'
	
	if (screen.width >= 1280) {
		document.all['main_table_text'].style.font = 'bold 12pt Arial'
	}	
	if (screen.width >= 1024 & screen.width < 1280) {
		document.all['main_table_text'].style.font = 'bold 11pt Arial'
		img_koef = 0.8
	}	
	if (screen.width < 1024) {
		document.all['main_table_text'].style.font = 'bold 10pt Arial'
		img_koef = 0.625
	}	}