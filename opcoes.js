var imgatual = "imagens/desligado.png"
var imgalternativa = "imagens/ligado.png"

var v1 = "imagens/volume-1.png"
var v2 = "imagens/volume-2.png"
var v3 = "imagens/volume-3.png"
var v4 = "imagens/volume-4.png"
var v5 = "imagens/volume-5.png"
var v6 = "imagens/volume-6.png"
var v7 = "imagens/volume-7.png"

function trocar() 
{
    document.getElementById("narracao").src = imgatual;   
    let aux = imgatual;
    imgatual = imgalternativa
    imgalternativa = aux;
}

function volume(vol) 
{
    document.getElementById("volume").src = vol;   
}

