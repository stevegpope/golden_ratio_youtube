javascript:(function(){var goldenRatio = 0.618;var duration = document.querySelector('video').duration;var ratioPoint = Math.floor(goldenRatio * duration);var link = new URL(window.location.href);link.searchParams.set('t', ratioPoint);window.location.href = link.toString();})();
