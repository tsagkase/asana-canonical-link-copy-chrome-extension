document.addEventListener('copy', function(e) {
  var textToPutOnClipboard = "some text which should appear in clipboard";
  e.clipboardData.setData('text/plain', textToPutOnClipboard);
  e.preventDefault();
});
