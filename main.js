// peso / (altura * altura)

function programaImc (){
    let btn = document.querySelector('.btn')
    btn.addEventListener('click',(e)=>{
        e.preventDefault()
        let peso = Number(document.querySelector('#peso').value)
        let altura = Number(document.querySelector('#altura').value)
        let res = document.querySelector('.res')
        let resTexto = document.querySelector('.res-texto')
        

        if(peso === 0){
            res.style.display = 'flex'
            res.style.backgroundColor = 'red'
            resTexto.innerHTML = 'Peso invalido'
        }else if(altura === 0){
            res.style.display = 'flex'
            res.style.backgroundColor = 'red'
            resTexto.innerHTML = 'Altura invalida'
        }else{
            let imc = (peso / (altura * altura)).toFixed(2)

            if(imc < 18.5){
                res.style.display = 'flex'
                res.style.backgroundColor = 'green'
                resTexto.innerHTML = `Seu imc é ${imc} (Abaixo do peso)`
            }else if(imc >= 18.5 && imc <= 24.9){
                res.style.display = 'flex'
                res.style.backgroundColor = 'green'
                resTexto.innerHTML = `Seu imc é ${imc} (Peso normal)`
            }else if(imc >= 25 && imc <= 29.9){
                res.style.display = 'flex'
                res.style.backgroundColor = 'green'
                resTexto.innerHTML = `Seu imc é ${imc} (Sobrepeso)`
            }else if(imc >= 30 && imc <= 34.9){
                res.style.display = 'flex'
                res.style.backgroundColor = 'green'
                resTexto.innerHTML = `Seu imc é ${imc} <br> (Obesidade grau 1)`
            }else if(imc >= 35 && imc <= 39.9){
                res.style.display = 'flex'
                res.style.backgroundColor = 'green'
                resTexto.innerHTML = `Seu imc é ${imc} <br> (Obesidade grau 2)`
            }else{
                res.style.display = 'flex'
                res.style.backgroundColor = 'green'
                resTexto.innerHTML = `Seu imc é ${imc} <br> (Obesidade grau 3)`
            }   
        }     
    })
    
}

programaImc()