

//main
const Calendar = {
    init() {
        const today = new Date();
        Calendar.showDate(today.getFullYear(), today.getMonth()+1);

        Calendar.year = today.getFullYear();
        Calendar.month = today.getMonth()+1;

        Calendar.eventhandle();
    },

    eventhandle(){
        document.querySelectorAll(".date")
            .forEach(elem=> {
                elem.onclick = function(){
                    const day = this.innerText;
                    if(this.id != "click"){
                        this.id = "click";
                        ymarr.push(`${Calendar.month}월${day}일`);
                        mes();
                        Calendar.callist.innerHTML += `
                            <div class="ymlist">
                                <p>${Calendar.month}월${day}일</p>
                            </div>
                        `
                    } else if(this.id == "click"){
                        const num = ymarr.indexOf(`${Calendar.month}월${day}일`);
                        ymarr.splice(num,1);
                        // console.log(`${Calendar.month}월${day}일`);
                        this.id="";
                        Calendar.callist.innerHTML ="";
                        for(let c=0; c<ymarr.length; c++){
                            Calendar.callist.innerHTML += `
                            <div class="ymlist">
                                <p>${ymarr[c]}</p>
                            </div>
                        ` 
                        }
                        mes();
                    }
                }
            });
    },

    showDate(y, m){
        const before = document.querySelectorAll(".date");
        before.forEach(v => v.remove());
        for(let i = -Calendar.getFirstDay(y, m)+1; i<= Calendar.getLastDate(y, m); i++){
            Calendar.cal.innerHTML += `
                <div class="date ${i<1 ? "hidden-date" : ""}">
                    <p>${i}</p>
                </div>
            `
        }
        // console.log(Calendar.getLastDate(y, m));
        Calendar.eventhandle();
    },

    getFirstDay(y, m){
        const date = new Date(`${y}-${m}-1`);
        return date.getDay();
    },

    getLastDate(y, m){
        const date = new Date(y, m, 0);
        return date.getDate();
    },

    addMonth(m){
        const date = new Date(
            Calendar.year, Calendar.month + m -1, 1
        );
        Calendar.year = date.getFullYear();
        Calendar.month = date.getMonth()+1;

        Calendar.showDate(Calendar.year, Calendar.month);
        Calendar.caltitle.innerHTML =`${Calendar.year}. ${Calendar.month}.`;
    }
}

