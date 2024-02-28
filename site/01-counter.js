const $ = selector => document.querySelector(selector);
const clicks = Kefir.fromEvents($('#increment'), 'click');
const sums = clicks.scan((sum, _) => sum + 1, 0);
sums.onValue(sum => {$('#value').value = sum});