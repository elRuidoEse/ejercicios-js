const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];
const esPrimo = (numero) =>{
  for(let i = 0; i<ejercicio1.length; i++){
  if (numero%2 === 1){
    console.log(`${numero} es primo`);
  }
}
};
ejercicio1.forEach((numero)=> {
  esPrimo(numero);
});

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

const bienvenidx = (invitado) => {
  if (invitado.edad >= 18 && invitado.esFamiliar == true){
    console.log(`Bienvenidx, ${invitado.nombre}. Puedes pasar`);
  }
}
ejercicio2.forEach((invitado) =>{
  bienvenidx(invitado);
})

let serieFibonacci = 0;
let terminoAnterior = 0;
let terminoActual = 1;
console.log(serieFibonacci);
for (let i=0; i <50; i++){
  serieFibonacci = terminoAnterior + terminoActual;
  terminoAnterior = terminoActual;
  terminoActual = serieFibonacci;
  console.log(serieFibonacci);
}


