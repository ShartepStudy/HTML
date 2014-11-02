$(document).ready(function(e) {
    
	var mass= new Array(6);
	var mass_pr=new Array(6);
	for (var i=1;i<7;i++){
	mass[i]=0;
	mass_pr[i]=0;}
	var vcego=0;

	
	
	$(':button').click(function()
	{
		vcego++;
		ALL=$('#all').text(vcego)	
		var tmp=parseInt($(this).attr('alt'));
		mass[tmp]++;
		

		for(var i=1;i<7;i++)
		{
		  if (mass[i]!=0)
			{mass_pr[i]=(mass[i]/vcego)*100;
			$('#res'+i).text(mass[i]+' '+'/'+' '+mass_pr[i].toFixed(1)+'%');	
			
		}
		}
	
		
	})
	
	
	
	
	
	
});