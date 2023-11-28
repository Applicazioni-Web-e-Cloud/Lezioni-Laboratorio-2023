function elencoParametri(idElemento) {
    var corpo = document.getElementById(idElemento)
    var parametri = new URLSearchParams(window.location.search);

    for (var p of parametri) {
        corpo.innerHTML += "<p>" + p[0] + "->" + p[1] + "</p>";

    }

    document.getElementById('email').value = "ciao"
    var password = document.getElementById('password');
    var nome = document.getElementById('nome').value = "boooh";
    var cognome = document.getElementById('lname');

    password.value = parametri.get('password')
    nome.value = parametri.get('nome')
    cognome.value =parametri.get('cognome')

}

function mostraPassword(elemento, tasto) {

    if (elemento.type == 'text') {
        elemento.type = 'password';
        tasto.innerHTML = 'Mostra Password';
    } else {
        elemento.type = 'text';
        tasto.innerHTML = 'Nascondi Password';
    }


}

function controllaLunghezza(elemento, lunghezza) {
    if (elemento.value.length < lunghezza) {
        elemento.classList.add('border-danger');
        return false;
    } else {
        elemento.classList.remove('border-danger');

        return true
    }

}

function passwordUguali(password1, password2) {
    console.log(password2.value + "- key press")

    if (password1.value == password2.value) {
        password2.classList.remove('border-danger')
    } else {
        password2.classList.add('border-danger')
    }
}
function check(elemento){
    console.log(elemento.checked)
}
function controllaCampi() {
    console.log("Sto controllando i campi");
    var controllo = true;

    var password = document.getElementById('password');
    var password2 = document.getElementById('password2');
    var nome = document.getElementById('nome');
    var checkbox = document.getElementById('checkbox');

    if (password.value != password2.value) {
        password.classList.add('border-danger')
        password2.classList.add('border-danger')
        controllo = false;
    } else {
        password.classList.remove('border-danger')
        password2.classList.remove('border-danger')
    }

    if (password.value.length < 8) {
        password.classList.add('border-danger')
        controllo = false;
    } else {
        password.classList.remove('border-danger')
    }

    if (nome.value.length < 3) {
        nome.classList.add('border-danger')
        controllo = false;
    } else {
        nome.classList.remove('border-danger')
    }

    if (!checkbox.checked) {
        checkbox.classList.add('border-danger')
        controllo = false;
    } else {
        checkbox.classList.remove('border-danger')
    }

    // for (c = 0; c < nome.length; c++) {
    //     if ((nome[c] >= 'A' && nome[c] <= 'Z') || (nome[c] >= 'a' && nome[c] <= 'z') || nome[c] == ' ') {
    //         console.log(nome[c] + "-> ok");
    //     } else {
    //         console.log(nome[c] + "-> nok");
    //     }
    // }
    console.log(controllo)
    return controllo;

}
