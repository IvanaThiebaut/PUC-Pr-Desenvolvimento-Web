
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 80)
})


function mascaraTelefone(event) {
    let tecla = event.key;
 
    let telefone = event.target.value.replace(/\D+/g, "");
    
    if (/^[0-9]$/i.test(tecla)) {
    telefone = telefone + tecla;
    let tamanho = telefone.length;
    
    if (tamanho >= 12) { // Confere se o telefone está com 12 ou mais caracteres
    return false;
    }
    
    if (tamanho > 10) {
    telefone = telefone.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (tamanho > 5) {
    telefone = telefone.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (tamanho > 2) {
    telefone = telefone.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
    telefone = telefone.replace(/^(\d*)/, "($1");
    }
    
    event.target.value = telefone;
    }
    
    if (!["Backspace", "Delete", "Tab"].includes(tecla)) {
    return false;
    }
    }

    // get

    function getParameters() {

        var params = new Array();
        var paramsRet = new Array();
        var url = window.location.href; 
        var paramsStart = url.indexOf("?"); 
        
        if (paramsStart != -1) {
       
        var paramString = url.substring(paramsStart + 1);

        paramString = decodeURIComponent(paramString);

        var params = paramString.split("&"); 

        for (var i = 0; i < params.length; i++) {
        var pairArray = params[i].split("="); 

        if (pairArray.length == 2) {
        paramsRet[pairArray[0]] = pairArray[1];
        }
        
        }
        return paramsRet;
        }
        return null; 
        }