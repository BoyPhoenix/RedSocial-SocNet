/**
 * Valida el formulario de singup antes de proceder a su
 * envío. En caso de error, los mensajes de error se
 * muestran integrados en el documento.
 *
 * NOTA: Versión de la validación vía JS tras estudiar
 * DHTML.
 */

function validateSignUpDHTML() {
	var form = document.forms["signup"];
	var errores = "";
	var retorno = true;

    form["nickname"].className = ""
	form["email"].className = ""
	form["date_birth"].className = ""
	form["passwd"].className = ""
	form["confirm"].className = ""

	if(form["nickname"].value.trim() == "") {
		errores += "<ol <b>Nombre de usuari@ requerido</b> </ol>"
		form["nickname"].className = "inputError"
		if(retorno) form["nickname"].focus()
		retorno = false;
	}
	if(form["email"].value.trim() == "") {
		errores += "<ol <b>Email requerido</b> </ol>"
		form["email"].className = "inputError"
		if(retorno) form["email"].focus()
		retorno = false;
	}

	if(form["date_birth"].value.trim() == "") {
		errores += "<ol <b>Fecha de nacimiento requerida</b> </ol>"
		form["date_birth"].className = "inputError"
		if(retorno) form["date_birth"].focus()
		retorno = false;
	}

	if(form["passwd"].value.trim() == "") {
		errores += "<ol <b>Contraseña requerida</b> </ol>"
		form["passwd"].className = "inputError"
		if(retorno) form["passwd"].focus()
		retorno = false;
	}
	if(form["confirm"].value.trim() == "") {
		errores += "<ol <b>Confirmación de contraseña requerida</b> </ol>"
		form["confirm"].className = "inputError"
		if(retorno) form["confirm"].focus()
		retorno = false;
	}

    if(form["passwd"].value != form["confirm"].value) {
		errores += "<ol <b>Las contraseñas no son iguales</b> </ol>"
		form["passwd"].className = "inputError"
		form["confirm"].className = "inputError"
		if(retorno) form["passwd"].focus()
		retorno = false;
	}

	if(! retorno) {
	    document.getElementById("errores_profile").innerHTML = errores
	    document.getElementById("errores_profile").style.display = "block"
	}

	return(retorno);
}
