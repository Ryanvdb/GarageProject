$( document ).ready(function(){

	var cpage = $("body > main").attr("id");
	var cnav = $("nav > .CurrentNav");
	var cnav2 = $("nav > .CurrentNav2");
	var c = cnav.attr("id");
	var delaly = 200
	var transition = false;

	$("nav > ul > li:nth-child(1)").mouseenter(function(object) {
		cnav.removeAttr("id");
		cnav.attr("id", "NavFirst");
	});
	$("nav > ul > li:nth-child(2)").mouseenter(function(object) {
		cnav.removeAttr("id");
		cnav.attr("id", "NavSecond");
	});
	$("nav > ul > li:nth-child(3)").mouseenter(function(object) {
		cnav.removeAttr("id");
		cnav.attr("id", "NavThird");
	});
	$("nav > ul > li:nth-child(4)").mouseenter(function(object) {
		cnav.removeAttr("id");
		cnav.attr("id", "NavFourth");
	});
	$("nav > ul > li:nth-child(5)").mouseenter(function(object) {
		cnav.removeAttr("id");
		cnav.attr("id", "NavFifth");
	});
	$("nav > ul > li").mouseleave(function() {
		cnav.removeAttr("id");
		cnav.attr("id", c);
	});

	async function fade(obj){
		$(obj).children().each(function(index) {
			if ($(this).hasClass("toggles")) {
				$(this).delay(index*delaly).queue(function() {
					$(this).addClass("toggled");
				});
			}
			if ($(this).children.length > 0) {
				fade(this);
			}
		});
	}

	async function connect(){
		$("main > section").each( async function(index) {
				if ($(this).height() - $(this).position().top >= $(this).height() * 0.3) {
					if ($(this).hasClass("toggles")) {
								$(this).addClass("toggled");
					}
					$(this).children().each(function(index) {
						if ($(this).hasClass("toggles")) {
							$(this).delay(index*delaly).queue(function() {
								$(this).addClass("toggled");
							});
						}
						if ($(this).children.length > 0) {
							fade(this);
						}
					});

				}
		});

		$("main").scroll( async function() {
			$("main > section").each(function(index) {
				if ($(this).height() - $(this).position().top >= $(this).height() * 0.3) {
					if ($(this).hasClass("toggles")) {
								$(this).addClass("toggled");
						}
					$(this).children().each(function(index) {
						if ($(this).hasClass("toggles")) {
							$(this).delay(index*delaly).queue(function() {
								$(this).addClass("toggled");
							  });
						}
						if ($(this).children.length > 0) {
							fade(this);
						}
					});
				}
			});
		});

		$(".ContactBtn").mousedown(function() {
			console.log("down");
			$(this).addClass("Clicking");
		});
		$(".ContactBtn").mouseup(function() {
			$(this).removeClass("Clicking");
		});
		$(".ContactBtn").mouseleave(function() {
			$(this).removeClass("Clicking");
		});
	}

	function delthing(){
			if ($("body > div")) {
					$("body > div").remove();
			}else {
				$(this).delay(100).queue(function() {
					delthing();
				});
			}
	}

	$("nav > ul > li:nth-child(1) > a").click(function() {
		if (cpage != "Home" && transition == false) {
			transition = true;
			history.pushState(null, null, 'Garageproject.php');
			$("body").append("<main id=\"Home\"> </main>");
			$("#Home").load("Garageproject.php #Home > section");

				$("#Home").attr("style", "left:-100%;");
				$("body > main:first-of-type").animate({left: "100%"},500);
				$("#Home").animate({left: "0%"},500, function(){$("body > main:first-of-type").remove();;transition = false;connect();});

			cnav.removeAttr("id");
			cnav.attr("id", "NavFirst");
			c = "NavFirst";
			cpage = "Home";
		}
	});

	$("nav > ul > li:nth-child(4) > a").click(function() {
		if (cpage != "Contact" && transition == false) {
			transition = true;
			history.pushState(null, null, 'Contact.php');
			$("body").append("<main id=\"Contact\"> </main>");
			$("#Contact").load("Contact.php #Contact > section");
			if (cpage == "Home") {
				$("#Contact").attr("style", "left:100%;");
				$("body > main:first-of-type").animate({left: "-100%"},500);
				$("#Contact").animate({left: "0%"},500, function(){$("body > main:first-of-type").remove();transition = false;connect();});
		}else {
				$("#Contact").attr("style", "left:-100%;");
				$("body > main:first-of-type").animate({left: "100%"},500);
				$("#Contact").animate({left: "0%"},500, function(){$("body > main:first-of-type").remove();transition = false;connect();});
		}
			cnav.removeAttr("id");
			cnav.attr("id", "NavSecond");
			c = "NavSecond";
			cpage = "Contact";
		}
	});

	delthing();
	connect();
});
