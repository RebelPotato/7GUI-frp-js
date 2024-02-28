# 01: Counter

> The task is to build a frame containing a label or read-only textfield T and a button B. Initially, the value in T is “0” and each click of B increases the value in T by one.

The first thing is to create the form.

``` html
<div id="counter">
    <input id="value" type="text" value="0" style="width: 4rem;" readonly />
    <button id="increment" style="width: 4rem;">count</button>
</div>
```

Next, a simple utility function for DOM operations.

```js
const $ = selector => document.querySelector(selector);
```

This task is very straightforward: information flows from the button ...

```js
const clicks = Kefir.fromEvents($('#increment'), 'click');
```

to the text.

```js
const sums = clicks.scan((sum, _) => sum + 1, 0);
```

And the text needs to updated only when a new value is received.

``` js
sums.onValue(sum => {$('#value').value = sum});
```

Four lines of code and we're done.

> Counter serves as a gentle introduction to the basics of the language, paradigm and toolkit for one of the simplest GUI applications imaginable. Thus, Counter reveals the required scaffolding and how the very basic features work together to build a GUI application. **A good solution will have almost no scaffolding.**

Very little scaffolding indeed!

Next stop: [02-temperature-converter](./02-temperature-converter.md)

[Back To Toc](../README.md)