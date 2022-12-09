const pnf = document.querySelector(".people-num-form");
const pnfinput = document.querySelector(".people-num-form input");
const paper = document.querySelector(".paper-num-form");
const paperinput = document.querySelector(".paper-num-form input");
const mainwindowh2 = document.querySelector(".main-window h2");
const mainwindowh3 = document.querySelector(".main-window h3");
const rdbtn = document.querySelector(".rd-btn button");
const person = document.querySelector(".person");
const message = document.querySelector(".ms");


let ymarr = []; //날짜 저장되는 배열임

pnf.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log(pnfinput.value);
    mes();
    mainwindowh2.innerHTML = `종이 : ${paperinput.value*pnfinput.value}`;
    mainwindowh3.innerHTML = `인원 수 : ${pnfinput.value} | 개인당 뽑을 수 : ${paperinput.value}`;
});

paper.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log(paperinput.value);
    mes();
    mainwindowh2.innerHTML = `종이 : ${paperinput.value*pnfinput.value}`;
    mainwindowh3.innerHTML = `인원 수 : ${pnfinput.value} | 개인당 뽑을 수 : ${paperinput.value}`;
});

rdbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(ymarr.length == paperinput.value*pnfinput.value){
        removeAllchild(person); 
        message.innerText = "";
        const before = document.querySelectorAll(".ymlist");
        before.forEach(v => v.remove());
        let randomarr = []
        // const random = Math.floor(Math.random() * paperinput.value*pnfinput.value)
        for(let j=0; j<pnfinput.value; j++){
            for(let i=0; i<paperinput.value; i++){
                const random = Math.floor(Math.random() * paperinput.value*pnfinput.value)
                if(randomarr.indexOf(random) === -1){
                    randomarr.push(random)
                } else{
                    i--
                }
            }
            // console.log(randomarr);
        }  
        for(let a=0; a<pnfinput.value; a++){
            const li = document.createElement("li");
            li.id = a;
            li.innerText = `${a+1} 번째 : `
            for(let b=0; b<paperinput.value; b++){
                let an = randomarr[paperinput.value*a+b];
                li.innerText += `[ ${ymarr[an]} ]`;
            }
            person.appendChild(li);
        }
        
    } else {
        mes();
    }
})

function removeAllchild(div) {
    while (div.hasChildNodes()) {
        div.removeChild(div.firstChild);
    }
}

function mes(){
    let sumvalue = paperinput.value*pnfinput.value;
    message.innerText = `✣ 선택 된 종이 : ${ymarr.length}개 ----- `;
    if(ymarr.length < sumvalue){
        message.innerText += ` ${sumvalue-ymarr.length}개 추가해주세요.`;
    } else {
        message.innerText += ` ${ymarr.length-sumvalue}개 지워주세요.`; 
    }
}
