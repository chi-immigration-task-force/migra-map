# MigraMap 2.0
This is the repository for the new version of MigraMap, based off of Derek Eder's Searchable Map Template.
MigraMap was originally launched by Latino Rebels, and this project will update that map with additional features.

[![MigraMap Draft](https://github.com/chi-immigration-task-force/migra-map/blob/master/migra_map_advanced.png)](http://derekeder.github.io/FusionTable-Map-Template/)

[See the current map &raquo;](https://migramap.latinorebels.com/map)

## Searchable Map Template Features (possible MigraMap 2.0 features)

* full screen, iframe and content templates
* display up to 100,000 map points
* address search (with variable radius and geocomplete)
* geolocation (find me!)
* results count
* RESTful URLs for sharing searches
* ability to easily add additional search filters (checkboxes, sliders, etc)
* mobile and tablet friendly using responsive design
* built with HTML, CSS and Javascript - no server side code required

### Dependencies

* [Google Fusion Tables](http://www.google.com/fusiontables/Home)
* [Google Maps API V3](https://developers.google.com/maps/documentation/javascript)
* [jQuery](http://jquery.org)
* [jQuery Address](https://github.com/asual/jquery-address)
* [Bootstrap 3.2.0](http://getbootstrap.com/)

### Custom Filters and Views

Take a look at the [wiki](https://github.com/derekeder/FusionTable-Map-Template/wiki/Filter-examples) to see how to add your own custom filters and views like:

* [Checkboxes](https://github.com/derekeder/FusionTable-Map-Template/wiki/Filter-examples#wiki-checkboxes)
* [Radio buttons](https://github.com/derekeder/FusionTable-Map-Template/wiki/Filter-examples#wiki-radiobuttons)
* [Drop down lists](https://github.com/derekeder/FusionTable-Map-Template/wiki/Filter-examples#drop-down-lists)
* [Text searches](https://github.com/derekeder/FusionTable-Map-Template/wiki/Filter-examples#wiki-textsearches)
* [Results lists](https://github.com/derekeder/FusionTable-Map-Template/wiki/List-search-results)
* [Text searches](https://github.com/derekeder/FusionTable-Map-Template/wiki/Filter-examples#wiki-textsearches)
* [Sliders](https://github.com/derekeder/FusionTable-Map-Template/wiki/Filter-examples#wiki-sliders)
* [Date sliders](https://github.com/derekeder/FusionTable-Map-Template/wiki/Filter-examples#wiki-date-sliders)

### FusionTable-Map-2-layers

If you want to create a map with two layers - one with points and another with polygons, take a look at Jack Dougherty's [FusionTable-Map-2-layers](https://github.com/JackDougherty/FusionTable-Map-2-layers), based on this template. It's a great place to start.

### Resources

Fusion Tables

* [Fusion Tables Home](http://www.google.com/fusiontables/Home)
* [v1 API Documentation](https://developers.google.com/fusiontables/docs/v1/using)
* [v1 API Migration Guide](https://developers.google.com/fusiontables/docs/v1/migration_guide)

Reference Guides

* [Google Maps API](http://code.google.com/apis/maps/documentation/javascript/overlays.html#FusionTables)
* [Fusion Tables API Developer Guide](http://code.google.com/apis/fusiontables/docs/developers_guide.html)
* [Fusion Tables API Reference Guide](http://code.google.com/apis/fusiontables/docs/developers_reference.html)


### Contributors to Searchable Map Template

* [Derek Eder](http://derekeder.com) - primary contributor
* [Chris Keller](http://www.chrislkeller.com/) - [recenter map on resize](https://github.com/derekeder/FusionTable-Map-Template/pull/11)
* [nb-ofs](https://github.com/nb-ofs) - [Windows 8 touch screen ability](https://github.com/derekeder/FusionTable-Map-Template/pull/14), [Google Maps Visual Refresh](https://github.com/derekeder/FusionTable-Map-Template/pull/18), [Noscript message](https://github.com/derekeder/FusionTable-Map-Template/pull/19)
* [Felipe Figueroa](https://github.com/amenadiel) - [Geocomplete update](https://github.com/derekeder/FusionTable-Map-Template/pull/36), [Updates to query function](https://github.com/derekeder/FusionTable-Map-Template/pull/38), [maps_lib.js javascript class](https://github.com/derekeder/FusionTable-Map-Template/pull/45)

### Copyright and attribution for Searchable Map Template

Copyright (c) 2015 Derek Eder. Released under the MIT License.

If you use this template, please provide the following attribution in the footer:

```html
<a href='http://derekeder.com/searchable_map_template/'>Searchable Map Template</a>
by <a href='http://derekeder.com'>Derek Eder</a>.
```

See [LICENSE](https://github.com/derekeder/FusionTable-Map-Template/blob/master/LICENSE) for more details.


## Internationalization with i18next

i18next is a very popular internationalization library for browser or any other javascript environment.

* Connection to backend (loading translations via xhr from json files)
* Browser language detection
* Runs on modern browsers (Chrome, Firefox, … and IE >= 10; IE9 with es5 shim)

### Dependencies

* [i18next 8.1.0](i18next.com/)
* [jquery-i18next](https://github.com/i18next/jquery-i18next)
* [i18next-xhr-backend](https://github.com/i18next/i18next-xhr-backend)
* [i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector)

### Expand current internationalization to the project (English / Spanish)

* Add "data-i18n" attribute to HTML tag with the key name.
* Use same key name in JSON file for each language (-en, -es).
* If nesting a key under other key (e.g.: par: {key1: val1, key2: val2}), "data-i18n" attribute will be parent.key like so data-i18n="par.key1"
* If HTML element has a "title" attribute (tooltip), it can be localized by using "[title]att-key;elem-key" where "att-key" is the key to localize the tooltip and "text-key" is the key to localize the text displayed for the localized element. Example: an element with data-i18n="[title]lang.title;lang.text" attribute will show lang.text as the text for that HTML element and when hovering over that element with the mouse a tooltip will show the text contained in lang.title key.

### Add a new language to the project

* Copy i18n/migra-en.json into another JSON file with the name migra-lng where lng is the shortcut for language (e.g.: ar for Arabic, fr for French and so on).
* Replace each value in the JSON file by the corresponding translation into the chosen language.
* Add the corresponding language to the Language dropdown in all HTML files by adding a nested <li><a href="#" title="ChosenLng" data-i18n="lng">ChosenLng</a></li> element (where "ChosenLng" is the chosen language, e.g.: "Français" and "lng" is the chosen language code, e.g.: "fr").
