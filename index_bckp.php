<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
	<link rel="stylesheet" href="styles/main.css">
	<link rel="stylesheet" href="styles/styles.css">
	<link href="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.css" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
	<link rel="stylesheet" href="./styles/owl.carousel.min.css">
	<link rel="stylesheet" href="./styles/owl.theme.default.min.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<title>FastBoost - Cheapest prices ever!</title>
</head>
<body>
	<div id="home"></div>
	<div id="nav">
		<div id="connect_nav">
		<div id="logo">Fast Boost</div>
		<ol id="menu">
			<li style="background: rgba(0, 0, 0, 0.5);" data-scroll="home">home</li>
			<li data-scroll="why-us">why us?</li>
			<li data-scroll="boosts">boosts</li>
			<li>contact</li>
			<li style="background: #b1272f;">log in</li>
		</ol>
		<div id="hamburger"></div>
		</div>
		<div style="clear:both"></div>
	<div class="nav_border"></div>
	</div>
	<div id="border_background">
		<div id="border_background_txt"><h1>find cheaper prices we will refund the difference!</h1></div>
	</div>
	<div id="why-us">
		<div id="border1">
			<img src="img/Tryndamere-lol.png" alt="Tryndamere-league-of-legends"></img>
			<h2>Why we are so cheap?</h2>
			<p>Here at BoostRoyal, we provide a selection of coaches who have a very extensive understanding of League of Legends. They will help you identify your strengths and weaknesses, and ultimately help you become a better player. If you have a specific role that you want to be coached on, then make sure you choose a coach that specializes in that role. If your goal is to just improve your overall understanding of the game, we have coaching for that as well.</p>
		</div>
	</div>
	<div style="width: 100%; min-height: 100px; background: #fff; background: rgba(0, 0, 0, 0.03);">
	<div id="border2">
		<img data-aos-delay="100" data-aos-once="true" data-aos="fade-left" src="img/shen-league-of-legends.png" alt="shen-league-of-legends"></img>
			<h2>The fastest way to get your rank!</h2>
			<p>Trusted by thousands of players Worldwide.
			With an experienced team of over 300 Master/Challenger Boosters, we are able to provide the best boosting experience to our customers.
			24\7 Live Customer Support
			36206 Completed Orders
			87% Overall Win Ratio
			25 Boosters Ready to Start</p>
	</div>
	</div>
		<div style="clear:both"></div>	
		<div id="border3">		
			<span class="header-text">Testimonials</span>
			<span class="header-subtext">2486 Reviews</span>
			<div class="owl-carousel">
			<?php
			$opinie = [
						["Good to talk to, friendly, determined, overall good service, thank you","diamond_5.png","Gold 1 - Diamond 5"],
						["Good to talk to, friendly, determined, overall good service, thank you","bronze_1.png","Bronze 5 - Bronze 1"],
						['from other website before this and they were no where near efficient as this guy. Also the fact that i can buy "group division" instead
							of "per win only" like all other duo boosting websites was a huge plus for using GGBOOST.',"platinum_1.png","Silver 2 - Platinum 1"]
			];
			foreach($opinie as $opinia){
			echo "<div class=\"testimonial\">
					<p>".'"'.$opinia[0].'"'."</p>
					<div class=\"ranks\">
					<img src=\"img/divisions/".$opinia[1]."\">
					<span>".$opinia[2]."</span>
					</div>
					<div class=\"rating\">
					<span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span><span class=\"fa fa-star\"></span></div></div>";}?>
			</div>
		</div>
	<div style="width: 100%; min-height: 100px; background: #fff; background: rgba(0, 0, 0, 0.02);">	
	<div id="boosts">
		<div class="clear-fix padding-50-t"></div>
		<span class="header-text">Boost Purchase</span>
		<div class="clear-fix padding-30-t"></div>
		<div id="orders">
			<div class="order_menu_box">
				<ol id="order_menu">
					<li data-order="order_division" class="active">Division Boost</li>
					<li data-order="order_games">Wins Boost</li>
					<li>Duo Queue</li>
					<li>Placement Matches</li>
					<li>Normal Draft</li>
				</ol>
			</div>
		</div>
		<!-- ZAMOWIENIA OSOBNE -->
			<div class="order-box" id="order_division">
		<div class="Purchase">
			<div class="divisions">
				<h2>Current Rank</h2>
				<img src="img/divisions/silver_1.png" alt="silver_1" id="imgAJAX"></img>
				<select class="option" id='ligaAJAX'>
					<option value="0">Bronze</option>
					<option value="1" selected>Silver</option>
					<option value="2">Gold</option>
					<option value="3">Platinum</option>
					<option value="4">Diamond</option>
				</select>
				<select class="option" id='divisionAJAX'>
					<option value="4" selected>Division I</option>
					<option value="3">Division II</option>
					<option value="2">Division III</option>
					<option value="1">Division IV</option>
					<option value="0">Division V</option>
				</select>
				<select class="option">
					<option>0-20LP</option>
					<option>21-40LP</option>
					<option>41-60LP</option>
					<option>61-80LP</option>
					<option>81-100LP</option>
				</select>
			</div>
			<div class="divisions">
				<h2>Desired Rank</h2>
				<img src="img/divisions/gold_5.png" alt="gold_5" id="imgJSON"></img>
				<select class="option" name="liga" id='ligafromJSON'>
					<option value="0" hidden="hidden">Bronze</option>
					<option value="1" hidden="hidden">Silver</option>
					<option value="2" selected>Gold</option>
					<option value="3" >Platinum</option>
					<option value="4">Diamond</option>					
					<option value="5">Master</option>
				</select>
				<select class="option" name="division" id='divisionfromJSON'>
					<option value="4">Division I</option>
					<option value="3">Division II</option>
					<option value="2">Division III</option>
					<option value="1">Division IV</option>
					<option value="0" selected>Division V</option>
				</select>
			</div>
			<div class="your_order" >
				<div class="your-order-box">
					<h4>Your order:</h4>
					<ul>
						<li>Division boost: silver3 -> silver1</li>
						<li>Total cost: 17€ (20$) <s>20€ (23$)</s></li>
					</ul>
						</br></br></br>
						<p>
						Contains full boost to 0LP desired league, no additional costs if we fail promotion (we will play until we achieve it).</br></br>
						Queues: Solo/Duo (5v5), Flex Summoners Rift (5v5), Flex Twisted Treeline (3v3).</br></br>
						Service available for North America, Europe West, Europe Nordic & East, Brazil, Latin America, Russia, Turkey, Oceania, Korea and Japan!
						</p>
				</div>
			</div>
			</div>
		</div>

			<div class="order-box" id="order_games">
				<div class="Purchase">
				<div class="divisions">
					<h2>Current Rank</h2>
					<img src="img/divisions/diamond_3.png" alt="silver-3"></img>
					<select class="option">
						<option>Bronze</option>
						<option>Silver</option>
						<option>Gold</option>
						<option>Platinium</option>
						<option>Diamond</option>
					</select>
					<select class="option">
						<option>Division I</option>
						<option>Division II</option>
						<option>Division III</option>
						<option>Division IV</option>
						<option>Division V</option>
					</select>
					<select class="option">
						<option>0-20LP</option>
						<option>21-40LP</option>
						<option>41-60LP</option>
						<option>61-80LP</option>
						<option>81-100LP</option>
					</select>
				</div>
				<div class="divisions">
					<h2>Desired Rank</h2>
					<img src="img/divisions/master_1.png" alt="silver-1"></img>
					<select class="option">
						<option>Silver</option>
					</select>
					<select class="option">
						<option>Division I</option>
						<option>Division II</option>
						<option>Division III</option>
						<option>Division IV</option>
						<option>Division V</option>
					</select>
				</div>
				<div class="your_order" >
					<div class="your-order-box">
						<h4>Your order:</h4>
						<ul>
							<li>Division boost: silver3 -> silver1</li>
							<li>Total cost: 17€ (20$) <s>20€ (23$)</s></li>
						</ul>
							</br></br></br>
							<p>
							Contains full boost to 0LP desired league, no additional costs if we fail promotion (we will play until we achieve it).</br></br>
							Queues: Solo/Duo (5v5), Flex Summoners Rift (5v5), Flex Twisted Treeline (3v3).</br></br>
							Service available for North America, Europe West, Europe Nordic & East, Brazil, Latin America, Russia, Turkey, Oceania, Korea and Japan!
							</p>
					</div>
				</div>
			</div>
		</div>
			<!-- SYF KONIEC XD -->


		<div style="clear:both"></div>
		</div>
	</div>
	</div>
	<div id="bottom">
		<div id="contact">
			<!-- <form>
				<select>
					<option>Question</option>
					<option>Order issue</option>
					<option>Coaching</option>
					<option>Boosters recriutment</option>
					<option>Other</option>
				</select>
				<input type="text" placeholder="email">
				<input type="text" placeholder="text">
				<button type="submit">SEND</button>
			</form> -->
		</div>
		<div id="credits">
			https://www.flickr.com/photos/artistic-differences/19242183551
			https://www.flickr.com/photos/
			rabbithoang/12919736933/
			League of Legends is a registered trademark of Riot Games, Inc. We are in no way affiliated with, associated with or endorsed by Riot Games, Inc.
		</div>
	</div>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.rawgit.com/michalsnik/aos/2.1.1/dist/aos.js"></script>
<script>AOS.init();</script>
<script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script>
<script>
	$('li[data-scroll]').click(function(){
		var target = $(this).attr("data-scroll");
		history.pushState({}, null, '#'+target);
		$('html, body').animate({
        scrollTop: $("#"+target).offset().top
    }, 1000);
});
</script>
<script src="./js/owl.carousel.min.js"></script>
<script>
	$(document).ready(function(){
		 var json = {
			"Bronze":[5,4,3,2,1],
			"Silver":[5,4,3,2,1],
			"Gold":[5,4,3,2,1],
			"Platinium":[5,4,3,2,1],
			"Diamond":[5,4,3,2,1],
			"Master":[1]
			};

		
			

		  $(".owl-carousel").owlCarousel({
			    items:1,
			    margin:30,
			    loop: true,
			    autoplay:true,
		   		autoplayTimeout:3500
			});

		  $("#order_division").show();

		  $("#order_menu li").click(function(){
		  	$("#order_menu li").removeClass("active");
		  	$(this).addClass("active");
		  	var selected_order = $(this).attr("data-order");
		  	$(".order-box").fadeOut(150);
			$("#"+selected_order).show(300);

		  });
});
</script>
<script src="ajax/league.ajax/league.ajax.js"></script>
</body>
</html>