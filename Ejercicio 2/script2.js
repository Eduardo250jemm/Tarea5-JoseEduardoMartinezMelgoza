function promediar(){
	
	var calif1 = parseInt(document.getElementById('c1').value);
	var calif2 = parseInt(document.getElementById('c2').value);
	var calif3 = parseInt(document.getElementById('c3').value);
	
	var resultado = (calif1+calif2+calif3)/3; 
	
	if (resultado>=5){
		alert("El alumno esta aprobado con: "+resultado); 
		
	} 
	else {
		alert ("El alumno esta suspendido con  "+resultado+" de calificacion.")
		
	}
	
}