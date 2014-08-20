<?php
$site_id = "shartep";
$default_enc = "windows-1251";

$q = $_GET['q'];
$enc = $_GET['enc'];
if( !preg_match( "/^(?i)(UTF-8|windows-1251|KOI8-R)$/", $enc ) ) {
    $enc = $default_enc;
}
header("Content-Type: text/html; charset=" . $enc);
?>
<html>
<head>
<title></title>

<link REL=STYLESHEET TYPE="text/css" HREF="style.css"> 

</head>
<body>
<script SRC='library.js' language='JavaScript' TYPE='text/JavaScript'></script>

<table ID="main_table"  HEIGHT="100%" BORDER="0"  BORDERCOLOR="#FF0000" CELLSPACING="0" CELLPADDING="0" STYLE="position:absolute">
	<tr><td ID="main_table_top" COLSPAN="2"  ALIGN="LEFT" VALIGN="TOP"> 
      <script> paint_top() </script>   
	</td></tr>
 	<tr> 
     <td  ID="main_table_left" ALIGN="LEFT" VALIGN="TOP"> 
    	<script> paint_left("l_main_news", "%Новости|main_news@О компании|main_about@История|main_history@Коллектив|main_people@Развитие|main_development@Карта сайта|main_map"  )  </script> 
	</td>
    <td  WIDTH="100%"  BACKGROUND="pic/c_fon.jpg">
		<p>&nbsp; </p>
		<p>&nbsp; </p>

<table border="0" width="100%" cellspacing="0" cellpadding="0"  align=center>
<tr><td>

<form name="search" action="yandex_search.php">
<?php if( $enc != $default_enc ) { ?>
<input type="hidden" name="enc" value="<?php print( $enc ); ?>" />
<?php } ?>


<table border="0"  cellspacing="0" cellpadding="4" align=center>
<tr>
	<td>&nbsp;&nbsp;</td>
	<td valign=bottom width="70%"><input type="text" name="q" value="<?php print( htmlspecialchars($q) ); ?>" size="40" style="width: 100%;" /></td>
	<td>&nbsp;&nbsp;</td>
	<td valign=bottom width="10%"><input type="submit" id="doSearch" value="   &gt;   "/></td>
</tr>
</table>
</form>

</td></tr></table>

<div style='padding-left: 3em; padding-top: 1em; padding-bottom: 3em; padding-right: 3em;'>
<?php

if ($q)
{
    if( $enc != "UTF-8" ) {
        $q = iconv( $enc, "UTF-8", $q );
    }
    $url = "http://yandex-server-1.1gb.ua/ya.cgi/$site_id?q=".urlencode($q);
    $str = @file_get_contents($url);
    if( $enc != "UTF-8" ) {
        $str = iconv( "UTF-8", $enc, $str );
    }
    print ($str);
}

?>

	</td>
  </tr>
  <tr>
    <td ID="main_table_down" COLSPAN="2"  ALIGN="LEFT" VALIGN="TOP"> 
		<script>paint_down()</script>
	</td>
  </tr>
 </table>
				



</body></html>
