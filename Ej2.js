//Variables
 var arr = ["Ana", 2, "Javi", 5, "Roberto", 7,"Vanessa", 10];
 var data = [5,10,15,4,59,3];  
 var users = ["Juan","Pepe","Maria","Luis"];
 var blackListed = ["Pepe","Luis"];
  //Llamadas a las funciones
 //Ejer1
 ejercicio1A(arr) 
 ejercicio1B(arr)
 //Ejer2
 var resultado = average(data)
 console.log(resultado);
 console.log("_______________")
 //Ejer3
 var valorMinimo = findMinimun(data)
 console.log("valor minimo: "+valorMinimo);
 console.log("_______________")
 //Ejer4
 var res = findGreaterThan(2,data)
 console.log("Todos mayores: "+res);
 console.log("_______________")
 //Ejer5
 var factorial = multipleFactorial(data); 
 console.log("Factorial: "+factorial);
 console.log("_______________")
//Ejer6
 var array_res = ejercicio6(users, blackListed);
 console.log("Users: "+array_res);
 console.log("_______________")


 //Funciones 
 function ejercicio1A(array){
    console.log('Ejercicio 1 A')
    var nuevoArr = array.filter((e) => isNaN(e));
   
    console.log(nuevoArr)
    console.log("_______________")
 }

 function ejercicio1B(array){
    
    console.log('Ejercicio 1 B')
    var nuevoArr = array.filter((e) => !isNaN(e) && e%2==0 || isNaN(e));
 
    console.log(nuevoArr)
    
    console.log("_______________")
 }

 function average(dataArray){
       
    console.log('Ejercicio 2')
    if (dataArray.length){
      
       var sum = dataArray.reduce((p, e) => { 
            return p + e;
          });

          return sum  / dataArray.length
       
    }else{ 
      
        return undefined;
    }
    
 }


 function findMinimun(values){
         
   return values.reduce((acc, val) => {
      acc = ( acc === undefined || val < acc) ? val : acc
      acc = ( acc === undefined || val > acc ) ? val : acc
      return acc;
  }, []);
       
   
   
 }
 
function findGreaterThan(x, values){ 
   return values.every((e) => e>x); 
}

 
function multipleFactorial(values){
  return values.reduce(function(a, b) {
      return a * b;
  },1);
}
/*
6. Crea una función que tome un array de nombres de usuario llamado “users”, y
un array de nombres de usuarios baneados llamado “blackListed”, y que
devuelva un nuevo array con los usuarios no baneados en el array inicial.
Emplea funciones de orden superior (2 puntos)*/
 
function ejercicio6(users, blackListed){
   return  users.filter((e) => 
      !blackListed.includes(e)
   );
 }