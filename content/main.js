function preguntar(){
	var cantresp = 10;
	var Resp1 = Math.floor(Math.random()*(cantresp+3)),Resp2, Preg = document.getElementById('pregunta').value;
	switch(Resp1){
		default:Resp2='¡Preguntame otra cosa!';break;
		case 0:Resp2='Claro';break;
		case 1:Resp2='Probablemente';break;
		case 2:Resp2='No lo creo';break;
		case 3:Resp2='Tal vez';break;
		case 4:Resp2='Ni lo pienses';break;
		case 5:Resp2='No me parece bien';break;
		case 6:Resp2='¿Sigues aquí?, ¡NO!';break;
		case 7:Resp2='Por supuesto';break;
		case 8:Resp2='Podría ser';break;
		case 9:Resp2='Si';break;
	}
	var resp = document.getElementById('resp'),car = document.getElementById('car');
	if(Preg != ''){
		document.getElementById('botto').setAttribute("style", "display:initial;");
		resp.innerHTML = Resp2;
		car.innerHTML = "La caracola dice:";
	} else {
		alert('La caracola dice:\nHazme una pregunta.');	
	}
}
