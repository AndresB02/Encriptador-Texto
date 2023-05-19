const textArea = document.querySelector(".textArea")
const mensajeEncriptado = document.querySelector(".mensajeEncriptado")
const dibujo = document.querySelector(".dibujo")
const textoAviso = document.querySelector(".textoAviso")
const copiar = document.querySelector(".botonCopiar")
const textAreaDos = document.querySelector("#textAreaDos")

function botonEncriptar () {
    const messageEncriptado = encriptar(textArea.value)
    mensajeEncriptado.value = messageEncriptado
    textArea.value = "";
    if (mensajeEncriptado.value = messageEncriptado) {
      dibujo.style.display = "none"
      textoAviso.style.display = "none"
      copiar.style.display = "block"
    } else if (botonEncriptar === "") {
      dibujo.style.display = "block"
      textoAviso.style.display = "block"
      copiar.style.display = "none"
    }
}

function encriptar(textEncriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    textEncriptado = textEncriptado.toLowerCase()
    for (let i = 0; i < codigo.length; i++) {
        if (textEncriptado.includes(codigo[i][0])) {
            textEncriptado = textEncriptado.replaceAll(codigo[i][0], codigo[i][1])
        } else if (textEncriptado === "") {
          swal("Error", "Debe ingresar un texto para encriptar", "error");
        }
    }
    return textEncriptado
}

function botonDesencriptar () {
    const messageEncriptado = desencriptar(textArea.value)
    mensajeEncriptado.value = messageEncriptado
    textArea.value = "";
    if (mensajeEncriptado.value = messageEncriptado) {
      dibujo.style.display = "none"
      textoAviso.style.display = "none"
      copiar.style.display = "block"
    } else if (botonEncriptar === "") {
      dibujo.style.display = "block"
      textoAviso.style.display = "block"
      copiar.style.display = "none"
    }
}

function desencriptar(textDesencriptado) {
    let codigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    textDesencriptado = textDesencriptado.toLowerCase()
    for (let i = 0; i < codigo.length; i++) {
        if (textDesencriptado.includes(codigo[i][1])) {
            textDesencriptado = textDesencriptado.replaceAll(codigo[i][1], codigo[i][0])
        } else if (textDesencriptado === "") {
          swal("Error", "Debe ingresar un texto para desencriptar", "error");
        }
    }
    return textDesencriptado
}

function copiarTexto(selector) {
    var element = document.querySelector(selector);
    if (element) {
      var text = element.value;
      if (text !== "") {
        navigator.clipboard.writeText(text)
          .then(() => {
            swal("¡Copiado!", "¡El texto ha sido copiado!", "success");
          })
          .catch((error) => {
            alert("Error al copiar el texto: " + error);
          });
      } else if (text !== "click") {
        swal("Error", "Debe ingresar un texto para copiar", "error");
      }
    } else {
      console.error("Element not found with selector:", selector);
    }
}

var input = document.querySelector('#botonCopiar');
var textarea = document.querySelector('#textAreaDos');

input.addEventListener('click', function () {
    textarea.value = '';
}, false);

