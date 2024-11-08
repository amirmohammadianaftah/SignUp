const slider = document.querySelector('main>.slider')
const fig = document.querySelectorAll('.bus>figure')
const bus = document.querySelector('.bus')
const signUp = document.querySelector('main>.signUp>.butt>.first')
const signIn = document.querySelector('main>.signUp>.butt>.second')
const sup = document.querySelector('main>.signUp>.sup>div')
const sin = document.querySelector('main>.signUp>.sin')
const spanFir = document.querySelector('main>.signUp>.sup>div>div>span')
const spanSec = document.querySelector('main>.signUp>.sin>div>span')
const name = document.querySelector('main>.signUp>.sup>div>#name')
const mail = document.querySelector('main>.signUp>.sup>div>#mail')
const pass = document.querySelector('main>.signUp>.sup>div>#pass')
const enterSiup = document.querySelector('main>.signUp>.sup>div>button')
const enterSiin = document.querySelector('main>.signUp>.sin>button')
const check = document.querySelector('main>.signUp>.sup>div>.check')
const notCheck = document.querySelector('main>.signUp>.sup>div>.notCheck')
const eye = document.querySelector('main>.signUp>.sup>div>.eye')
const eyeSlash = document.querySelector('main>.signUp>.sup>div>.eyeSlash')
const mailTwo = document.querySelector('main>.signUp>.sin>#mailTwo')
const passTwo = document.querySelector('main>.signUp>.sin>#passTwo')
const eyeTwo = document.querySelector('main>.signUp>.sin>.eyeTwo')
const eyeSlashTwo = document.querySelector('main>.signUp>.sin>.eyeSlashTwo')

// console.log(eye);
// console.log(eyeSlash);

let see = 1
let seeTwo = 1
eye.addEventListener('click', () => {
    if (see % 2) {
        // console.log(pass);
        pass.setAttribute('type', 'text')
        eyeSlash.style.opacity = '1'
        eye.style.opacity = '0'
    } else {
        pass.setAttribute('type', 'password')
        eyeSlash.style.opacity = '0'
        eye.style.opacity = '1'
    }
    see++
})
eyeTwo.addEventListener('click', () => {
    console.log('hi');

    if (seeTwo % 2) {
        // console.log(pass);
        passTwo.setAttribute('type', 'text')
        eyeSlashTwo.style.opacity = '1'
        eyeTwo.style.opacity = '0'
    } else {
        passTwo.setAttribute('type', 'password')
        eyeSlashTwo.style.opacity = '0'
        eyeTwo.style.opacity = '1'
    }
    seeTwo++
})

// console.log(enterSiup);
enterSiup.addEventListener('click', (e) => {
    let num = 0
    if (name.value.length < 4) {
        alert('Your full name shoud be over 3 character')
        num++
    }
    if (mail.value == '') {
        alert('Write your mail')
        num++
    }
    if (mail.value.length < 8) {
        alert('Your mail shoul be at least 8 character')
        num++
    } else {
        if (mail.value.search(/@/) <= 2) {
            alert('Write 3 character before @')
            num++
        } else {
            if (mail.value.search(/@/) + 4 > (mail.value.search(/[.]/))) {
                alert('Space beetween of @ and . should be at least 3 character')
                num++
            } else {
                if (mail.value.search(/[.]/) + 2 >= mail.value.length) {
                    alert('Write your domaine')
                    num++
                }
            }
        }
    }
    if (mail.value.search(/<script/) >= 0) {
        alert('Your entry has been banned')
        window.close()
    }

    if (check.style.opacity == 0) {
        alert('Your password is weak')
        num++
    }

    if (num == 0) {
        enterSiup.style.backgroundColor = 'green'
        alert('Your SignUp was successfully')
    }
})

enterSiin.addEventListener('click', () => {
    let x = 0
    if (mailTwo.value == '') {
        alert('Write your mail')
        x++
    }
    if (mailTwo.value.length < 8) {
        alert('Your mail shoul be at least 8 character')
        x++
    } else {
        if (mailTwo.value.search(/@/) <= 2) {
            alert('Write 3 character before @')
            x++
        } else {
            if (mailTwo.value.search(/@/) + 4 > (mailTwo.value.search(/[.]/))) {
                alert('Space beetween of @ and . should be at least 3 character')
                x++
            } else {
                if (mailTwo.value.search(/[.]/) + 2 >= mailTwo.value.length) {
                    alert('Write your domaine')
                    x++
                }
            }
        }
    }
    if (mail.value.search(/<script/) >= 0) {
        alert('Your entry has been banned')
        window.close()
    }

    if (x == 0) {
        enterSiin.style.backgroundColor = 'green'
        alert('Your SignIn was successfully')
    }
})

pass.addEventListener('focus', () => {
    pass.addEventListener('input', () => {
        let flag = 0
        let temp = pass.value
        temp.search(/[0-9]/) >= 0 && flag++
        temp.search(/[a-z]/) >= 0 && flag++
        temp.search(/[A-Z]/) >= 0 && flag++
        temp.search(/[@#$%&*()]/) >= 0 && flag++
        temp.length >= 8 && flag++
        if (flag == 5) {
            notCheck.style.opacity = '0'
            check.style.opacity = '1'
        } else if (flag < 5) {
            notCheck.style.opacity = '1'
            check.style.opacity = '0'
        }
    })
})


name.addEventListener('input', (e) => {
    if (e.target.value.search(/[ا-ی]/) >= 0 || e.target.value.search(/[0-9]/) >= 0) {
        e.target.value = e.target.value.slice(0, e.target.value.length - 1)
    }
})

// console.log(name);

signIn.addEventListener('click', () => {
    signIn.style.backgroundColor = '#56c9bb'
    signIn.style.color = 'white'
    signUp.style.backgroundColor = '#4c5c72'
    signUp.style.color = 'rgba(255, 255, 255, 0.5)'
    sin.style.transform = 'translateY(-412px)'
    sup.style.transition = '0.4s'
    sin.style.transition = '1s'
    sup.style.opacity = '0'
})

signUp.addEventListener('click', () => {
    signUp.style.backgroundColor = '#56c9bb'
    signUp.style.color = 'white'
    signIn.style.backgroundColor = '#4c5c72'
    signIn.style.color = 'rgba(255, 255, 255, 0.5)'
    sin.style.transform = 'translateY(120px)'
    sup.style.transition = '1.4s'
    sin.style.transition = '1s'
    sup.style.opacity = '1'
})

spanFir.addEventListener('click', () => {
    signIn.style.backgroundColor = '#56c9bb'
    signIn.style.color = 'white'
    signUp.style.backgroundColor = '#4c5c72'
    signUp.style.color = 'rgba(255, 255, 255, 0.5)'
    sin.style.transform = 'translateY(-412px)'
    sup.style.transition = '0.4s'
    sin.style.transition = '1s'
    sup.style.opacity = '0'
})

spanSec.addEventListener('click', () => {
    signUp.style.backgroundColor = '#56c9bb'
    signUp.style.color = 'white'
    signIn.style.backgroundColor = '#4c5c72'
    signIn.style.color = 'rgba(255, 255, 255, 0.5)'
    sin.style.transform = 'translateY(120px)'
    sup.style.transition = '1.4s'
    sin.style.transition = '1s'
    sup.style.opacity = '1'
})

let turn = 0
let w = slider.clientWidth
// w = 614px 

bus.style.width = (fig.length * w) + 'px'
