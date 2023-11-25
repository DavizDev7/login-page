var eye = document.getElementById("eye")
var pass = document.getElementById("password")
var eyeMode = true;

eye.addEventListener('click', () => {
    if (eyeMode) {      
        eye.className = 'bi-eye'
        eyeMode = false
        pass.type = 'text'
    }else{      
        eye.className = 'bi-eye-slash'
        eyeMode = true
        pass.type = 'password'
    }
})