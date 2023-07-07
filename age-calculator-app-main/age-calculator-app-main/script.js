//çıktı elemanları 
const output_yil = document.querySelector(".output-yil");
const output_ay = document.querySelector(".output-ay");
const output_gun = document.querySelector(".output-gun");
const submit_btn = document.querySelector(".submit-btn");

//(input)giriş elemanları
let isValid = false;

const input_yil = document.querySelector("#year"); //id numarasına göre 
const input_ay = document.querySelector("#month");
const input_gun = document.querySelector("#day");

//Error elemanları
const error_gun = document.querySelector(".error-day");
const error_ay = document.querySelector(".error-month");
const error_yil = document.querySelector(".error-year");

submit_btn.addEventListener('click',GunHesaplama);

//gun için error kodu
input_gun.addEventListener("input", (e) =>{
    if(+input_gun.value > 31){ //gun 31 den büyükse hata mesajını ver
        error_gun.textContent = "Lütfen geçerli bir tarih girin";
        isValid = false;
        return;
    }
    else{
        isValid=true;
        error_gun.textContent= "";
    }
    if(+input_gun.value === 0){ //gün boş ise hata ver
        error_gun.textContent="bu alan zorunludur";
        isValid=false;
        return;

    }
    else{
        error_gun.textContent= "";
    }
});

//ay için error kodu
input_ay.addEventListener('input', (e)=>{
    if(+input_ay.value >12){ //ay 12 den buyukse hata mesajı ver
        error_ay.textContent = "Lütfen geçerli bir ay girin";
        isValid=false;
        return;
    }
    else{
        isValid=true;
        error_ay.textContent= "";
    }
    if(+input_gun.value === 0){ 
        error_ay.textContent="bu alan zorunludur";
        isValid=false;
        return;

    }
    else{
        error_ay.textContent= "";
    }
});

//yıl için error kodu
input_yil.addEventListener('input', (e)=>{
    if(+input_yil.value > 2023){ //2023 yılından buyuk yıl girildiyse hata ver
        error_yil.textContent = "Lütfen geçerli bir ay girin";
        isValid=false;
        return;
    }
    else{
        isValid=true;
        error_yil.textContent="";
    }
    if(+input_gun.value === 0){
        error_yil.textContent="bu alan zorunludur";
        isValid=false;
        return;

    }
    else{
        error_yil.textContent= "";
    }
});

//gonder butonu hesaplama fonksiyonu
function GunHesaplama(){
    if(isValid){
        let birthday = `${input_ay.value}/${input_gun.value}/${input_yil.value}`;
        console.log(birthday)
        let birthdayObj = new Date(birthday);
        let ageDiffMill= Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear()-1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDate() - 1;

        output_gun.textContent = ageDay;
        output_ay.textContent = ageMonth;
        output_yil.textContent = ageYears;
        
    }
    else{
        alert("Hata var!")
    }
}