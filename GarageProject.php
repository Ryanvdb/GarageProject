<!DOCTYPE html>
<html>
	<head>
		  <link rel="stylesheet" href="garage.css" type="text/css">
		  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
		  <script src="Resources/ScrollTo.js"></script>
		  <script src="garage.js"></script>
		  <title>Home - Garage</title>
		  <link rel="shortcut icon" href="" type="image/garage-icon">
		  <link rel="icon" href="" type="image/garage-icon">
	</head>
	<body>
		<nav>
			<div id="NavBG">
			</div>
			<div class="CurrentNav" id="NavFirst">
			</div>
			<div class="CurrentNav2" id="NavFirst">
			</div>

			<ul class="aovel">
				<li><a href="#">Home</a></li>
				<li><a href="#">Orders</a></li>
				<li><a href="#">Status</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#">Account</a></li>
			</ul>
		</nav>
		<main id="Home">

			<section>
				<span class="helper"></span>
				<img class="toggles" src=""/>
					<!--<a href="#" onclick="$('main').scrollTo('main section:nth-child(2)', {duration:1000,interrup:true});"><div class="next"> -->
					<a href="#" onclick="$('main').animate({scrollTop: $('main').height()},'slow');"><div class="next">
						<img src="Resources/Images/Arrow.png"/>
					</div></a>
			</section>

			<section class="toggles">
				<div style ="width:100%;height:10px"></div>
				<p class="toggles aovel" style="font-size: 100px;">hello</p>
				<div style ="width:100%;height:10px"></div>
				<div style="width:80%; white-space:normal; margin-left:10%" class="toggles">
				<p class="aovel " style="width:100%;font-size:40px;" >there general kenobi
				</div>
				<span class="helper"></span>
			<a href="#" onclick="$('main').animate({scrollTop: $('main').height() * 2},'slow');"><div class="next">
						<img src="Resources/Images/Arrow.png"/>
					</div></a>
			</section>


			<section>
				<span class="helper"></span>
			</section>

		</main>
	</body>
</html>
