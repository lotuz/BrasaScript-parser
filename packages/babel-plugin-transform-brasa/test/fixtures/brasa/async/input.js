assinc função ola (texto) {
  retorne novo Promise((resolva) => {
    setTimeout(() => {
      console.log(texto);
    }, 1000);
  });
}
