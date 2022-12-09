const pnf = document.querySelector(".people-num-form");
const pnfinput = document.querySelector(".people-num-form input");
const df = document.querySelector(".date-form");
const dfinput = document.querySelector(".date-form input");
const paper = document.querySelector(".paper-num-form");
const paperinput = document.querySelector(".paper-num-form input");
const mainwindowh2 = document.querySelector(".main-window h2");
const mainwindowh3 = document.querySelector(".main-window h3");
const rdbtn = document.querySelector(".rd-btn button");
const person = document.querySelector(".person");

pnf.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(pnfinput.value);
    mainwindowh2.innerHTML = `제비 갯수 : ${paperinput.value*pnfinput.value}`;
    mainwindowh3.innerHTML = `인원 수 : ${pnfinput.value} | 개인당 뽑을 수 : ${paperinput.value}`;
});



const week = ['일', '월', '화', '수', '목', '금', '토'];

df.addEventListener("submit", (e)=>{
    e.preventDefault();
    const day = new Date(dfinput.value).getDay();
    console.log(`${dfinput.value} ${week[day]}`);
    console.log(new Date(dfinput.value).setDate(1));
});


paper.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(paperinput.value);
    mainwindowh2.innerHTML = `제비 갯수 : ${paperinput.value*pnfinput.value}`;
    mainwindowh3.innerHTML = `인원 수 : ${pnfinput.value} | 개인당 뽑을 수 : ${paperinput.value}`;
});

rdbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    removeAllchild(person);
    let randomarr = []
    // const random = Math.floor(Math.random() * paperinput.value*pnfinput.value)
    for(let j=0; j<pnfinput.value; j++){
        for(let i=0; i<paperinput.value; i++){
            const random = Math.floor(Math.random() * paperinput.value*pnfinput.value)
            if(randomarr.indexOf(random) === -1){
                randomarr.push(random)
                console.log(1);
            } else{
                i--
            }
        }
        console.log(randomarr);
    }  
    for(let a=0; a<pnfinput.value; a++){
        const li = document.createElement("li");
        li.id = a;
        li.innerText = `${a+1} 번째 : `
        for(let b=0; b<paperinput.value; b++){
            li.innerText += `[ ${randomarr[paperinput.value*a+b]+1} ]`;
        }
        person.appendChild(li);
    }
})

function removeAllchild(div) {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}