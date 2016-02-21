$(document).ready(function() {
	var eventName = 'click';
	var offcanvasIsInitialized = false;
	var mql = window.matchMedia("(max-width: 599px)");

	if ('ontouchstart' in document.documentElement) {
		eventName = 'touchstart';
	}

	mql.addListener(mqHandler);
	mqHandler(mql);

	function mqHandler(mql) {
		if (mql.matches) {
			console.log('match');

			if (!offcanvasIsInitialized) {
				$('.mobile-menu span').on(eventName, function() {
					$('html').removeClass('end');
					$('html').toggleClass('offcanvas');
				});

				$('nav').on('transitionend', function(e) {
					console.log('transtion end');
					$('html').addClass('end');
				});

				offcanvasIsInitialized = true;
			}
		}
	}
});
