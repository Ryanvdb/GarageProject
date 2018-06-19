<!DOCTYPE html>
<html>
	<head>
		  <link rel="stylesheet" href="garage.css" type="text/css">
		  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
		  <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
		  <script src="Resources/ScrollTo.js"></script>
		  <script src="garage.js"></script>
		  <title>Contact - garage</title>
		  <link rel="shortcut icon" href="" type="image/">
		  <link rel="icon" href="" type="image/">
	</head>
	<body>
		<nav>
			<div id="NavBG">
			</div>
			<div class="CurrentNav" id="NavSecond">
			</div>
			<div class="CurrentNav2" id="NavSecond">
			</div>

			<ul class="aovel">
				<li><a href="#">Home</a></li>
				<li><a href="#">Orders</a></li>
				<li><a href="#">Status</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#">Account</a></li>
			</ul>
		</nav>
		<main id="Contact">

			<section class="toggles">
				<h1 style="font-size:80px;" class="toggles aovel">garage</h1>
				<div style="width:80%; white-space:normal; margin-left:10%; height:93px" class="toggles">
					<p class="aovel toggles" style="width:100%;font-size:40px;" ></p>
				</div>
				<div>
					</div>
				<span class="helper"></span>
					<a href="#" onclick="$('main').animate({scrollTop: $('main').height()},'slow');"><div class="next">
						<img src="Resources/Images/Arrow.png"/>
					</div></a>
			</section>

			<section class="toggles">
      <a href="#" onclick="$('main').animate({scrollTop: $('main').height() * 2},'slow');"><div class="next">
        </div></a>
			</section>


			<section>
				<span class="helper"></span>
			</section>

		</main>
	</body>
</html>
