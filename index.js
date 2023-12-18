function calcularValorEnCuotas(precioPublicado, cuotas) {
  const porcentajeInteres = 34;
  let valorConInteres = precioPublicado + (precioPublicado * porcentajeInteres) / 100;
  let valorCuota = valorConInteres / cuotas;
  return valorCuota;
}

let salir = false;

while (!salir) {
  let precioPublicado = prompt("Ingrese el precio del producto por el cual deseas consultar o escriba salir");
  if (precioPublicado === "salir") {
    salir = true;
  } else {
    precioPublicado = parseInt(precioPublicado);

    if (precioPublicado >= 0 && !isNaN(precioPublicado)) {
      let cuotas = prompt("Ingrese la cantidad de cuotas:");

      cuotas = parseInt(cuotas);

      if (cuotas > 0 && !isNaN(cuotas)) {
        let valorCuota = calcularValorEnCuotas(precioPublicado, cuotas);
        alert(`El valor de cada cuota es: ${valorCuota}`);
      } else {
        alert("Ingrese una cantidad de cuotas válida.");
      }
    } else {
      alert("Ingrese un precio válido para el producto.");
    }
  }
}
