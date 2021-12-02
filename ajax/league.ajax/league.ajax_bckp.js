$(document).ready(function(){
	var liga_img = {
		0: "bronze_5",
		1: "bronze_4",
		2: "bronze_3",
		3: "bronze_2",
		4: "bronze_1",
		5: "silver_5",
		6: "silver_4",
		7: "silver_4", 
		8: "silver_2",
		9: "silver_1",
		10: "gold_5",
		11: "gold_4",
		12: "gold_3",
		13: "gold_2",
		14: "gold_1",
		15: "platinum_5",
		16: "platinum_4",
		17: "platinum_3",
		18: "platinum_2",
		19: "platinum_1",
		20: "diamond_5",
		21: "diamond_4",
		22: "diamond_3",
		23: "diamond_2",
		24: "diamond_1",
		25: "master_1"
	};
window.possibleLeague = {};


	$( "#ligaAJAX, #divisionAJAX" ).change(function(){
		// alert($("#ligaAJAX").val()+" "+$("#divisionAJAX").val());
		var liga = $("#ligaAJAX").val();
		var division = $("#divisionAJAX").val();
		var obrazek = ($("#ligaAJAX option:selected").text());
		obrazek = obrazek.toLowerCase();
		var src = (obrazek+"_"+(5-division)+".png");
		$("#imgAJAX").attr("src","./img/divisions/"+src);
		liga = parseInt(liga);
		division = parseInt(division);
		var league_var = liga*5+division;


		$.ajax({
		    type: "POST",
		    url: "./ajax/league.ajax/league.ajax.php",
		    data: {liga: liga, division: division},
		    dataType: "json", 
		    success: function (data) {
		        	window.possibleLeague = data;
		        	window.leagues = data;
		        	desiredRank(league_var);

		       }
			});
		 });
	
	function desiredRank($a){	
		var liga = $("#ligafromJSON").val();
		var division = $("#divisionfromJSON").val();
		liga = parseInt(liga);
		division = parseInt(division);
		var league_var = liga*5+division;
		if(league_var<=$a){
			league_var=$a+1;
			var new_liga = Math.round(league_var/5 - 0.5);
			var new_division = league_var%5;
			$("#imgJSON").attr("src","./img/divisions/"+liga_img[league_var]+".png")
			$("#ligafromJSON").val(new_liga);
			$("#divisionfromJSON").val(new_division);
		}
 		getfromJSON();

	// console.log(window.possibleLeague);
	};

	function masterTier(){
		if($("#ligafromJSON option:selected").text()=="Master"){
			$("#divisionfromJSON").fadeOut(300);
		}else{
			$("#divisionfromJSON").fadeIn(300);
		}
	}

	function getfromJSON(){
			$("#ligafromJSON option").attr("hidden",true);	
	$("#divisionfromJSON option").attr("hidden",true);
	$( "#ligafromJSON option" ).each(function( index ) {
	 	var dywizja = $(this).text();

	 	var tablica = window.possibleLeague;
	 	var zwrotka = JSON.parse(tablica);
	 	
			$.each(zwrotka, function (index, value) {
				
			  if(dywizja == index){
			  	$("#ligafromJSON option:contains('"+dywizja+"')").removeAttr("hidden");
			  	
			  	var text = value.toString();
			  	var myarr = text.split(",");
			  	
			  	$.each(myarr, function (index, value) {
			  		value = 4-value;
			  		masterTier();
			  		$("#divisionfromJSON [value="+value+"]").removeAttr("hidden");
			  		
			  	});
	        };

		});

	});
	}
	
	$( "#ligafromJSON, #divisionfromJSON").change(function(){
		masterTier();

		var liga = $("#ligafromJSON").val();
		var division = $("#divisionfromJSON").val();
		var obrazek = ($("#ligafromJSON option:selected").text());
		obrazek = obrazek.toLowerCase();
		if(obrazek=="master"){
			division=4;
		}
		var src = (obrazek+"_"+(5-division)+".png");

		$("#imgJSON").attr("src","./img/divisions/"+src);



	});





	$("#ligafromJSON,  #divisionAJAX").change(function(){
		var tablica = window.leagues;
		var zwrotka = JSON.parse(tablica);

		var old_liga = $("#ligaAJAX").val();
		var new_liga = $("#ligafromJSON").val();
		var text_liga = $("#ligafromJSON option:selected").text();

		$("#divisionfromJSON option").attr("hidden",true);	
		console.log(old_liga+" vs "+new_liga);
		if(old_liga == new_liga){
								var tablica = window.leagues;
				 	var zwrotka = JSON.parse(tablica);
				 	var text = zwrotka[text_liga].toString();
				  	var myarr = text.split(",");
				  	$("#divisionfromJSON option").attr("hidden",true);	
				   	   	$.each(myarr, function (index, value) {


					   		index = 4-index;
					  		$("#divisionfromJSON option[value="+index+"]").removeAttr("hidden");
							$("#divisionfromJSON option").removeAttr('selected').filter('[value=4]').attr('selected', true);		

					  	});


					  	
		}
		else if(old_liga != new_liga){	

			console.log("ligi rozne");
				var text = zwrotka[text_liga].toString();
				  	var myarr = text.split(",");
				 	   	$.each(myarr, function (index, value) {
					   		index = 4-index;
					  		$("#divisionfromJSON [value="+index+"]").removeAttr("hidden");
							$("#divisionfromJSON option").removeAttr('selected').filter('[value=4]').attr('selected', true);		

					  	});
		}
	});

});
	