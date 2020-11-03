$().ready(function(){


	// nav active class
	$('body').scrollspy({ target: '#navbar-example' });

	// menu ul li click
	$('.menu ul li a').click(function(){  
		$('html,body').animate({    
			scrollTop:$($(this).attr('href')).offset().top  
		},1000);
		return false;
	});

	$('.menu-icon').click(function(){  
		$('.menu ul').slideToggle(1000);

		return false;
	});

	$('.serach-icon').click(function(){
    	$('.search-box').slideToggle(500);

    	return false;
	});


	// progress-bar
	$(function(){
  	$('.cirelechart').circlechart();

	});

	// //counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
     });

	// img-popup
	// img-popup

	// team member carousel
	$('.team-member-carousel').owlCarousel({
		items:4,
		loop:true,
		nav:true,
		margin:30,
		dots:false,
		autoplay:1000,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        576:{
	            items:2
	        },
	        992:{
	            items:3,
	            margin:15
	        },
	        1200:{
	            items:4
	        }
	   	 }
	});
	// team testimonial carousel
	$('.testimonial-carousel').owlCarousel({
		items:1,
		loop:true,
		nav:true,
		margin:30,
		dots:false,
		autoplay:1000,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        }
	    }
	});
	//  brand-carousel carousel
	$('.brand-carousel').owlCarousel({
		items:4,
		loop:true,
		nav:true,
		margin:30,
		dots:false,
		autoplay:1000,
	    responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        480:{
	            items:2
	        },
	        600:{
	            items:3
	        },
	        992:{
	            items:4
	        }
	    }
	});


	$('.up-sort-btn').click(function(){
		$('html,body').animate({
			scrollTop:0
		},1000);

		return false;
	});

	// aos animate
	AOS.init();

});

$(window).scroll(function(){
	var scrollvalue = $(this).scrollTop();
	var stickyOffset = $('header').offset().top;

	    if ($(window).scrollTop() >= stickyOffset){
        $('.header-fixed').addClass('fixed');
        $('.header-spacer').show(0); 
    }
    else {
        $('.header-fixed').removeClass('fixed');
        $('.header-spacer').hide(0);

        return false;
    }

})