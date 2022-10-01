// Elementos del DOM
const getDOMElement = (id) => document.querySelector(id);

const $inputDay = getDOMElement("#inputDay");
const $inputMonth = getDOMElement("#inputMonth");
const $inputYear = getDOMElement("#inputYear");

const $inputLeapYear = getDOMElement("#inputLeapYear");
const $inputWorkingDay = getDOMElement("#inputWorkingDay");
const $textError = getDOMElement("#textError");

// Utilidades
const isLeapYear = (year) => new Date(year, 1, 29).getDate() === 29;
const getDayMessage = (day) => {
  switch (day) {
    case 0:
      return "Domingo, dia no laborable";
    case 1:
      return "Lunes, dia laborable";
    case 2:
      return "Martes, dia laborable";
    case 3:
      return "Miercoles, dia laborable";
    case 4:
      return "Jueves, dia laborable";
    case 5:
      return "Viernes, dia laborable";
    case 6:
      return "Sabado, dia no laborable";
  }
};
const setError = (message) => ($textError.textContent = message);
const setCurrentDate = () => {
  // Establecer datos por defecto en el DOM (Inicio de la aplicación)
  const date = new Date();
  $inputDay.value = date.getDate();
  $inputMonth.value = date.getMonth();
  $inputYear.value = date.getFullYear();
};
const cleanError = () => $textError.textContent = "";

// Main
setCurrentDate();
const calculateDate = () => {
  // Obtener valores del DOM
  const day = Number($inputDay.value);
  const month = Number($inputMonth.value);
  const year = Number($inputYear.value);  

  // Fecha completa
  const date = new Date(year, month, day);

  // Validar fecha
  if (day !== date.getDate()) return setError("El dia no es valido");
  if (month !== date.getMonth()) return setError("El mes no es valido");
  if (year !== date.getFullYear() || year < 0) return setError("El año no es valido");

  // Resultados
  const leapYear = isLeapYear(year);
  const message = getDayMessage(date.getDay());

  // Mostrar resultados
  $inputLeapYear.value = leapYear ? "Año bisiesto" : "Año normal";
  $inputWorkingDay.value = message;
  
  // Limpiar errores
  cleanError()
};
