window.onload = init;

function init() {

$(document).ready(function(){
	$('a[href="#search"]').on('click', function(event) {                    
		$('#search').addClass('open');
		$('#search > form > input[type="search"]').focus();
	});            
	$('#search, #search button.close').on('click keyup', function(event) {
		if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
			$(this).removeClass('open');
		}
	});            
});

$('.ham').click(function(){
		$('.mobile-nav').slideToggle(500);
	});
	
	if($('#htmlForm').length > 0 ) {

		validation_init();
	}
}
