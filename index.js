function calcular(operacion) {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultadoDiv = document.getElementById("resultado");
  const logUl = document.getElementById("log");

  const val1 = num1Input.value;
  const val2 = num2Input.value;

  // 4. Validación de campos vacíos
  if (val1 === "" || val2 === "") {
    resultadoDiv.textContent = "Error X: Ambos campos deben contener números.";
    resultadoDiv.style.backgroundColor = "#ffebee";
    resultadoDiv.style.color = "#8b1111ff";
    return;
  }

  const num1 = parseFloat(val1);
  const num2 = parseFloat(val2);
  let resultado;
  let expresion;

  // 6. Mostrar error si la división es entre 0
  if (operacion === "/" && num2 === 0) {
    resultadoDiv.textContent = "Error X: No se puede dividir entre cero.";
    resultadoDiv.style.backgroundColor = "#ffebee";
    resultadoDiv.style.color = "#8b1111ff";
    return;
  }

  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      expresion = `${num1} + ${num2}`;
      break;
    case "-":
      resultado = num1 - num2;
      expresion = `${num1} - ${num2}`;
      break;
    case "*":
      resultado = num1 * num2;
      expresion = `${num1} * ${num2}`;
      break;
    case "/":
      resultado = num1 / num2;
      expresion = `${num1} / ${num2}`;
      break;
    default:
      resultadoDiv.textContent = "Operación no válida.";
      return;
  }

  // Muestra el resultado
  resultadoDiv.textContent = `Resultado: ${resultado.toFixed(2)}`;
  resultadoDiv.style.backgroundColor = "#e8f5e9";
  resultadoDiv.style.color = "#147919ff";

  // 5. Crear un log de cálculos anteriores
  const nuevoLog = document.createElement("li");
  nuevoLog.textContent = `${expresion} = ${resultado.toFixed(2)}`;

  // Añadir el nuevo cálculo al principio de la lista
  if (logUl.firstChild) {
    logUl.insertBefore(nuevoLog, logUl.firstChild);
  } else {
    logUl.appendChild(nuevoLog);
  }

  // Limité el número de entradas que se pueden ver del log para no saturar
  while (logUl.children.length > 10) {
    logUl.removeChild(logUl.lastChild);
  }
}
