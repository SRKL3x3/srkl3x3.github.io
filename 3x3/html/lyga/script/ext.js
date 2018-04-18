$(document).ready(function() {
	$('#countdown').countdown({date: '15 April 2018 20:20' ), function() {
		$('#countdown').text('We\'re live!');
	});
});