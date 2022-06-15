import express from 'express'

const server = express();

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "3/1/2022", name: "Carnaval" },
    { date: "4/17/2022", name: "Páscoa" },
    { date: "4/21/2022", name: "Tiradentes" },
    { date: "5/1/2022", name: "Dia do trabalho" },
    { date: "6/16/2022", name: "Corpus Christi" },
    { date: "9/7/2022", name: "Independência do Brasil" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
    { date: "11/2/2022", name: "Finados" },
    { date: "11/15/2022", name: "Proclamação da República" },
    { date: "12/25/2022", name: "Natal" }
];

server.get("/holidays", (req, res)=>{
    res.send(holidays)
})

server.get("/is-today-holiday", (req, res)=>{
    const today = new Date().toLocaleDateString("en-US");
    let isHoliday = false;
    let holidayName = "";

    for(let i=0; i<holidays.length; i++){
        if(holidays[i].date === today){
           isHoliday = true;
           holidayName = holidays[i].name
        }
    }

    if(isHoliday){
        res.send(`Sim, hoje é ${holidayName}`)
    }else {
        res.send("Não, hoje não é feriado")
    } 
})

server.get("/holidays/:month",(req, res)=>{
    const id = req.params.month + "/";
    const holidaysMonth = []
    for(let i=0; i<holidays.length; i++){

        if(holidays[i].date.indexOf(id) < 1 && holidays[i].date.indexOf(id) !== -1){
           holidaysMonth.push(holidays[i])
        }
    }
    res.send(holidaysMonth)
})

server.listen(4000);
