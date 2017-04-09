function updateText() {
	'use strict';
	console.log("updating text")
	var i18n = $.i18n(), language, person, kittens, message, gender;

	language = $( '.language option:selected' ).val();

	i18n.locale = language;
	i18n.load( 'i18n/migra-map-' + i18n.locale + '.json', i18n.locale ).done(
		// function() {
		// 	var personName = $.i18n( person ), localizedMessage = $.i18n( message, personName,
		// 		kittens, gender );
		// 	$( '.result' ).text( localizedMessage ).prop( 'title', message.toLocaleString() );
		// } );
}
// Enable debug
$.i18n.debug = true;

$( document ).ready( function( $ ) {
	'use strict';
	updateText();
	$( '.language' ).on( 'change keyup', updateText );
} );
