$("#locale").change(function(){
  language = $( '#locale option:selected' ).val();

  $.i18n().locale = language;

  $.i18n().load( {
          'en': 'i18n/migra-en.json',
          'es': 'i18n/migra-es.json'
        } ).done(function() {
            $('.switch-locale').on('click', 'a', function(e) {
              e.preventDefault();
              $.i18n().locale = $(this).data('locale');
            });
          });


//  $.i18n().load( 'i18n/migra-' + $.i18n().locale + '.json', $.i18n().locale ).done(
  //  function() {
    //  var selectLanguage = $.i18n( "migra-map-select-lang" );
      //$( '#locale-label' ).text( selectLanguage ).prop( 'title', selectLanguage.toLocaleString() );
//    } );
  });
