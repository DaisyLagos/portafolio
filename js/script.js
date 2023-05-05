function encriptar(){
    var encriptado = "";
    var texto = document.getElementById('ingresar').value;

    let arr = texto.split('');
    console.log(arr);

    for(var i=0; i<arr.length; i++){
        switch(arr[i]){
            case 'a':
                encriptado+="ai";
                break; 
            case 'e':
                encriptado+="enter";
                break;
            case 'i':
                encriptado+="imes";
                break;
            case 'o':
                encriptado+="ober";
                break;
            case 'u':
                encriptado+="ufat";
                break;
            default:
                encriptado+=arr[i];
        }

    }

    var mensaje  = document.getElementById('mensaje');
    var copiar = document.getElementById('copiar');

    document.getElementById('imagen-espacio2').style.display = 'none';
    document.getElementById('aviso1').style.display = 'none';
    document.getElementById('aviso2').style.display = 'none';

    mensaje.style.display = "block";
    copiar.style.display = "block";
    document.getElementById('ingresar').value = "";
    mensaje.textContent = encriptado;
    
}

function desencriptar(){
    var exp = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    var mensaje  = document.getElementById('mensaje');

    var texto = document.getElementById('mensaje').textContent;

    var textoNuevo = texto.replaceAll(exp[0], "a").replaceAll(exp[1], "e").replaceAll(exp[2], "i").replaceAll(exp[3], "o").replaceAll(exp[4], "u");

    mensaje.textContent = textoNuevo;

}

function copiar(){
    var texto = document.getElementById('mensaje').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        console.log('Texto copiado al portapapeles')
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles:', err)
      })
    
}





