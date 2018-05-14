$(document).ready(function(){




	/*---------------------- FAQ ----------------------------*/
	$('.faqQuestion').on('click',function(){
		$('.faqAnswer').hide();
		$('#faqAnswer_' + $(this).attr('id').split('_')[1]).toggle();
	});

	$('#showMoreFAQ').on('click',function(){

		if( $('.faqTabsHidden').css('display') == 'none' ) {
			$('.faqAnswer').hide();
			$('.faqTabsHidden').show();
			$('#showMoreFAQ').html('Show less');
		} else {
			$('.faqAnswer').hide();
			$('.faqTabsHidden').hide();
			$('#showMoreFAQ').html('Show more');
		}
	});



	/*----------------------- SCROLL TO DIV -------------------*/
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


	/*----------------------- CHECKOUT -------------------*/
	$('.checkoutTerms span').on('click',function(){
		$('.checkoutTermsContainer').toggle();
	});


	/*----------------------- SPORTS TEAMS -------------------*/
	$('.logo, .sportsTab, .teamTab, .buttonPricesSelectSeats, .buttonAddToCart').on('click',function(){
		$('#loaderBIGOuter').fadeIn('fast');
	});







	
	$(window).on('load',function(){
		$('#loaderBIGOuter').fadeOut('fast');
	});

}); // document ready