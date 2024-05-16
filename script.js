const allTables = document.querySelectorAll("ul li");
console.log(allTables);
allTables.forEach((table) => {
    table.addEventListener("click", function(){     
        if (table.classList.contains("disable")){
            return
        }
        allTables.forEach((table)=>{
            if(table.classList.contains("selected")){
                table.classList.remove("selected")
            }
        })
        if(!table.classList.contains("selected")){
                table.classList.add("selected")
        } else {
                table.classList.remove("selected")
        }
    })
});

function format(cpf) {
    cpf = cpf.replace(/\D/g, ''); // remove tudo que não é número
    if (cpf.length > 11) { // tem mais dígitos que um CPF, o que fazer?
        // poderia dar erro, mas estou pegando os 11 primeiros e ignorando o resto
        cpf = cpf.substring(0, 11);
    }
    var dv = cpf.substring(9); // se tem dígitos verificadores, inclui o hífen
    if (dv.length > 0) {
        dv = '-' + dv;
    }

    return cpf.substring(0, 9).split(/(?=(?:\d{3}){0,3}$)/).join('.') + dv;
}

var cpfInput = document.querySelector('#cpf');
cpfInput.addEventListener('input', function() {
    cpfInput.value = format(cpfInput.value);
});