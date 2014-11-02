var imagesarr = new Array( 
	"001.jpg", 
	"002.jpg", 
	"003.jpg", 
	"004.jpg", 
	"005.jpg"); 
function headload () {	
	var los = Math.floor(Math.random() * imagesarr.length) 
	document.images[0].src=imagesarr[los]; 
}