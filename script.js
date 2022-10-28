let isIgnite = true;

function campoNomeText() {
    var valor = document.getElementById("campo-nome").value;

    if(!valor){
        document.getElementById("nome-informado").innerHTML = "Seu nome irá aparecer aqui";
    }else{
        document.getElementById("nome-informado").innerHTML = valor;
    }

}

function campoOcupacaoText() {
    var valor = document.getElementById("ocupacao-principal").value;

    if(!valor){
        document.getElementById("ocupacao-informada").innerHTML = "Ocupação principal aparecerá aqui";
    }else{
        document.getElementById("ocupacao-informada").innerHTML = valor;
    }    
}

function changeCard(corCard) {

    var valor = document.getElementById("card-figurinha");
    var bg = "card-explorer";

    if(corCard != "A"){
        bg = "card-ignite";
    }
     
    //isIgnite = !isIgnite;
    valor.style.backgroundImage = `url(./assets/bg-${bg}.svg)`;
}

function readImage() {
    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("foto-anexada").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
}

document.getElementById("formFile").addEventListener("change", readImage, false);

function downloadFigurinha(){

    /*var container = document.getElementById('card-figurinha');

    html2canvas(container,{allowTaint : true}).then(function(canvas) {

        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "figurinha.png";
        link.href = canvas.toDataURL();
        link.target = "_blank";
        link.click();
    });*/

    html2canvas(document.querySelector("#card-figurinha")).then(canvas => {
        
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.download = "figurinha.png";
        link.href = canvas.toDataURL();
        link.target = "_blank";
        link.click();
        
        
        //document.body.appendChild(canvas)
    });
}

