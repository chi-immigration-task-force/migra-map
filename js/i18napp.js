i18next
.use(window.i18nextBrowserLanguageDetector)
.use(window.i18nextXHRBackend)
.init({
  fallbackLng: 'en',
  backend: {
    loadPath: 'i18n/migra-{{lng}}.json'
  }
}, function() {
  jqueryI18next.init(i18next, $);
  $(document).localize();
  var loaded_lang = $('.dropdown-toggle').text();
  $('.dropdown-menu > li.active').removeClass('active');
  if (loaded_lang === "English \u25BC") {
    $('[data-i18n="en"]').parent().addClass('active');
  } else if (loaded_lang === "Espa\u00f1ol \u25BC") {
    $('[data-i18n="es"]').parent().addClass('active');
  }
});

$('.dropdown-menu > li').click(function() {
  $('.dropdown-menu > li.active').removeClass('active');
  $(this).addClass('active');
  $('.dropdown-toggle').text(($(this).text()) + " \u25BC");
  var language = $(this).children().data('i18n');
  i18next.changeLanguage(language, function() { $(document).localize(); });
});
