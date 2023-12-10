//funciones 
function opcion1() {
    let capital = 1500;
    let interes = 0.2;
    let subtotal1 = capital * interes;
    let subtotal2 = capital + subtotal1;
    let cuotas = 3;
    let cuotamens = subtotal2/cuotas;
    alert("pagarás" + "" +  cuotamens + "" + "mensuales")
}

function opcion2() {
    let capital = 3000;
    let interes = 0.2;
    let subtotal1 = capital * interes;
    let subtotal2 = capital + subtotal1;
    let cuotas = 6;
    let cuotamens = subtotal2/cuotas;
    alert("pagarás" + "" +  cuotamens + "" + "mensuales")
}

function opcion3() {
    let capital = 4500;
    let interes = 0.2;
    let subtotal1 = capital * interes;
    let subtotal2 = capital + subtotal1;
    let cuotas = 9;
    let cuotamens = subtotal2/cuotas;
    alert("pagarás" + "" +  cuotamens + "" + "mensuales")
}

function opcion4() {
    let capital = 6000;
    let interes = 0.2;
    let subtotal1 = capital * interes;
    let subtotal2 = capital + subtotal1;
    let cuotas = 12;
    let cuotamens = subtotal2/cuotas;
    alert("pagarás" + "" +  cuotamens + "" + "mensuales")
}

//variables
let opcion = parseInt(prompt("Elija una opción: \n 1-$1,500 en 3 cuotas \n 2-$3,000 en 6 cuotas \n 3-$4500 en 9 cuotas \n 4-$6000 en 12 cuotas \n 5-Salir"));

while(opcion !== 5){
    switch(opcion){
        case 1:        
            opcion1()
            break;
        case 2:
            opcion2()
            break;
        case 3:
            opcion3()
            break;
        case 4:
            opcion4()
            break;
        default:
            alert("Opcion incorrecta")
            break;
    } 
    opcion = parseInt(prompt("Elija una opción: \n 1-$1,500 en 3 cuotas \n 2-$3,000 en 6 cuotas \n 3-$4500 en 9 cuotas \n 4-$6000 en 12 cuotas \n 5-Salir"));
}

alert("Finalizando programa, enter para cerrar")