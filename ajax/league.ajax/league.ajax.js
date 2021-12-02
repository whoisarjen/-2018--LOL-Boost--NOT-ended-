$(document).ready(function(){


	var beforeLiga = $( "#ligaAJAX");
	var beforeDiv = $( "#divisionAJAX");
	var afterLiga = $( "#ligafromJSON");
	var afterDiv = $( "#divisionfromJSON");

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

	var ligi = {
		"Bronze":0,
		"Silver":1,
		"Gold":2,
		"Platinum":3,
		"Diamond":4,
		"Master":5
	}

window.possibleLeague = {};

	function setLeagueIMG(a,b,c){
		// $a = ['before','after'];
		// $b : int = [0,1,2,3,4,5];
		// $c : int = [0,1,2,3,4];
		b = parseInt(b);
		c = parseInt(c);
		var liczba = b*5+(c);
		
		if(a == "before"){
			$("#imgAJAX").attr("src","./img/divisions/"+liga_img[liczba]+".png");
			$("#imgAJAX").attr("alt",liga_img[liczba]);
		}else if(a == "after"){
			$("#imgJSON").attr("src","./img/divisions/"+liga_img[liczba]+".png");
			$("#imgJSON").attr("alt",liga_img[liczba]);
		}
	}

	function masterTier(){
		if($("#ligafromJSON option:selected").text()=="Master"){
			$("#divisionfromJSON").fadeOut(300);
		}else{
			$("#divisionfromJSON").fadeIn(300);
		}
	}

	$( "#ligaAJAX, #divisionAJAX, #ligafromJSON, #divisionfromJSON" ).change(function(){
		var liga = parseInt(beforeLiga.val());
		var division = parseInt(beforeDiv.val());

		var ligaN = parseInt(afterLiga.val());
		var divisionN = parseInt(afterDiv.val());

		setLeagueIMG("before",liga,division);			
		setLeagueIMG("after",ligaN,divisionN);	

		var league_var = liga*5+division;
		$.ajax({
		    type: "POST",
		    url: "./ajax/league.ajax/league.ajax.php",
		    data: {liga: liga, division: division},
		    dataType: "json", 
		    success: function (data) {
		        	window.possibleLeague = data;
		        	desiredRank(league_var); // funkcja desiredRank z liczba z zakresu [0,25] 
		       }
			});
		 });
	
	function desiredRank($a){
		//Pobranie zawartości afterRank i zamiana na cyfry	
		var liga = $("#ligafromJSON").val();
		var division = $("#divisionfromJSON").val();
		liga = parseInt(liga);
		division = parseInt(division);
		//Utworzenie rangi nowej ligi
		var league_var = liga*5+division;
		// Jeżeli ranga ligi prawa mniejsza od rangi lewej to ranga prawa+1
		if(league_var<=$a){
			league_var=$a+1;
			var new_liga = Math.round(league_var/5 - 0.5);
			var new_division = league_var%5;
			// Ustawianie nowego obrazka dla prawej strony oraz ustawienie ligi i dywizji
			setLeagueIMG("after",new_liga,new_division);	
			$("#ligafromJSON").val(new_liga);
			$("#divisionfromJSON").val(new_division);
		}
		// Wykonanie funkcji getfromJSON;
		getfromJSON();
	};



	function getfromJSON(){
		// Ukrywanie wszystkich opcji w wyborze afterRank
		$("#ligafromJSON option").attr("hidden",true);	
		$("#divisionfromJSON option").attr("hidden",true);
		// Dla każdej opcji ligi w afterRank
		var json_data = window.possibleLeague;
		var json_parsed = JSON.parse(json_data);
		var afterliga = $("#ligafromJSON option:selected").text();
	 	
		 		$.each(json_parsed, function (index, value) {
				    if(afterliga == index){

					  	$("#ligafromJSON option:contains('"+afterliga+"')").removeAttr("hidden");
			  			  	var text = value.toString();
			  				var myarr = text.split(",");
			  				window.possiblediv = myarr;
			  				// console.log(myarr);
			  				  	$.each(myarr, function (index, value) {
			  						value = 4-value;
			  						masterTier();
							  		$("#divisionfromJSON [value="+value+"]").removeAttr("hidden");
			  					});
	       			};
				});
		 $.each(json_parsed, function (index){
		 	$("#ligafromJSON option:contains('"+index+"')").removeAttr("hidden");
		 });
		  rachuneczek();
		
	}
	
	$( "#ligafromJSON, #divisionfromJSON").change(function(){
		masterTier();
		getfromJSON();


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

	$( "#ligafromJSON").change(function(){
		var value = 4 -window.possiblediv[0];
		$("#divisionfromJSON option").removeAttr('selected').filter('[value='+value+']').attr('selected', true);	

	});

	$.getJSON( "./ajax/league.ajax/cennik.json", function( data ) {
		  window.cennik = data;
		});

	$("#LPAJAX").change(function(){
		 rachuneczek();
	});

	function rachuneczek(){
		var cennik = window.cennik;
		var old_liga = $("#ligaAJAX").val();
		var old_div = $("#divisionAJAX").val();
		var old_LP = $("#LPAJAX").val();
		var new_liga = $("#ligafromJSON").val();
		var new_div = $("#divisionfromJSON").val();
		var promocja = 0.90;
		var nadwyzka = 1.20;
		var kurs = 1.195;
		old_liga = parseInt(old_liga);
		old_div = parseInt(old_div);
		old_LP = parseInt(old_LP);
		new_liga = parseInt(new_liga);
		new_div = parseInt(new_div);
		var oldrank = 5*old_liga+old_div;
		var oldLP = oldrank;
		// console.log(oldLP);
		if(new_liga != 5){
			var newrank = 5*new_liga+new_div;	
			masterTier();
		}else{
			var newrank = 25;
			masterTier();
		}
		var cost = 0;
		for(oldrank;oldrank<newrank;oldrank++){
			cost = cost + cennik[oldrank]["const"];
		}
		cost = cost - (cennik[oldLP]["lp-ratio"]*old_LP);
		cost = Math.round(cost);
		// console.log($("#ligaAJAX option:selected").text()+"("+$("#divisionAJAX option:selected").text() +") -> "+$("#ligafromJSON option:selected").text()+"("+ $("#divisionfromJSON option:selected").text()+")  =  "+cost+" euro");
		$("#boost_range").html("Division boost: "+$("#ligaAJAX option:selected").text()+"("+$("#divisionAJAX option:selected").text() +") -> "+$("#ligafromJSON option:selected").text()+"("+ $("#divisionfromJSON option:selected").text()+")");
		$("#boost_cost>span").html(" "+Math.round(cost*promocja)+"€ ("+Math.round(cost*promocja*kurs)+"$) ");
		$("#boost_cost>s").html(Math.round(cost*nadwyzka)+"€ ("+Math.round(cost*kurs*nadwyzka)+"$)");
	};


});
	