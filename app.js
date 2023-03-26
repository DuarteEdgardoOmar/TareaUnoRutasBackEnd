//importo express
const express = require('express')

//creacion de aplicacion express
const app = express()

//indico puerto de ejecucion
const port = 3000


//Item 1-------------------------------------------------------------------------------------------
//Crear una ruta que reciba nombre y apellido por medio de params (ruta parametrizada) y devuelva por un res.send un query string armando un saludo (ej: res.send(`Hola ${nombre}`) ).

//respuessta=>http://localhost:3000/saludo:Omar/Duarte
app.get('/saludo:nombre/:apellido', (request, response) => {

    response.send(`Hola ${request.params.nombre} - ${request.params.apellido}`)
})

//Item 2-------------------------------------------------------------------------------------------
/**Crear una ruta “dividir” la cual reciba dos parámetros (ruta parametrizada) divisor y dividendo, la misma tiene que devolver un res.json({error: "no se puede dividir por cero"}) si el usuario ingresa un 0, si no es el caso devolver res.json({resultado}). */

//para divisor  =0 http://localhost:3000/dividir/20/0
//para divisor !=0 http://localhost:3000/dividir/20/2 
app.get('/dividir:dividendo/:divisor', (req, res) => {

    let dividendo = parseInt(req.params.dividendo)
    console.log(dividendo)

    let divisor = parseInt(req.params.divisor)
    console.log(divisor)

    if (divisor === 0) {
        res.json({
            error: 'no se puede dividir por cero'
        })
    } else {

        let resultado = dividendo / divisor

        res.json({
            resultado
        })
    }

})


//Item 3-------------------------------------------------------------------------------------------
/**Crear una ruta que sume dos valores (ruta parametrizada), pero poner una condición de que no se puedan enviar números menores que cero, y el resultado se debe devolver por medio de un res.json({resultado}). */

//para num<0 ==> http://localhost:3000/suma/-1/15
//para num>0 ==> http://localhost:3000/suma111/15
app.get('/suma/:num1/:num2', (req, res)=>{

    let num1 = parseInt(req.params.num1)
    let num2 = parseInt(req.params.num2)

    if(num1<0 || num2<0){
        res.send('los numeros brindados deben ser mayores a cero')
    }else{
        let resultado = num1 + num2
        res.json({
           resultado
        })

    }

})


//Item 4-------------------------------------------------------------------------------------------
/**Crear una ruta que reciba un numero (ruta con query) si el número es impar debe devolver un res.send("no autorizado") , y si el número es par debe devolver res.send("autorizado").
 */
//para codigo impar ==> http://localhost:3000/autorizados?codigo=1
//para codigo par ===>  http://localhost:3000/autorizados?codigo=22
app.get('/autorizados',(req,res)=>{
    let codigo = parseInt(req.query.codigo)

    if(codigo%2===0){
        /**si resto es cero el codigo es par */
        res.send('autorizado')
    }else{
        /**en cualquier otro caso no esta autorizado */
        res.send('no autorizado')
    }

})


//Item 5-------------------------------------------------------------------------------------------
/**Crear una ruta “lista de compras” (ruta con query) que devuelva un objeto con 5 productos, se debe usar res.json({objeto}). */

//http://localhost:3000/listaDeCompras/?Prod-1=ProdUno&Prod-2=ProdDos&Prod-3=ProdTres&Prod-4=ProdCuatro&Prod-5=ProdCinco
app.get('/listaDeCompras', (req, res)=>{

    res.json(
        req.query
    )
})



//Ejecutar el servidor-----------------------------------------------------------------------------
app.listen(port, () => {
    console.log(`El servidor esta ejecutandose en el puerto ${port}`)
})