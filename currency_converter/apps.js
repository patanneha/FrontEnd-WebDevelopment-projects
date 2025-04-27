const BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_QJ5ukH5gSWywWadKzMo69pK2IaU45DUyK1PFMR2W&";


const dropdown = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

const msg = document.querySelector(".msg");

for(let select of dropdown){
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode ;
        select.append(newOption);
    }
select.addEventListener("change",(evt) => {
    updateFlag(evt.target);
});
}

const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if(amtVal === "" || amtVal < 1){
        amtVal = 1;
        amount.value = "1";
    }
    //console.log(fromCurr.value,toCurr.value);
    const URL = `${BASE_URL}base_currency=${fromCurr.value}&currencies=${toCurr.value}`;
    let  response = await fetch(URL);
    let data = await response.json();
    let dataCurr = data.data;
    let rate = dataCurr[toCurr.value];
    let finalAmount = amtVal * rate.value;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};


const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
    });

window.addEventListener("load" , () => {
    updateExchangeRate();
});

