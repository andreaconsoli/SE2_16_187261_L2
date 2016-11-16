function visualizza(){
	document.getElementById("nomeprodotto").style.visibility =  "visible";
	document.getElementById("quantita").style.visibility =  "visible";
	document.getElementById("invia").style.visibility =  "visible";
}

function inserisciprodotto(){
	var nomeprodotto, quantita, tabella, riga;
	nomeprodotto = document.getElementById("nomeprodotto").value;
	quantita = parseInt(document.getElementById("quantita").value);
	tabella = document.getElementById("tabellamagazzino");
	riga = tabella.insertRow(0)
	var cell1 = riga.insertCell(0);
	var cell2 = riga.insertCell(1);
	cell1.innerHTML = nomeprodotto;
	cell2.innerHTML = quantita;	
	
}

