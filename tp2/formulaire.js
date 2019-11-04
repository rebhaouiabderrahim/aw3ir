
window.onload = function(){

document.getElementById("resultat").setAttribute("style", "display:none");
document.getElementById("error").setAttribute("style", "display:none");
}
document.getElementById('resultat').style.visibility='hidden';

function validation(){
	var nom=document.getElementById("nom").value; 
	var prenom=document.getElementById("prenom").value; 
	var dateDeNaissance=document.getElementById("dateDeNaissance").value; 
	var adresse=document.getElementById("adresse").value; 
	var mail=document.getElementById("mail").value; 
	var error="";

	if(nom.length <5) {	
	document.getElementById("missNom").innerHTML = "La saisie du nom est obligatoire";error="erreur";
	document.getElementById("error").setAttribute("style", "display:block");
	}
	if(prenom.length <5) {
	document.getElementById("missPrenom").innerHTML = "La saisie du Prénom est obligatoire";error="erreur";
	document.getElementById("error").setAttribute("style", "display:block");
	}
	if(dateDeNaissance.length <5) {
	document.getElementById("missDate").innerHTML = "La saisie de la date de naissance est obligatoire";error="erreur";
	document.getElementById("error").setAttribute("style", "display:block");
	}
	if(adresse.length <5) {
	document.getElementById("missAdresse").innerHTML = "La saisie du Prénom est obligatoire";error="erreur";
	document.getElementById("error").setAttribute("style", "display:block");
	}
	if(mail.length <5) {
	document.getElementById("missMail").innerHTML = "La saisie du Mail est obligatoire";error="erreur";
	document.getElementById("error").setAttribute("style", "display:block");
	}
	
	if(error===""){
		document.getElementById("resultat").innerHTML = "Bienvenu "+ document.querySelector("#nom").value;
		document.getElementById("resultat").setAttribute("style", "display:block");
	}
}	
