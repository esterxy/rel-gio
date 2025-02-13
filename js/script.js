//dom

const saudacao = document.querySelector('#saudacao')
const dia = document.querySelector('#dia')
const mes = document.querySelector('#mes')
const ano = document.querySelector('#ano')
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

//evento

setInterval (relogio,1000)

//função

function relogio (){

    hoje = new Date ()

    h = hoje.getHours ()
    m = hoje.getMinutes ()
    s = hoje.getSeconds ()
    d = hoje.getDate ()
    me = hoje.getMonth ()
    a = hoje.getFullYear ()

    if (h>=5 && h<12){
        saudacao.textContent = 'Bom dia!'
    }else if (h>=12 && h<18){
        saudacao.textContent = 'Boa Tarde!'
    }else{
        saudacao.textContent = 'Boa Noite!'
    }

    if(h<10){
        h="0"+h
    }
    if(m<10){
        m="0"+m
    }
    if(s<10){
        s="0"+s
    }

    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s
    dia.textContent = d
    mes.textContent = me
    ano.textContent = a
}
