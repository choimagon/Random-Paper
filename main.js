const pnf = document.querySelector(".people-num-form");
const pnfinput = document.querySelector(".people-num-form input");
const paper = document.querySelector(".paper-num-form");
const paperinput = document.querySelector(".paper-num-form input");
const mainwindowh2 = document.querySelector(".main-window h2");
const mainwindowh3 = document.querySelector(".main-window h3");
const rdbtn = document.querySelector(".rd-btn button");
const person = document.querySelector(".person");
const message = document.querySelector(".ms");

const pnamef = document.querySelector(".people-name-form");
const pnamefinput = document.querySelector(".people-name-form input");
const namemessage = document.querySelector(".ms-name");



let ymarr = []; //날짜 저장되는 배열임
let namearr = [];

pnamef.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(pnamefinput.value);
    if(pnamefinput.value == ""){
    } else {
        namearr.push(pnamefinput.value);
    }
    namemessage.innerText = `총 ${namearr.length}명 (${namearr})`;
    pnamefinput.value = "";
})

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
    if(ymarr.length == paperinput.value*pnfinput.value && pnfinput.value == namearr.length){
        removeAllchild(person); 
        message.innerText = "";
        const before = document.querySelectorAll(".ymlist");
        before.forEach(v => v.remove());
        let randomarr = []
        let randomnamearr = []
        // const random = Math.floor(Math.random() * paperinput.value*pnfinput.value)
        //랜덤 날짜
        for(let j=0; j<pnfinput.value; j++){
            for(let i=0; i<paperinput.value; i++){
                const random = Math.floor(Math.random() * paperinput.value*pnfinput.value)
                if(randomarr.indexOf(random) === -1){
                    randomarr.push(random)
                } else{
                    i--
                }
            }
        }  
        // console.log("날짜");
        // console.log(randomarr);
        //랜덤 이름 (이름 갯수만 만큼 랜덤임)
        for(let j=0; j<pnfinput.value; j++){
            const randomname = Math.floor(Math.random() * pnfinput.value)
            if(randomnamearr.indexOf(randomname) === -1){
                randomnamearr.push(randomname)
            } else{
                j--
            }
        }  
        // console.log("이름");
        // console.log(randomnamearr);

        for(let a=0; a<pnfinput.value; a++){
            const li = document.createElement("li");
            li.id = a;
            let rd = randomnamearr[a];
            li.innerText = `${namearr[rd]} : `
            for(let b=0; b<paperinput.value; b++){
                let an = randomarr[paperinput.value*a+b];
                li.innerText += `[ ${ymarr[an]} ]`;
            }
            person.appendChild(li);
        }

        namemessage.innerText = `총 ${namearr.length}명 (${namearr})`;

        
    } else {
        mes();
        namemessage.innerText = `총 ${namearr.length}명 (${namearr}) !! 사람 인원 및 날짜 선택 갯수 확인 !!`;

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
