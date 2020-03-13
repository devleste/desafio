var Rolagem = null

function onFormSubmit() {
    if (validate()) {
        var DadosForm = readDadosForm();
        if (Rolagem == null)
            insertNewRecord(DadosForm);
        else
            updateRecord(DadosForm);
        resetForm();
    }
}

function readDadosForm() {
    var DadosForm = {};
    DadosForm["nomeCompleto"] = document.getElementById("nomeCompleto").value;
    DadosForm["numero"] = document.getElementById("numero").value;
    DadosForm["email"] = document.getElementById("email").value;
    DadosForm["linguagem"] = document.getElementById("linguagem").value;
    DadosForm["dataNasc"] = document.getElementById("dataNasc").value;
    return DadosForm;
}

function insertNewRecord(data) {
    var table = document.getElementById("listaContatos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeCompleto;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.numero;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.linguagem;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.dataNasc;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Deletar</a>`;
}

function resetForm() {
    document.getElementById("nomeCompleto").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("email").value = "";
    document.getElementById("linguagem").value = "";
    document.getElementById("dataNasc").value = "";
    Rolagem = null;
}

function onEdit(td) {
    Rolagem = td.parentElement.parentElement;
    document.getElementById("nomeCompleto").value = Rolagem.cells[0].innerHTML;
    document.getElementById("numero").value = Rolagem.cells[1].innerHTML;
    document.getElementById("email").value = Rolagem.cells[2].innerHTML;
    document.getElementById("linguagem").value = Rolagem.cells[3].innerHTML;
    document.getElementById("dataNasc").value = Rolagem.cells[4].innerHTML;
}

function updateRecord(DadosForm) {
    Rolagem.cells[0].innerHTML = DadosForm.nomeCompleto;
    Rolagem.cells[1].innerHTML = DadosForm.numero;
    Rolagem.cells[2].innerHTML = DadosForm.email;
    Rolagem.cells[3].innerHTML = DadosForm.linguagem;
    Rolagem.cells[4].innerHTML = DadosForm.dataNasc;
}

function onDelete(td) {
    if (confirm('Tem certeza que deseja deletar este contato?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaContatos").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    validade = true;
    if (document.getElementById("nomeCompleto").value == "") {
        validade = false;
        document.getElementById("validarNomeCompleto").classList.remove("esconder");
    } else {
        validade = true;
        if (!document.getElementById("validarNomeCompleto").classList.contains("esconder"))
            document.getElementById("validarNomeCompleto").classList.add("esconder");
    }
    return validade;
}