$(() =>{
	const objAuth = new Autenticacion();

	$('#btnRegistroEmail').click(() => {
		const nombres = $('#nombreContactoReg').val();
		const email = $('#emailContactoReg').val();
		const password = $('#passwordReg').val();

		const auth = new Autenticacion();
		auth.crearCuentaEmailPass(email,password,nombres)
	});

	$('#btnRegistrarse').click(() => {
		$('#modalSesion').modal('close');
		$('#modalRegistro').modal('open');
		const auth = Autenticacion();
		auth.crearCuentaEmailPass()
	});

	$('#btnInicioEmail').click(() => {
		
		const email = $('#emailSesion').val();
		const password = $('#passwordSesion').val();
		const auth = new Autenticacion();
		auth.authEmailPass(email, password)
	});

	$('#authGoogle').click(() => objAuth.authCuentaGoogle());
});
