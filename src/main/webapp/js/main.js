AUI().ready(
	'liferay-sign-in-modal',
	function(A) {
		var signIn = A.one('.sign-in > a');

		if (signIn && signIn.getData('redirect') !== 'true') {
			signIn.plug(Liferay.SignInModal);
		}
	}
);

$(document).ready(function() {
	if ($('#ControlMenu').length > 0) {
    	$('#contentHeader').addClass('headerLoggedIn');
   	}
});

$(function(){
        var scroller = $('#scroller').offset().top;
 
        $(window).scroll(function(){
                if( $(window).scrollTop() + $('#ControlMenu').height() > scroller ) {
                	
                	$('#scroller').addClass('stuck');
                	$('#personal-bar').addClass('invisible');
                	
                    if ($('#ControlMenu').length > 0) {
    					var controlMenuHeight = $('#ControlMenu').height();
    					$('#scroller').css('top', controlMenuHeight + 'px');
    				}
    				
                } else {
                    $('#scroller').removeClass('stuck');
                    $('#personal-bar').removeClass('invisible');
                    $('#scroller').css('top', '');
                }
        });
  });