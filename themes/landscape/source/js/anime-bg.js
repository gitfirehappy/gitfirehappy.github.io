// Anime background randomizer — drop images in /images/bg/ named bg-1.jpg, bg-2.jpg, ...
(function() {
  'use strict';
  var bg = document.getElementById('anime-bg');
  if (!bg) return;

  // Try to load random background from /images/bg/bg-N.jpg
  var maxTries = 20;
  var idx = Math.floor(Math.random() * maxTries) + 1;
  var tried = 0;

  function tryNext() {
    if (tried >= maxTries) return; // all tried, keep gradient fallback
    var url = '/images/bg/bg-' + idx + '.jpg';
    var img = new Image();
    img.onload = function() {
      bg.style.backgroundImage = 'url(' + url + ')';
    };
    img.onerror = function() {
      tried++;
      idx = (idx % maxTries) + 1;
      tryNext();
    };
    img.src = url;
  }

  tryNext();
})();
