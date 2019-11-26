$(document).keyup(function(){
	var nbr = $("#name").val().length;
	var msg =nbr + 'car.';
	$('#nom1').text(msg);

	var nbr2 = $("#firstname").val().length;
	var msg2 =nbr2 + 'car.';
	$('#nom2').text(msg2);

	var nbr3 = $("#birth").val().length;
	var msg3 =nbr3 + 'car.';
	$('#nom3').text(msg3);

	var nbr4= $("#adresse").val().length;
	var msg4 =nbr4 + 'car.';
	$('#nom4').text(msg4);

	var nbr5 = $("#mail").val().length;
	var msg5 =nbr5 + 'car.';
	$('#nom5').text(msg5);
});



function validation(){
	
	var error = "";
	var nom=$("#name").val(); 
	var prenom=$("#firstname").val(); 
	var datedenaissance=$("#birth").val(); 
	var adresse=$("#adresse").val(); 
	var mail=$("#mail").val(); 


		if(nom.length < 5) {
   		error += "nom, ";
		}
		if(prenom.length < 5) {
   		error += "prenom, ";
		}
		if(datedenaissance.length < 5) {
   		error += "datedenaissance, ";
		}
		if(adresse.length < 5) {
   		error += "adresse, ";
		}
		if(mail.length < 5) {
   		error += "mail, ";
		}

if(error == "") {

		$(".modal-title").text('Bienvenue ' + nom);
		$(".modal-body").html('vous êtes nés le '  + datedenaissance+ ' et vous habitez : ' + '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + adresse + '&zoom=14&size=150x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"> </img> </br>' + adresse);
		contactStore.add(nom,prenom,datedenaissance,adresse,mail);

		var list = contactStore.getList();
		//window.alert("cest tout bon "  + list[0]['name'] );
		console.log('list.length= '+list.length);

		var bal1 = "<td>";
		var bal2 = "</td>";
				list.forEach(function(item){
					
				//$("#affichelist").html(bal1+list[i]['name']+bal2 ); // ça ecrase l'ancienne balise
				//$('#affichelist').append(); ça n'ecrase pas ,prepend(); ajoute l'html à la fin du div
				console.log('nouvel objet qui a le nom = '+item['name']);
				document.getElementById('affichelist').innerHTML += '<tr>'+ bal1+item['name']+bal2 + 
				bal1+item['firstname']+bal2+
				bal1+item['date']+bal2+
				bal1+ '<a href="https://maps.google.com/?q=' + item['adress'] + '">' +  item['adress'] + '</a>' + bal2+
				bal1+ '<a href="mailto:'+item['mail']+ '">' + item['mail']+ '</a>' + bal2 +'</tr>';
				list.pop();
				});
				//for (var i=0;i < list.length;i++){
				/*console.log('nouvel objet, nom = ' + list[i]['name']);
				document.getElementById('affichelist').innerHTML = '<tr>'+ bal1+list[i]['name']+bal2 + 
				bal1+list[i]['firstname']+bal2+
				bal1+list[i]['date']+bal2+
				bal1+ '<a href="https://maps.google.com/?q=' + list[i]['adress'] + '">' +  list[i]['adress'] + '</a>' + bal2+
				bal1+ '<a href="mailto:'+list[i]['mail']+ '">' + list[i]['mail']+ '</a>' + bal2 +'</tr>';
				list.pop();
				}*/
		}
else{		
		var list = contactStore.getList();
//		window.alert("il faut remplir les champs" +list );


		$(".modal-title").text('Message Modal');
		$(".modal-body").html('les champs '+error + ' doivent être remplis');
}
	$('#myModal').modal("show");
}


