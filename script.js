$(function(){

	$('.main-title').fadeIn(4000);

	$('.Teethumb').click(function(){
			$('.active').removeClass('active');

			var clickedIndex = $('.Teethumb').index($(this));

			$('.slide').eq(clickedIndex).addClass('active');

		});

	});

