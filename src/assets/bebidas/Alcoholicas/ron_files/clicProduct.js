(function($) {

	jQuery(document).ready(function($) {

		function ProductClic (argument) {

			$('.shelf-content .product-shelf li').each(function(index, el) {

				if ( $(this).find('a.producLink').length >= 1 ) {
						
				} else {

					var productLink = $(this).find('.product-item .product-item__bottom .product-item__info a').attr('href');
					$(this).find('.product-item').prepend('<a class="producLink" href="'+productLink+'"><span ></span></a>');
					$(this).find('.product-item').css('position', 'relative');
					$(this).find('.product-item .producLink').css({
						'position': 'absolute',
						'width': '100%',
						'height': 'calc(100% - 60px)',
						'z-index': '2'
					});
					
				}
			});
		}

		if ($(window).width() < 760) {

			ProductClic();
			setTimeout(ProductClic(), 3000);

			 $(window).on("scroll", function(d) {
			 	
			 	ProductClic();
			 });
		}
		
	});


})(jQuery);