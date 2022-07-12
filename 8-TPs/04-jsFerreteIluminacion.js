/*
no entregue
4.Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.

 */
function CalcularPrecio ()
{
    //Declaro Variable
 	let precioLampara;
    let cantidadLampara;
    let precioBruto;
    let descuento;
    let marca;

    //Inicializo Variable
    precioLampara = 35;
    descuento = 0;

    //Ingreso Datos
    cantidadLampara = document.getElementById("txtIdCantidad").value;
    precioBruto = cantidadLampara * precioLampara;
    marca = document.getElementById("Marca").value;

    //Parseo Datos
    cantidadLampara = parseInt(cantidadLampara);

    //Logica
    /*A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. */
    if(cantidadLampara >= 6){
        descuento = 0.50;
    }
    /*B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.*/
    else if(cantidadLampara == 5){
        if(marca == "ArgentinaLuz"){

            descuento = 0.40;
        }
        else{
            descuento = 0.30;
        }
    }
    /*C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.*/
    else if(cantidadLampara == 4){
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
            descuento = 0.25;
        }
        else{
            descuento = 0.20;
        }
    }///
    /*D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.*/
    else if(cantidadLampara == 3){
        if(marca == "ArgentinaLuz"){
            descuento = 0.15;
        }
        else if(marca == "FelipeLamparas"){
            descuento = 0.10;
        }
        else{
            descuento = 0.05;
        }
    }
    else{
        descuento;
    }
    descuento = precioBruto -(precioBruto * descuento);
    document.getElementById("txtIdprecioDescuento").value = descuento;
   /*E. Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
    ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.*/
    if(descuento > 120){
        descuento = descuento * 0.10;
        document.getElementById("txtIdprecioDescuento").value = "Usted pago " + descuento + " de IIBB.";
    }
    else{
        document.getElementById("txtIdprecioDescuento").value = descuento;
    }
}
