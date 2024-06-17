//registrar usuario
const registrar = document.querySelector('#registrar')

registrar.addEventListener('submit' , (e)=>{

    e.preventDefault()
    
    const usuario = document.querySelector('#nickname').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || []

    const usuarioRegistrado = usuarios.find(usuario => usuario.correo === email)

    if(usuarioRegistrado){
        return alert('ya esta registrado intente de nuevo')
    }

    usuarios.push({usuario: usuario, correo: email, contra: password})
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
    alert('registrado con exito')
    window.location.href='./index.html'
})
