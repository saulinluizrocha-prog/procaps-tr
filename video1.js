$(document).ready(function() {
	window.addEventListener('contextmenu', (event) => { event.preventDefault() })
	var showPopup = false
	var hidePopup = true
	var showPlay = true
	document.getElementById('play').addEventListener('click', () => {
		window.scrollTo(0, 0)
		$('#play').fadeOut('fast', function() {
			$('#video').prop('muted', false).prop('currentTime', 0).trigger('play')
			$('#container_video').addClass('fullscreen')
			$('body').addClass('noscroll')
			//document.documentElement.classList.add('is-locked')
			$('#close').fadeIn()
			showPlay = false
		})
	})
	document.getElementById('open-video').addEventListener('click', () => {
		window.scrollTo(0, 0)
		$('#open-video').fadeOut('fast', function() {
      // $('#video').prop('muted', false).prop('currentTime', 0).trigger('play')
			$('#container_video').addClass('fullscreen')
			$('body').addClass('noscroll')
			//document.documentElement.classList.add('is-locked')
			$('#close').fadeIn()
			showPlay = false
		})
	})
	$('#video').on('timeupdate', function() {
		if(!showPlay && !showPopup && $(this).prop('currentTime') > start) {
			$('#popup').fadeIn('fast')
			showPopup = true;
		}
		if(hidePopup && $(this).prop('currentTime') > start+duration) {
			$('#popup').fadeOut('fast')
			hidePopup = false
		}
	}).on('ended', showOrder)
	$('#popup').on('click', showOrder)
	$('#close').on('click', function() {
		$(this).hide()
		$('#container_video').removeClass('fullscreen')
		//document.documentElement.classList.remove('is-locked')
		$('body').removeClass('noscroll')
		$('#open-video').fadeIn('fast')
		$('#popup').fadeOut('fast')
	})
	function showOrder() {
		$('#container_video').removeClass('fullscreen')
		$('body').removeClass('noscroll')
		//document.documentElement.classList.remove('is-locked')
		$('#popup').fadeOut()
		$('#close').fadeOut()
		$('#video').fadeOut('fast', function() {
			$(this).trigger('pause')
			$('#order').fadeIn('fast', function() {
				$('html, body').animate({ scrollTop: $('#order').offset().top-20 }, 200)
			})
		})
	}
})
