// Builds email links at page load so simple bots scraping the HTML don't see the address.
// data-subject adds a subject line. data-keep-text keeps the link's own text (for buttons).
document.querySelectorAll('a[data-e]').forEach(function(a){
  var e=a.getAttribute('data-e').split('').reverse().join('');
  var s=a.getAttribute('data-subject');
  a.href='mailto:'+e+(s?'?subject='+encodeURIComponent(s):'');
  if(!a.hasAttribute('data-keep-text')) a.textContent=e;
});
