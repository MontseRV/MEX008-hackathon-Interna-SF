//Mostrar fecha
const month = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto", "Septiembre","Octubre","Noviembre","Diciembre");

const days= new Array ("Domingo", "Lunes", "Martes","Miércoles", "Jueves",
"Viernes", "Sábado", "Domingo");

const f= new Date(); //"Date" es un constructor
const viewData = `<div>
                        ${days[f.getDay()]}
                        ${f.getDate()}
                        ${month[f.getMonth()]}
                        ${f.getFullYear()} </div>`;

const date= document.getElementById('date').innerHTML= viewData;


