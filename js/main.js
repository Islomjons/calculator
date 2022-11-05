function sqrt() {
    document.getElementById("ro").innerHTML = Math.sqrt("v")
}

function c(val) {
    document.getElementById("ro").innerHTML = (val)
}

function v(val) {
    document.getElementById("ro").innerHTML += (val)
}

function e(params) {
    try {
        c(eval(document.getElementById("ro").value))
    }catch (e) {
        c('Error')
    }
}