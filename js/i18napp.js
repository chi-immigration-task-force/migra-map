i18next
.use(window.i18nextBrowserLanguageDetector)  // Allows browser language detection
.use(window.i18nextXHRBackend)  // Allows loading keys from JSON files
.init(  // initialization with options object and callback function
  // options object
  {
    fallbackLng: 'en',   // Fallback language is English
    backend: {
      // keys in /i18n/migra-en.json and i18n/migra-es.json ... other languages must follow same filename notation
      loadPath: 'i18n/migra-{{lng}}.json'
    }
  },
  // callback function: applies localization after loading the page
  function() {
    jqueryI18next.init(i18next, $);
    $(document).localize();
    // After loading the page, language dropdown shows the localized language based on browser settings
    var loaded_lang = $('.dropdown-toggle').text(); // Dropdown text (shown in nav bar)

    // Sets the selected option in dropdown corresponding to current localization
    if (loaded_lang === "English \u25BC") {
      $('[data-i18n="en"]').parent().addClass('active'); // English is selected
    } else if (loaded_lang === "Espa\u00f1ol \u25BC") {
      $('[data-i18n="es"]').parent().addClass('active');  // Spanish is selected
    } // For other languages add here the corresponding "else if" block (similar to the above)
  }
);

// Handler to localize a different language when selected from the dropdown
$('.dropdown-menu > li').click(function() {
  // Changes the selected option in dropdown
  $('.dropdown-menu > li.active').removeClass('active');
  $(this).addClass('active');

  // Changes the Dropdown text (shown in nav bar)
  $('.dropdown-toggle').text(($(this).text()) + " \u25BC");

  // Applies localization to all other elements in the page that have a localized key
  var language = $(this).children().data('i18n');
  i18next.changeLanguage(language, function() { $(document).localize(); });
});
