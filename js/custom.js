$(document).ready(function(){
	
	
	
	
	/*---------------------- FAQ ----------------------------*/
	$('.faqQuestion').on('click',function(){
		$('.faqAnswer').hide();
		$('#faqAnswer_' + $(this).attr('id').split('_')[1]).toggle();
	});
	
	
	
	$('#headerButton').on('click',function(){
		$('html').animate({ scrollTop: $('.sectionLogos').offset().top }, 700);
	});
	$('#headerHowItWorks').on('click',function(){
		$('html').animate({ scrollTop: $('.sectionHowItWorks').offset().top }, 700);
	});
	
}); // document ready