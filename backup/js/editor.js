"use strict";

var app = app || {};

app.sublime = function () {

  var activeClass = "active",

    $sublime = $(".sublime"),

    $tabs = $(".sublime-tabs__tab"),
    $links = $(".sublime-tabs__link"),
    $projects = $(".sublime-project"),

    $footer = $(".sublime__footer"),
    $title = $(".sublime__title"),
    titleText = $title.text(),

    $maxi = $(".js-sublime-maximise"),
    $togg = $(".js-sublime-toggle"),
    $mini = $(".js-sublime-minimise");

  // $maxi.add($togg).on("click", function () {

  //   $sublime.css({
  //     "-webkit-transition-duration": "0",
  //     "-moz-transition-duration": "0",
  //     "-ms-transition-duration": "0",
  //     "transition-duration": "0",
  //     "opacity": "0",
  //     "left": "10em",
  //     "right": "10em",
  //     "top": "10em",
  //     "bottom": "10em"
  //   });

  //   $sublime.toggleClass("sublime--fullscreen");

  //   setTimeout(function () {
  //     $sublime.css({
  //       "-webkit-transition-duration": "",
  //       "-moz-transition-duration": "",
  //       "-ms-transition-duration": "",
  //       "transition-duration": "",
  //       "opacity": "",
  //       "left": "",
  //       "right": "",
  //       "top": "",
  //       "bottom": ""
  //     });
  //   }, 10);

  // });

  // $mini.on("click", function () {

  //   $sublime.removeClass("sublime--fullscreen");

  // });

  $(window).on("sublimetab", function (e, href) {
    console.log(href);

    var $link = $links.filter("[href=" + href.replace("/", "\\/") + "]"),
      $tab = $link.closest(".sublime-tabs__tab");

    $tab.trigger("activateTab", href);

  });


  $tabs.on("activateTab", function (e, href) {

    href = href.split("/");

    var $tab = $(this),
      $project = $projects.filter("[data-project-name=" + href[href.length - 1] + "]");

    // reverse the z-order
    $tabs
      .each(function (k, v) {
        $(v).css("z-index", $tabs.length - k);
      })
      .removeClass(activeClass);

    $tab
      .addClass(activeClass)
      .css("z-index", $tabs.length + 1);

    $projects.removeClass(activeClass);

    $project.addClass(activeClass);

    $title.text($tab.children(".sublime-tabs__link").text() + " - " + titleText);

    $footer.text($tab.children(".sublime-tabs__link").data("type"));

  });

  $tabs
    .first()
    .trigger("activateTab", $links.first().attr("href"));

  $tabs.on("click", function (e) {
    if ($(this).find(".sublime-tabs__link").attr("href") !== "#") {
      $(window).trigger("sublimetab", $(this).find(".sublime-tabs__link").attr("href"));
    }
  });

  // Start typing
  // $('.js-typed').t({
  //   // typing speed in milliseconds
  //   speed: 75,
  //   // enable 'human-like'
  //   speed_vary: true,
  //   // delays start
  //   delay: false,
  //   // mistyping
  //   mistype: false,
  //   // en or de
  //   locale: 'en',
  //   // enable caret
  //   caret: false,
  //   // enable blink
  //   blink: false,
  //   // permanent caret blinking
  //   blink_perm: true,
  //   // wrapper tag
  //   tag: 'pre',
  //   // infinite or N times
  //   repeat: false
  // });




};

app.prettify = function () {
  window.prettyPrint();
};

app.sublime();

$(function () {
  // var options = {
  //   strings: ['\\ A new friend has come.. <br>npm install^1000<br>\t `installing components...` ^1000 `Fetching from source...`'],
  //   typeSpeed: 50,
  //   backSpeed: 40,
  // }

  // var typed = new Typed(".js-typed", options);


  // var typed = new Typed('#js-target', {
  //   stringsElement: '#js-src',
  //   typeSpeed: 50,
  //   backSpeed: 40
  // });

  (function () {
    var srcText = $("#js-src").text().trim();
    var i = 0;
    var result = srcText[i];
    setInterval(function () {
      if (i == srcText.length - 1) {
        clearInterval(this);
        return;
      };
      i++;
      result += srcText[i];
      $("#js-target").text(result);

    }, 150); // the period between every character and next one, in milliseonds.
  })();



})



app.prettify();