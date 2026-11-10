// Builds email links at page load so simple bots scraping the HTML don't see the address.
document.querySelectorAll('a[data-e]').forEach(function(a){
  var e=a.getAttribute('data-e').split('').reverse().join('');
  a.href='mailto:'+e; a.textContent=e;
});
