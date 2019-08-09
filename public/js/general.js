firebase.initializeApp(config);

$('#avatar').click(() => {
	firebase.auth().signOut()
	.then(() => {
		$('#avatar').attr('src', 'imagenes/usuario.png');
		M.toast({html: 'SignOut Correcto'});
	}).catch(error => {
		M.toast({html: 'Error al realizar el SignOut'});
	})
})