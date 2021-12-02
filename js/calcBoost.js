$(document).ready(function(){
	function updateGamesOrder(liga, division, games){
		var rank = (liga * 5) + division;
			var cenaGry = {
				0: 3.5,
				1: 3.5,
				2: 3.5,
				3: 3.5,
				4: 3.5,
				5: 3.5,
				6: 3.5,
				7: 4.5, 
				8: 4.68,
				9: 5.33,
				10: 6.5,
				11: 6.68,
				12: 7,
				13: 7.33,
				14: 8.33,
				15: 9.68,
				16: 10,
				17: 10.33,
				18: 13,
				19: 15,
				20: 17,
				21: 23.33,
				22: 28,
				23: 34,
				24: 34,
			};
			var cena =  Math.round(((cenaGry[rank]) * Number(games)));
			$("#order_games_cost").html(cena+"€");
			$("#order_games_status").html("Wins Boost: "+ $("#ligaGames option:selected").text() + "( "+ $("#divisionGames option:selected").text() +" ) - " + games + " Wins");
	}
	
	function updatePmOrder(liga, games){
		var rank = liga;
			var cenaGry = {
				0: 3.3,
				1: 4.2,
				2: 5.3,
				3: 6.9,
				4: 10.5,
			};
			var cena =  Math.round(((cenaGry[rank]) * Number(games)));
			$("#order_pm_cost").html(" "+cena+"$");
			$("#order_pm_status").html("Wins Boost: "+ $("#ligapm option:selected").text() + " - " + games + " Wins");
	}
	
	function updateDraftOrder(liga, games){
		var rank = liga;
		var cenaGry = 4;
			var cena =  Math.round(cenaGry * Number(games));
			$("#order_draft_cost").html(" "+cena+"$");
			$("#order_draft_status").html("Wins: "+ games+" games");
	}

	// KAMOL FUNKCJA -> ZMIENA GRAFIKE W GAMES
	function changeDivison(liga, division, type){
		if(liga == 0){ liga = "bronze" }
		if(liga == 1){ liga = "silver" }
		if(liga == 2){ liga = "gold" }
		if(liga == 3){ liga = "platinum" }
		if(liga == 4){ liga = "diamond" }
		division = (division - 5) * (-1);
		var toChange = "img/divisions/"+liga+"_"+division+".png";
		if(type == "games"){
			$("#gamesIMG").attr("src",toChange);
			$("#gamesIMG").attr("alt",liga+"_"+division);
		}
		if(type == "pm"){
			$("#pmIMG").attr("src",toChange);
			$("#pmIMG").attr("alt",liga+"_"+division);
		}
	}

	// SLIDER DRAFT
	$( "#draft-slider" ).slider({
		min: 1,
		max: 100,
		value: 50,
		slide: function( event, ui ) {
			$(".divisions-normal-numbers").html(ui['value']);
			var liga = Number(liga);
			updateDraftOrder(liga, ui['value']);
		}
	});

	// SLIDER PM
	$( "#pm-slider" ).slider({
		min: 1,
		max: 10,
		value: 10,
		slide: function( event, ui ) {
			$(".divisions-pm-numbers").html(ui['value']);
			var liga = $("#placement_matches>.Purchase>.divisions>#ligapm").val();
			var liga = Number(liga);
			updatePmOrder(liga, ui['value']);
		}
	});

	// PM
	$("#ligapm, #divisionpm").change(function(){
		var liga = $("#ligapm").val();
		var liga = Number(liga);
		var games = $(".divisions-pm-numbers").html();
		var type = "pm";
		var division = 4;
		changeDivison(liga, division, type);
		updatePmOrder(liga, games);
	});

	// SLIDER WINS
	$( "#wins-slider" ).slider({
		min: 1,
		max: 20,
		value: 10,
		slide: function( event, ui ) {
			$(".divisions-wins-numbers").html(ui['value']);
			var liga = $("#order_games>.Purchase>.divisions>#ligaGames").val();
			var division = $("#order_games>.Purchase>.divisions>#divisionGames").val();
			var liga = Number(liga);
			var division = Number(division);
			updateGamesOrder(liga, division, ui['value']);
		}
	});

	// WINS
	$("#ligaGames, #divisionGames").change(function(){
		var liga = $("#ligaGames").val();
		var division = $("#divisionGames").val();
		var liga = Number(liga);
		var division = Number(division);
		var games = $(".divisions-wins-numbers").html();
		var type = "games";
		updateGamesOrder(liga, division, games, type);
		changeDivison(liga, division, type);
	});
});