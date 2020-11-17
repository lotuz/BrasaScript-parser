function Carro(nome) {
  this.nome = nome;
}
const auto = new Carro('Vrum');

console.log(auto instanceof Carro);
