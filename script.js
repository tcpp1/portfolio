$(function(){

	$('.main-title').fadeIn(4000);



		$('.langbtn').click(function(){
			if($('.eng').hasClass('active2')){
				$('.eng').removeClass('active2');
				$('.jpn').addClass('active2');
			}else{
				$('.jpn').removeClass('active2');
				$('.eng').addClass('active2');
			};
		});



	$('.Teethumb').click(function(){
			$('.active').removeClass('active');
			var clickedIndex = $('.Teethumb').index($(this));

			$('.slide').eq(clickedIndex).addClass('active');
			$('.slide').eq(clickedIndex).addClass('animate__fadeInRight');

	});



});
