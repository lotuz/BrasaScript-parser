# babel-plugin-transform-brasa

A plugin that transpiles brasa to javascript. Currently this is just a proof of
concept.


brasa is just a version of javascript where the keywords are in portuguese, 
nothing else. So for example, the following js code:


```js
function soma (a, b) {
  return a + b;
}
```

Would be:

```js
função soma (a, b) {
  retorne a + b;
}
```
