$(document).ready(function(){




	/*---------------------- FAQ ----------------------------*/
	$('.faqQuestion').on('click',function(){
		$('.faqAnswer').hide();
		$('#faqAnswer_' + $(this).attr('id').split('_')[1]).toggle();
	});



	$('#headerButton').on('click',function(){
		$('html,body').animate({ scrollTop: $('.sectionLogos').offset().top }, 700);
	});
	$('#headerHowItWorks').on('click',function(){
		$('html,body').animate({ scrollTop: $('.sectionHowItWorks').offset().top }, 700);
	});



	/*----------------------- LOGIN REGISTER -------------------*/
	$('.loginTabButton').on('click', function(){
		$('.loginTabButton').removeClass('loginTabActive');
		$(this).addClass('loginTabActive');


		$('.loginRegisterTab').removeClass('loginRegisterTabActive');

		if( $(this).attr('id').split('_')[1] == 'login' ) {
			$('#loginTab').addClass('loginRegisterTabActive');
		} else {
			$('#registerTab').addClass('loginRegisterTabActive');
		}
	});
	
	
	
	
	
	
	$('a').on('click',function(){
		$('#loaderBIGOuter').fadeIn('fast');
	});
	
	
	
	
	$(window).on('load',function(){
		$('#loaderBIGOuter').fadeOut('fast');
	});

}); // document ready