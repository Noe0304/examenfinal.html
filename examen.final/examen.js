/*let correo = prompt("Ingrese correo electronico: ");
correoSinEspacio =correo.trim();
console.log(correoSinEspacio)

function fecha ()



if (correoSinEspacio.length > 0) {
    if(parseInt(correoSinEspacio[0]) == NaN){
    switch (correo1.toUpperCase()) {}
    } else {
        alert("VUELVA A INTENTAR")
    }
}

let contraseña = prompt("Ingrese la contraseña");
contraseña >= 8
?  console.log(`${contraseña} es mayor que ${8}`)
:  console.log(`${8} es menor que ${contraseña}`)


*/

let correo = prompt("Ingrese correo electronico: ");
if (+correo[0] >= 0 && +correo[0] <= 9) {

} else {
    let correo2 = correo.toLowerCase();

    if (correo2.endsWith("Cumbre.edu.bo")); {

        let password = prompt("Ingrese contraseña")

        if (password.length > 8) {

            if (password.startsWith("$*")) { 

                let solicituPost = confirm("desea crear un post?");

                if (solicituPost == true) {

                    let post = prompt("Ingrese su primer post")

                    if (post.length > 0) {

                        let cadenaPost = "MI primer post en js"

                        alert("Mi primer post en js")

                        console.warn(cadenaPost.split(" "))

                    } else {

                        alert("Vuelva a intentarlo en <NumeroRamdon> seg. \n <fechaActual>")
                    }
                } else {
                    alert("Mi primer post en js")
                }
            } else {
                alert("Vuelva a intentar")
            }
        } else {
            
        }
    }
}



