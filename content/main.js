var idioma = navigator.language;
var txtnav,txtplh,txtbtn,txtsy1,txtsy2,rspnmd,rspnm0,rspnm1,rspnm2,rspnm3,rspnm4,rspnm5,rspnm6,rspnm7,rspnm8,rspnm9;
if(idioma == 'es'){
	txtnav = 'La caracola mágica';
	txtplh = 'Hazme una pregunta...';
	txtbtn = 'Preguntar';
	txtsy1 = 'La caracola dice:';
	txtsy2 = 'Hazme una pregunta.';
	rspnmd = '¡Preguntame otra cosa!';
	rspnm0 = 'Claro';
	rspnm1 = 'Probablemente';
	rspnm2 = 'No lo creo';
	rspnm3 = 'Tal vez';
	rspnm4 = 'Ni lo pienses';
	rspnm5 = 'No me parece bien';
	rspnm6 = '¿Sigues aquí?, ¡NO!';
	rspnm7 = 'Por supuesto';
	rspnm8 = 'Podría ser';
	rspnm9 = 'Si';
} else {
	txtnav = 'The magic conch';
	txtplh = 'Ask me a question...';
	txtbtn = 'Ask';
	txtsy1 = 'The conch says:';
	txtsy2 = 'Ask me a question.';
	rspnmd = 'Ask me another thing!';
	rspnm0 = 'Sure';
	rspnm1 = 'Probably';
	rspnm2 = 'Do not think so';
	rspnm3 = 'Maybe';
	rspnm4 = 'Do not even think';
	rspnm5 = 'Does not seem right';
	rspnm6 = 'Are you still here?, NO!';
	rspnm7 = 'Of course';
	rspnm8 = 'Could be';
	rspnm9 = 'Yes';
}
window.onload = function() {
	document.getElementById('nav').innerHTML = txtnav;
	document.getElementById('pregunta').setAttribute("placeholder", txtplh);
	document.getElementById('preguntar').innerHTML = txtbtn;
}
function preguntar(){
	var cantresp = 10;
	var Resp1 = Math.floor(Math.random()*(cantresp+3)),Resp2, Preg = document.getElementById('pregunta').value;
	switch(Resp1){
		default:Resp2=rspnmd;break;
		case 0:Resp2=rspnm0;break;
		case 1:Resp2=rspnm1;break;
		case 2:Resp2=rspnm2;break;
		case 3:Resp2=rspnm3;break;
		case 4:Resp2=rspnm4;break;
		case 5:Resp2=rspnm5;break;
		case 6:Resp2=rspnm6;break;
		case 7:Resp2=rspnm7;break;
		case 8:Resp2=rspnm8;break;
		case 9:Resp2=rspnm9;break;
	}
	var resp = document.getElementById('resp'),car = document.getElementById('car');
	if(Preg != ''){
		document.getElementById('botto').setAttribute("style", "display:initial;");
		resp.innerHTML = Resp2;
		car.innerHTML = txtsy1;
	} else {
		alert(txtsy1 + '\n' + txtsy2);	
	}
}
