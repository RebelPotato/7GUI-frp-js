# 02: Temperature Converter

> The task is to build a frame containing two textfields T<sub>C</sub> and T<sub>F</sub> representing the temperature in Celsius and Fahrenheit, respectively. Initially, both T<sub>C</sub> and T<sub>F</sub> are empty. When the user enters a numerical value into T<sub>C</sub> the corresponding value in T<sub>F</sub> is automatically updated and vice versa. When the user enters a non-numerical string into T<sub>C</sub> the value in T<sub>F</sub> is not updated and vice versa. The formula for converting a temperature C in Celsius into a temperature F in Fahrenheit is $C = (F - 32) \times \frac 5 9$ and the dual direction is $F = C \times \frac 9 5 + 32$.

Bidirectional relations are tricky. In this example, the relationship between the two states are very simple, so we can afford to store them in the element itself.

```html
<div id="converter">
  <input type="number" id="celsius" />
  <span> Celsius <strong>=</strong> </span>
  <input type="number" id="fahrenheit" />
  <span> Farenheit</span>
</div>
```

Do note that the inputs are constrained to be numbers, and that you can't input non-floats into it. This logic is provided by HTML itself.
HTML is a particularly nice platform to build UIs on, in part because it handles so much for you out of the box.

Whenever one changes, change the other's value directly. This does not trigger an input effect, so no circular updates are possible.

We need two pipelines, one of which is:

```js
Kefir.fromEvents($("#celsius"), "input")
  .map((e) => e.target.value)
  .flatten(parse)
  .map((c) => Math.round(c * 1.8 + 32))
  .onValue((f) => {
    $("#fahrenheit").value = f;
  });
```

in which `parse` is a function that parses the input from an element:

```js
function parse(str) {
  const result = parseFloat(str);
  if (isNaN(result)) return [];
  return [result];
}
```

I'm sure you can figure the other one out!

Next stop: [03-flight-booker](./03-flight-booker.md)

[Back To Toc](../README.md)
