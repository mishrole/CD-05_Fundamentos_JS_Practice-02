// Impares
for (let i = 1; i <= 20; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// Múltiplos de 3 descendente
for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

// Secuencia
let sequence = 4;
for (let i = 0; i <= 5; i++) {
  if (i > 0) {
    sequence -= 1.5;
  }
  console.log(sequence);
}

// Sigma
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;

  if (i === 100) {
    console.log(sum);
  }
}

// Factorial
let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
    if(i === 12) {
        console.log(product);
    }
}