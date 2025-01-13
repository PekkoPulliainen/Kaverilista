let Kaverilista = []
function aloita() {
    for(let x=0;x <= 9; x++) {
        let henkilo = prompt("Anna kaverin nimi:")
        if (henkilo != null) {
            Kaverilista.push(henkilo)
        }
        document.getElementById("Kaverilista").innerHTML = ""
        for (let henkilo of Kaverilista) {
            document.getElementById("Kaverilista").innerHTML += `<li>${henkilo}</li>`
        }
    }
}
function lisaa() {
    let henkilo = document.getElementById("henkilo").value
        if (henkilo != null) {
            Kaverilista.push(henkilo)
        }
        document.getElementById("Kaverilista").innerHTML = ""
        for (let henkilo of Kaverilista) {
            document.getElementById("Kaverilista").innerHTML += `<li>${henkilo}</li>`
        }
}
function poista() {
    Kaverilista = Kaverilista.filter(henkilo => henkilo != document.getElementById("henkilo").value)

    document.getElementById("Kaverilista").innerHTML = ""
    for (let henkilo of Kaverilista) {
        document.getElementById("Kaverilista").innerHTML += `<li>${henkilo}</li>`
    }
}

function jarjesta() {
    Kaverilista.sort()

    document.getElementById("Kaverilista").innerHTML = ""
    for (let henkilo of Kaverilista) {
        document.getElementById("Kaverilista").innerHTML += `<li>${henkilo}</li>`
    }
}
