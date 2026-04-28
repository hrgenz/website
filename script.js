(function setupMarquees() {
  var marqueeRows = document.querySelectorAll('.marquee-row');

  marqueeRows.forEach(function (row) {
    var group = row.querySelector('.marquee-group');
    if (!group) {
      return;
    }

    var track = document.createElement('div');
    track.className = 'marquee-track';

    var clone = group.cloneNode(true);
    track.appendChild(group);
    track.appendChild(clone);

    row.appendChild(track);
  });
})();

(function setupInstagramEmbed() {
  function processInstagramEmbeds() {
    if (window.instgrm && window.instgrm.Embeds && window.instgrm.Embeds.process) {
      window.instgrm.Embeds.process();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', processInstagramEmbeds, { once: true });
  } else {
    processInstagramEmbeds();
  }

  window.addEventListener('load', processInstagramEmbeds, { once: true });
})();
