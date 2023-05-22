var nomes = [];

function enviar() {
        const txt = document.getElementById("txt").value;
        nomes.push(txt);
        
        console.log(nomes);
        
        // document.getElementById("output").innerHTML = nomes.join(" - ");
        mostraArray();  
    }
    
function organizar() {
    nomes.sort();

    // document.getElementById("output").innerHTML = nomes.join(" - ");
       mostraArray();
}

function mostraArray() {
    let html = "";
    for (let i = 0; i < nomes.length; i++) {
        html += "<h3>";
        html+= nomes[i];
        html += "</h3>"
    }
    
     document.getElementById("output").innerHTML = html;
}

function pesquisar() {
    const nome = document.getElementById("pesq").value
    let n = 0;
    for (let i = 0; i < nomes.length; i++) {
        if (nome == nomes[i]) {
            n++;
        }
    }
    document.getElementById("resultado").innerHTML = "<h4>Nome encontrado " + n + "vezes</h4>"
}
