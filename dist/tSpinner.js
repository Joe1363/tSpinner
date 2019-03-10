// tSpinner (v1.0.0) - Copyright 2019 Joseph Cabral - Licensed under MIT
// Docs: https://github.com/Joe1363/tSpinner

var tSpinner = {
  show: function(text) {
    if ($('#tSpinner').length > 0) { $('#tSpinner').remove(); }
    var text = '<div id="tsText">' + (text ? text : 'Loading...') + '</div>';
    $('body').addClass('tspScroll').append('<div id="tSpinner"><div id="tsDiv"><div id="tsLoad"></div>' + text + '</div></div>');
  },
  hide: function() {
    $('#tSpinner').fadeOut(250);
    setTimeout(tSpinner.remove, 255);
  },
  remove: function() {
    $('#tSpinner').remove();
    $('body').removeClass('tspScroll');
  }
};

