
function mostrarMensaje() {
    document.querySelector(".conResultado").style.display ="none";
}

function encriptartexto() {
    let texto = document.querySelector(".texto").value;
    let encriptado =[];
    let textoEncriptado;
    let tieneMayusculas = /[A-Z]/.test(texto);
    let tieneTildes = /[áéíóú]/.test(texto);

    if (texto.length == 0) {
        document.querySelector(".conResultado").style.display ="none";
        document.querySelector(".sinResultado").style.display = 'block';
    }else if(tieneMayusculas){
        let modal= document.querySelector(".modal");
        modal.classList.add('modal--show');
        document.querySelector(".modal__parra2").style.display = "none";
        document.querySelector(".modal__parra1").style.display = "block";
    }else if(tieneTildes){
        let modal= document.querySelector(".modal");
        modal.classList.add('modal--show');
        document.querySelector(".modal__parra2").style.display = "block";
        document.querySelector(".modal__parra1").style.display = "none";
    }else{
        document.querySelector(".sinResultado").style.display ="none";
        document.querySelector(".conResultado").style.display = 'block';
        for (let i = 0; i < texto.length; i++) {
    
            if (texto[i]=="e") {
                encriptado.push("enter");
        
            }else if (texto[i]=="i") {
                encriptado.push("imes");
        
            }else if (texto[i]=="a") {
                encriptado.push("ai");
        
            }else if (texto[i]=="o") {
                encriptado.push("ober");
        
            }else if (texto[i]=="u") {
                encriptado.push("ufat");
        
            }else{
                encriptado.push(texto[i]);
            }
            
        }
        textoEncriptado = encriptado.join("");
        document.querySelector(".resultado").value= textoEncriptado;
    }
    
    document.querySelector(".texto").value="";
}

function desencriptartexto() {
    let texto = document.querySelector(".texto").value;
    let desencriptado =[];
    let temp = [];
    let coincidencia;
    let textoDesencriptado;
    let tieneMayusculas = /[A-Z]/.test(texto);
    let tieneTildes = /[áéíóú]/.test(texto);
    if (texto.length == 0) {
        document.querySelector(".conResultado").style.display ="none";
        document.querySelector(".sinResultado").style.display = 'block';
    }else if(tieneMayusculas){
        let modal= document.querySelector(".modal");
        modal.classList.add('modal--show');
        document.querySelector(".modal__parra2").style.display = "none";
        document.querySelector(".modal__parra1").style.display = "block";
    }else if(tieneTildes){
        let modal= document.querySelector(".modal");
        modal.classList.add('modal--show');
        document.querySelector(".modal__parra2").style.display = "block";
        document.querySelector(".modal__parra1").style.display = "none";
    }else{
        document.querySelector(".sinResultado").style.display ="none";
        document.querySelector(".conResultado").style.display = 'block';
        for (let i = 0; i < texto.length; i++) {
            if (texto[i]=="a") {
                for (let j = i; j <= i+1; j++) {
                    temp.push(texto[j]);
                }
                coincidencia = temp.join("");
                if (coincidencia=="ai") {
                    desencriptado.push("a");
                    i =i +1;
                    temp=[];
                }else{
                    desencriptado.push(texto[i]);
                } 
            }else if (texto[i]=="i") {
                for (let j = i; j <= i+3; j++) {
                    temp.push(texto[j]);
                }
                coincidencia = temp.join("");
                if (coincidencia=="imes") {
                    desencriptado.push("i");
                    i =i +3;
                    temp=[];
                }else{
                    desencriptado.push(texto[i]);
                } 
            }else if (texto[i]=="o") {
                for (let j = i; j <= i+3; j++) {
                    temp.push(texto[j]);
                }
                coincidencia = temp.join("");
                if (coincidencia=="ober") {
                    desencriptado.push("o");
                    i =i +3;
                    temp=[];
                }else{
                    desencriptado.push(texto[i]);
                } 
            }else if (texto[i]=="e") {
                for (let j = i; j <= i+4; j++) {
                    temp.push(texto[j]);
                }
                coincidencia = temp.join("");
                if (coincidencia=="enter") {
                    desencriptado.push("e");
                    i =i +4;
                    temp=[];
                }else{
                    desencriptado.push(texto[i]);
                } 
            }else if (texto[i]=="u") {
                for (let j = i; j <= i+3; j++) {
                    temp.push(texto[j]);
                }
                coincidencia = temp.join("");
                if (coincidencia=="ufat") {
                    desencriptado.push("u");
                    i =i +3;
                    temp=[];
                }else{
                    desencriptado.push(texto[i]);
                } 
            }else{
                desencriptado.push(texto[i]);
            }
        }
        textoDesencriptado = desencriptado.join("");
        document.querySelector(".resultado").value= textoDesencriptado;
    }
    document.querySelector(".texto").value="";
}

function copiar(textAreaId) {
    const copiarText = document.getElementById(textAreaId);
    copiarText.select();
    document.execCommand("copy");
    document.getElementById(textAreaId).value ="";
}

function cerrarMensaje() {
    let modal= document.querySelector(".modal");
    modal.classList.remove('modal--show');
}


