(function () {
  var box = document.getElementById('mc-calc');
  if (!box) return;
  var missed = box.querySelector('#mc-missed');
  var value = box.querySelector('#mc-value');
  var hire = box.querySelector('#mc-hire');
  var out = box.querySelector('#mc-result');
  var LOST_SHARE = 0.5; // half of missed callers try someone else
  function num(el, min, max) {
    var n = parseFloat(String(el.value).replace(/[^0-9.]/g, ''));
    if (isNaN(n)) n = 0;
    return Math.min(Math.max(n, min), max);
  }
  function calc() {
    var yearly = num(missed, 0, 1000) * 52 * LOST_SHARE * (num(hire, 0, 10) / 10) * num(value, 0, 1000000);
    var rounded = yearly >= 1000 ? Math.round(yearly / 100) * 100 : Math.round(yearly);
    out.textContent = '$' + rounded.toLocaleString('en-US');
  }
  [missed, value, hire].forEach(function (el) { el.addEventListener('input', calc); });
  calc();
})();
