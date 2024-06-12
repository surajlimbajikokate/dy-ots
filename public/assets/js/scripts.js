	
(function($) {
	$(document).ready(function() {
		"use strict";


		//include pages
		//$(function(){
			//$("#header").load("../includes/header.html"); 
			//$("#footer").load("footer.html"); 
		  //});


		  

		//typewriter text
		// var TxtRotate = function(el, toRotate, period) {
		// 	this.toRotate = toRotate;
		// 	this.el = el;
		// 	this.loopNum = 0;
		// 	this.period = parseInt(period, 10) || 2000;
		// 	this.txt = '';
		// 	this.tick();
		// 	this.isDeleting = false;
		//   };
		  
		//   TxtRotate.prototype.tick = function() {
		// 	var i = this.loopNum % this.toRotate.length;
		// 	var fullTxt = this.toRotate[i];
		  
		// 	if (this.isDeleting) {
		// 	  this.txt = fullTxt.substring(0, this.txt.length - 1);
		// 	} else {
		// 	  this.txt = fullTxt.substring(0, this.txt.length + 1);
		// 	}
		  
		// 	this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
		  
		// 	var that = this;
		// 	var delta = 300 - Math.random() * 100;
		  
		// 	if (this.isDeleting) { delta /= 2; }
		  
		// 	if (!this.isDeleting && this.txt === fullTxt) {
		// 	  delta = this.period;
		// 	  this.isDeleting = true;
		// 	} else if (this.isDeleting && this.txt === '') {
		// 	  this.isDeleting = false;
		// 	  this.loopNum++;
		// 	  delta = 500;
		// 	}
		  
		// 	setTimeout(function() {
		// 	  that.tick();
		// 	}, delta);
		//   };
		  
		//   window.onload = function() {
		// 	var elements = document.getElementsByClassName('txt-rotate');
		// 	for (var i=0; i<elements.length; i++) {
		// 	  var toRotate = elements[i].getAttribute('data-rotate');
		// 	  var period = elements[i].getAttribute('data-period');
		// 	  if (toRotate) {
		// 		new TxtRotate(elements[i], JSON.parse(toRotate), period);
		// 	  }
		// 	}
		// 	// INJECT CSS
		// 	var css = document.createElement("style");
		// 	css.type = "text/css";
		// 	css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
		// 	document.body.appendChild(css);
		//   };

		// MAGNET EFFECT 
	document.addEventListener("mousemove", function(e){
		magnetize('.circle', e);
	  });
  
	  function magnetize(el, e){
		var mX = e.pageX,
			mY = e.pageY;
		var items = document.querySelectorAll(el);
  
		[].forEach.call(items, function(item) {
		  var customDist = item.getAttribute('dist') * 20 || 120;
		  var centerX = item.offsetLeft + (item.clientWidth/2);
		  var centerY = item.offsetTop + (item.clientHeight/2);
  
		  var deltaX = Math.floor((centerX - mX)) * -0.45;
		  var deltaY = Math.floor((centerY - mY)) * -0.45;
  
		  var distance = calculateDistance(item, mX, mY);
  
		  if(distance < customDist){
			TweenMax.to(item, 0.3, {y: deltaY, x: deltaX, scale:1.1});
			item.classList.add('magnet');
		  }
		  else {
			TweenMax.to(item, 0.45, {y: 0, x: 0, scale:1});
			item.classList.remove('magnet');
		  }     
		 });
	  }
  
	  function calculateDistance(elem, mouseX, mouseY) {
		return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offsetLeft+(elem.clientWidth/2)), 2) + Math.pow(mouseY - (elem.offsetTop+(elem.clientHeight/2)), 2)));
	  }
			
		
		
		// ICON CONTENT BLOCK
			$('.icon-content-block .content-block').mouseenter(function() {
				$('.selected').removeClass('selected').addClass('icon-content-block .content-block');
				$(this).removeClass('icon-content-block .content-block').addClass('selected');
			});
		});
		//case study
		$(window).on('load', function() {
			// $('.loader-screen').fadeOut('slow');

			setTimeout(function(){
        $('.preloader').fadeOut();
    }, 1000);
			
			if ($('.a-grid').length) {
				$('.a-grid').isotope({
					itemSelector: '.grid-item'
				});
				$('.a-grid-filter a').on('click', function() {
					$(this).parents('.a-grid-filter').find('.active').removeClass('active');
					$(this).parent().addClass('active');
					var filterValue = $(this).attr('data-filter');
					$('.a-grid').isotope({
						filter: filterValue
					});
				});
			}
			if ($('.a-grid-line').length) {
				$('.a-grid-line').isotope({
					itemSelector: '.grid-item',
					layoutMode: 'fitRows'
				});
				$('.a-grid-filter a').on('click', function() {
					$(this).parents('.a-grid-filter').find('.active').removeClass('active');
					$(this).parent().addClass('active');
					var filterValue = $(this).attr('data-filter');
					$('.a-grid-line').isotope({
						filter: filterValue
					});
				});
			}
		});

		

		//Testimonial
		$('.testimonial').owlCarousel({
			loop:true,
			margin:10,
			autoplay:true,
			dots:true,
			responsiveClass:true,
			navText : ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"], 
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:1,
					nav:false
				},
				1000:{
					items:1,
					nav:true,
					
				}
			}
		})

		$('.software-feature').owlCarousel({
			loop:true,
			autoplay:true,
			dots:true,
			responsiveClass:true,
			navText : ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"], 
			responsive:{
				0:{
					items:1,
					nav:true
				},
				600:{
					items:4,
					nav:true
				},
				1000:{
					items:4,
					nav:true,
					
				}
			}
		})



		$('.software-overview').owlCarousel({
            loop: true,
            nav: false,
            margin:30,
            dots: true,
            autoplay: true,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                1000: {
                    stagePadding: 150,
                },

                1400: {
                    stagePadding: 150,
                },

                1601: {
                    stagePadding: 300,
                },
            }
        });


		



  $(document).ready(function() {
$('.clientlogo').owlCarousel({
			loop:true,
			margin:10,
			// autoWidth:true,
			//  autoHeight: false,
		        lazyLoad: true,
			autoplay:true,
			autoplayHoverPause:true,
			dots: false,
			 nav: false,

			// dots:true,
			responsiveClass:true,
			// navText : ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"], 
			responsive:{
				0:{
					items:1,
					
				},
				600:{
					items:3,
					
				},
				1000:{
					items:6,
				   loop:true,
					
					
				}
			}
		});

		// 

		$('.plateform-logos').owlCarousel({
			loop:true,
			margin:10,
			// autoWidth:true,
			//  autoHeight: false,
		        lazyLoad: true,
			autoplay:true,
			autoplayHoverPause:true,
			dots: true,
			 nav: false,

			// dots:true,
			responsiveClass:true,
			// navText : ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"], 
			responsive:{
				0:{
					items:1,
					
				},
				600:{
					items:4,
					
				},
				1000:{
					items:4,
				   loop:true,
					
					
				}
			}
		});
   });

		//material try form
		function checkValue(element) {
			// check if the input has any value (if we've typed into it)
			if ($(element).val())
			  $(element).addClass('has-value');
			else
			  $(element).removeClass('has-value');
		  }
		  
		  $(document).ready(function() {
			// Run on page load
			$('.form-control').each(function() {
			  checkValue(this);
			})
			// Run on input exit
			$('.form-control').blur(function() {
			  checkValue(this);
			});
		  });

		//   menu
		// Header Navbar
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.main-header').addClass('scroll-to-fixed');
                $('ul.support-lists').css('right', '10px');
				$('#Top_bar').addClass('is-sticky');
				$('#header').addClass('has-fixed');
				$('.toggle-btn').css('display', 'none');
				$('.main-header .navbar-nav').css({'opacity': '1', 'visibility': 'visible', 'margin-right':'0'})

            } else {
                $('#Top_bar').removeClass('is-sticky');
                $('.main-header').removeClass('scroll-to-fixed');
				$('ul.support-lists').css('right', '50px')
				$('#header').removeClass('has-fixed');
				$('.toggle-btn').css('display', 'block');
				$('.main-header .navbar-nav').css({'opacity': '0', 'visibility': 'hidden', 'margin-right':'40px'})
            }
        });

        $(window).scroll(function() {    
		    var scroll = $(window).scrollTop();

		    if (scroll >= 520) {
		        $(".sticky-top").addClass("package-sticky"); 
		    } else {
		        $(".sticky-top").removeClass("package-sticky");
		    }
		});

        // menu toggle
        var togglebtn = $('.toggle-btn');
        if (togglebtn.length) {
            $(".toggle-btn")
                .on("click", function () {
                    $(this).toggleClass("active");
                    $(".navbar-nav").toggleClass("show-menu");
                });
		}
		
		/* ---- particles.js config ---- */

			particlesJS("particles-js", {
				"particles": {
				"number": {
					"value": 80,
					"density": {
					"enable": true,
					"value_area": 1000
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"shape": {
					"type": "circle",
					"stroke": {
					"width": 0,
					"color": "#000000"
					},
					"polygon": {
					"nb_sides": 5
					},
					"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
					}
				},
				"opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
					}
				},
				"size": {
					"value": 3,
					"random": true,
					"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 6,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"bounce": false,
					"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
					}
				}
				},
				"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
					"enable": true,
					"mode": "grab"
					},
					"onclick": {
					"enable": true,
					"mode": "push"
					},
					"resize": true
				},
				"modes": {
					"grab": {
					"distance": 140,
					"line_linked": {
						"opacity": 1
					}
					},
					"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
					},
					"repulse": {
					"distance": 200,
					"duration": 0.4
					},
					"push": {
					"particles_nb": 4
					},
					"remove": {
					"particles_nb": 2
					}
				}
				},
				"retina_detect": true
			});
			
			
			//
			/*-----------------------------------------------------------------------------------*/
    /*	FLICKITY
    /*-----------------------------------------------------------------------------------*/
	function enableFlickitySlider(){
		$('.flickity-slider-container').each( function( i, container ) {
		    var $container = $( container );
		    var $sliderMain = $container.find('.flickity-slider-main').flickity({
		      imagesLoaded: true,
			  percentPosition: false,
			  wrapAround: true,
			  pageDots: false,
			  prevNextButtons: false,
			  adaptiveHeight: true,
			  fullscreen: $container.hasClass('fullscreen') ? true : false
		    });
		    $container.find('.flickity-slider-nav').flickity({
		      asNavFor: $sliderMain[0],
		      imagesLoaded: true,
			  percentPosition: false,
			  pageDots: false,
			  contain: true,
			  prevNextButtons: false
		    });
		    $container.find('.flickity-slider-main').css({ opacity: 1 });
		    $container.find('.flickity-slider-nav').css({ opacity: 1 });
		});
	}
	enableFlickitySlider();
	function enableFlickityCarousel(){
		$('.flickity-carousel-container').each( function( i, container ) {
		    var $container = $( container );
		    var $carousel = $container.find('.flickity-carousel').flickity({
		      imagesLoaded: true,
			  percentPosition: false,
			  wrapAround: true,
			  pageDots: false,
			  fullscreen: $container.hasClass('fullscreen') ? true : false
		    });
		    $carousel.css({ opacity: 1 });
			var flkty = $carousel.data('flickity');
			var $status = $container.find('.flickity-status');
				$carousel.on( 'change.flickity', updateStatus );
			function updateStatus() {
				var slideNumber = ("0" + (flkty.selectedIndex + 1)).slice(-2);
				var flktyLength = ("0" + flkty.slides.length).slice(-2);
				$status.html( '<span>' + slideNumber + '</span>/<span>' + flktyLength + '</span>' );
			}
			updateStatus();
			var $caption = $container.find('.flickity-caption');
				$carousel.on( 'select.flickity', function() {
				var captionalt = $(flkty.selectedElement).find('img').attr('alt')
				$caption.text( captionalt )
			});
		});
	}
	enableFlickityCarousel();

	
	AOS.init();

			//wow
		//new WOW({mobile:false}).init();

		
		$('.counter').counterUp({
		  delay: 10,
		  time: 500
		});
		$('.counter').addClass('animated fadeInDownBig');
		//$('p').addClass('animated fadeIn');



		$('.grid').masonry({
			  // set itemSelector so .grid-sizer is not used in layout
			  itemSelector: '.grid-item',
			  // use element for option
			  columnWidth: '.grid-sizer',
			  percentPosition: true
			});

			$(document).ready(function () {
				var cardBlock = document.querySelectorAll('.task_block');
				var topStyle = 120;
		  
				cardBlock.forEach((card) => {
				  card.style.top = `${topStyle}px`;
				  topStyle += 30;
				})
		  
			  }
			  );
		

})(jQuery);	

$(window).load(function(){

    $('.lazyload').each(function() {

        var lazy = $(this);
        var src = lazy.attr('data-src');

        $('<img>').attr('src', src).load(function(){
            lazy.find('img.spinner').remove();
            lazy.css('background-image', 'url("'+src+'")');
        });

    });

});


$(document).ready(function() {

	$('#getIn').on('submit', function(e) {
   e.preventDefault(); 
   var captcha = $('#g-recaptcha-response').val();
  
   if(captcha=='')
   {
	alert("Captcha Field Required");
	return false;
   }

  $.ajax({
	type: "POST",
	url: "{{url('getinEmail')}}",
	data:$(this).serialize(),
	success: function(msg) {
   
	window.location.replace("https://www.orianatechsolutions.com/thank-you");

	}
});
});
	 }); 

	 

// GetButton.io widget

    (function () {
        var options = {
            facebook: "", // Facebook page ID
            whatsapp: "+91 8668464533", // WhatsApp number
            call_to_action: "WhatsApp Us", // Call to action
            button_color: "#A8CE50", // Color of button
            position: "left", // Position may be 'right' or 'left'
            order: "whatsapp,facebook", // Order of buttons
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();

  
	// <!-- /GetButton.io widget -->
    // <!-- WhatsHelp.io widget -->    
            //whatsapp facebook 
            (function () {  
            var options = { 
            facebook: "", // Facebook page ID    
            whatsapp: "+918668464533", // WhatsApp number  
            call_to_action: "WhatsApp Us", // Call to action    
            button_color: "#A8CE50", // Color of button 
            position: "left", // Position may be 'right' or 'left'  
            order: "whatsapp,facebook", // Order of buttons 
            };  
            var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;    
            var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';   
            s.onload = function () { WhWidgetSendButton.init(host, proto, options); };  
            var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);    
            })();   

            //let's talk
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/65decf169131ed19d972a768/1hnn5hs91';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();


		

