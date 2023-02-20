setInterval(()=>{
    d = new Date();
    hourt = d.getHours();
    mint = d.getMinutes();
    secd = d.getSeconds();
    hourAngl = 30*hourt+mint/2;
    minAngl = 6*mint;
    secAngl = 6*secd;

    hour.style.transform = `rotate(${hourAngl}deg)`
    min.style.transform = `rotate(${minAngl}deg)`
    sec.style.transform = `rotate(${secAngl}deg)`
},1000)