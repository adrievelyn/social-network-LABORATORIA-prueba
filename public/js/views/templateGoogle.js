
class Autenticacion {
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