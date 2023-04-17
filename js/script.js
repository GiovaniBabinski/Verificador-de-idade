const btn = document.querySelector("#verificar")

function verificarIdade() {
    var year = new Date()
    var anoAtual = year.getFullYear()

    var nascUsu = document.querySelector("#data")
    var resposta = document.querySelector("#resp")
    var dataNasc = Number.parseInt(nascUsu.value)
    var foto = document.querySelector("#foto")


    if (nascUsu.value == 0 || anoAtual < dataNasc) {
        resposta.innerHTML = "<strong>Inválido! Digite novamente.</strong>"
    } else {
        var genero = document.getElementsByName("genero")
        var idade = anoAtual - dataNasc

        if (genero[0].checked) {
            resposta.innerHTML = "É <strong>Homem</strong> com idade de " + idade + " anos."
            foto.src = "img/homem.jpg"

        } else if (genero[1].checked) {
            resposta.innerHTML = "É <strong>Mulher</strong> com idade de " + idade + " anos."
            foto.src = "img/mulher.jpg"
        }



    }





}





btn.addEventListener("click", verificarIdade)