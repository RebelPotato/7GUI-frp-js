const $ = (selector) => document.querySelector(selector);
function parse(str) {
  const result = parseFloat(str);
  if (isNaN(result)) return [];
  return [result];
}
Kefir.fromEvents($("#celsius"), "input")
  .map((e) => e.target.value)
  .flatten(parse)
  .map((c) => Math.round(c * 1.8 + 32))
  .onValue((f) => {
    $("#fahrenheit").value = f;
  });
Kefir.fromEvents($("#fahrenheit"), "input")
  .map((e) => e.target.value)
  .flatten(parse)
  .map((f) => Math.round(((f - 32) * 5) / 9))
  .onValue((c) => {
    $("#celsius").value = c;
  });
$("#celsius").value = 0;
$("#fahrenheit").value = 32;
