/*  Declaracion de variables */
let inputIncome= document.getElementById("input-income");
let rentExpense= document.getElementById("rent");
let waterExpense= document.getElementById("water");
let lightExpense= document.getElementById("light");
let groceryExpense= document.getElementById("grocery");
let transportExpense= document.getElementById("transport");
let savingExpense= document.getElementById("saving");
let buttonIncome= document.getElementById("button-send");
let buttonRent= document.getElementById("button-rent");
let buttonWater= document.getElementById("button-water");
let buttonLight= document.getElementById("button-light");
let buttonGrocery= document.getElementById("button-grocery");
let buttonTransport= document.getElementById("button-transport");
let buttonSaving= document.getElementById("button-saving");
/*  Declaracion de funciones */
const showIncome = () => {
console.log(inputIncome.value);
console.log(typeof(inputIncome.value)); 
localStorage.setItem("income",inputIncome.value)
let income=localStorage.getItem("income");
console.log(income);
document.getElementById("show-income").innerHTML = income;
}
const showRent = () => {
    console.log(inputIncome.value);
    console.log(typeof(inputIncome.value)); 
    localStorage.setItem("rent",rentExpense.value)
    let rentStorage=localStorage.getItem("rent");
    console.log(rent);
    document.getElementById("show-rent").innerHTML = rentStorage;
}
const showWater = () => {
    console.log(inputIncome.value);
    console.log(typeof(inputIncome.value)); 
    localStorage.setItem("water",waterExpense.value)
    let waterStorage=localStorage.getItem("water");
    console.log(rent);
    document.getElementById("show-water").innerHTML = waterStorage;
}
const showLight = () => {
    console.log(inputIncome.value);
    console.log(typeof(inputIncome.value)); 
    localStorage.setItem("light",lightExpense.value)
    let lightStorage=localStorage.getItem("light");
    console.log(rent);
    document.getElementById("show-light").innerHTML = lightStorage;
}
const showGrocery = () => {
    console.log(inputIncome.value);
    console.log(typeof(inputIncome.value)); 
    localStorage.setItem("grocery",groceryExpense.value)
    let groceryStorage=localStorage.getItem("grocery");
    console.log(rent);
    document.getElementById("show-grocery").innerHTML = groceryStorage;
}
const showTransport = () => {
    console.log(inputIncome.value);
    console.log(typeof(inputIncome.value)); 
    localStorage.setItem("transport",transportExpense.value)
    let transportStorage=localStorage.getItem("transport");
    console.log(rent);
    document.getElementById("show-transport").innerHTML = transportStorage;
}
const showSavings = () => {
    console.log(inputIncome.value);
    console.log(typeof(inputIncome.value)); 
    localStorage.setItem("saving",savingExpense.value)
    let savingStorage=localStorage.getItem("saving");
    console.log(rent);
    document.getElementById("show-savings").innerHTML = savingStorage;
}


/*Funcion que hace que sigan apareciendo los valores cuando se abre o se recargue la pagina web */
const show = () => {
    document.getElementById("show-income").innerHTML = "$"+localStorage.getItem("income");
    document.getElementById("show-rent").innerHTML = "$"+localStorage.getItem("rent");
    document.getElementById("show-water").innerHTML = "$"+localStorage.getItem("water");
    document.getElementById("show-light").innerHTML = "$"+localStorage.getItem("light");
    document.getElementById("show-grocery").innerHTML = "$"+localStorage.getItem("grocery");
    document.getElementById("show-transport").innerHTML = "$"+localStorage.getItem("transport");
    document.getElementById("show-savings").innerHTML = "$"+localStorage.getItem("saving");
}
/*  Declaracion de Eventos */
buttonIncome.addEventListener('click',showIncome);
buttonRent.addEventListener('click',showRent);
buttonWater.addEventListener('click',showWater);
buttonLight.addEventListener('click',showLight); 
buttonGrocery.addEventListener('click',showGrocery);
buttonTransport.addEventListener('click',showTransport); 
buttonSaving.addEventListener('click',showSavings);
/* Llamada a la funcion show para que siempre se ejecute */
show();

// Ocultar y mostrar secciones de gastos y ahorros

const firstPart = document.getElementById("first-part");
const monthSection =document.getElementById("month-section");
const weekSection=document.getElementById("week-section");
const daySection =document.getElementById("day-section");
const savingSection=document.getElementById("saving-section");
const buttonMonth =document.getElementById("month-button");
const buttonWeek= document.getElementById("week-button");
const buttonDay =document.getElementById("day-button")
const buttonSSaving=document.getElementById("saving-button")

const showMonth = () =>{
    monthSection.classList.remove("desaparecer");
    weekSection.classList.add("desaparecer");
    daySection.classList.add("desaparecer");
    savingSection.classList.add("desaparecer");
}

const showWeek= () =>{
    weekSection.classList.remove("desaparecer");
    monthSection.classList.add("desaparecer");
    daySection.classList.add("desaparecer");
    savingSection.classList.add("desaparecer");
}

const showDay =() =>{
    daySection.classList.remove("desaparecer");
    monthSection.classList.add("desaparecer");
    weekSection.classList.add("desaparecer");
    savingSection.classList.add("desaparecer");
}

const showSSavings =() =>{
    savingSection.classList.remove("desaparecer");
    monthSection.classList.add("desaparecer");
    weekSection.classList.add("desaparecer");
    daySection.classList.add("desaparecer");
}

buttonMonth.addEventListener("click", showMonth);
buttonWeek.addEventListener("click", showWeek);
buttonDay.addEventListener("click", showDay);
buttonSSaving.addEventListener("click", showSSavings);

