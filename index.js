class Ejercicios {
    constructor (ejercicio, peso){
    this.ejercicio = ejercicio
    this.peso = peso
    }


    calcularRpe (){
        let entrada = prompt ("ingresar RPE");
        while(entrada != "salir"){
            switch (entrada){
                case "0":
                    alert("reposo total")
                    break;
                case "1":
                    alert("muy suave")
                    break;
                case "2":
                    alert("suave")
                    break;
                case "3":
                    alert("moderado")
                    break;
                case "4":
                    alert("poco duro")
                    break;
                case "5":
                    alert("duro")
                    break;
                case "6":
                    alert("duro")
                    break;
                case "7":
                    alert("muy duro")
                    break;
                case "8":
                    alert("muy duro")
                    break;
                case "9":
                    alert("muy duro")
                    break;
                case "10":
                    alert("maximo")
                    break;
                    default:
                    alert("Entre 0 y 10")
                    break;
            }
            entrada = prompt ("ingresar RPE")
        }
    }
}

function crearEjercicios (){
    let ejercicio = prompt ("ingrese ejercicio")
    let peso = Number (prompt("ingrese peso"))
    let ejercicios = new Ejercicios (ejercicio, peso)
    ejercicios.calcularRpe()
    return ejercicios; 

}

let i = 1
while (i<=4){
    let ejercicios = crearEjercicios();
    i++;
    console.log(ejercicios); 
}

