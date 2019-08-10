class Autenticacion{
	authEmailPass (email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => {
      if (result.user.emailVerified) {
        M.toast({html: 'Bienvenido '+result.user.displayName})
        $('#avatar').attr('src', 'imagenes/usuario_auth.png');
      }else {
        firebase.auth().signOut()
        M.toast({html: 'Por favor realiza la verificacion de la cuenta'})

      }
    })
    $('.modal').modal('close')
	}

	crearCuentaEmailPass(email, password, nombres) {
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(result =>{
        result.user.updateProfile({
          displayName: nombres
        })
        const configuracion = {
          url: 'http://localhost:3000'
        }
        result.user.sendEmailVerification().catch(error =>{
          console.error(error)
          M.toast({html: error.message})
        })
        firebase.auth().signOut()
        M.toast({html: 'Bienvenido '+nombres+' , debes realizar el proceso de verificacion'})
       // M.toast('Bienvenido ${nombres}, debes realizar el proceso de verificacion', 4000)
        $('.modal').modal('close')
      })
      .catch(error =>{
        // console.error(error)
        M.toast({html: error.message})
        M.toast(error.message, 4000)
      })
      

	}

	authCuentaGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      $('#avatar').attr('src', result.user.photoURL);
      $('.modal').modal('close')
      M.toast({html: 'Bienvenido '+result.user.displayName+ ' te logueaste con Google'})
    }).catch(error => {
      console.error(error.message)
      M.toast({html: 'Error al autenticarse con Google'})
    })
  }
}