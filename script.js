let h1 = document.querySelector('#timer');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');

let hour = 0;
let minute = 0;
let second = 0;

let timer = null;

start.addEventListener('click', () =>{

    if(timer !== null) return;

    timer = setInterval(()=>{
        second++;

        if(second === 60){
            second = 0;
            minute++;    
        }

        if(minute === 60){
            minute = 0;
            hour++;
        }

        let h = String(hour).padStart(2,'0');
        let m = String(minute).padStart(2, '0');
        let s = String(second).padStart(2, '0');

        h1.innerText = `${h}:${m}:${s}`

    },1000)
})

stop.addEventListener('click', () => {
    clearInterval(timer);
    timer = null;
})

reset.addEventListener('click', () => {
    clearInterval(timer);
    timer = null
    hour = '00'
    minute = '00' 
    second = '00'
    h1.innerText = `${hour}:${minute}:${second}`
})