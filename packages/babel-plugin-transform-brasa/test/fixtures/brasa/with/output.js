var a = {
  b: 1,
  c: 2
};
with (a) {
  console.log(b);
}
