$(document).ready(function() {

	/* http://perfectionkills.com/detecting-event-support-without-browser-sniffing/ */
	var eventName = ('ontouchstart' in document.documentElement) ? 'touchstart' : 'click';
	var offcanvasIsInitialized = false;
	var mql = window.matchMedia("(max-width: 599px)");

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
