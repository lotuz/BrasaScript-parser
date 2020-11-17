async function ola(texto) {
  return new Promise(resolva => {
    setTimeout(() => {
      console.log(texto);
    }, 1000);
  });
}
