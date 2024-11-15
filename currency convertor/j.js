const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};




const BASE_URL = "https://v6.exchangerate-api.com/v6/989548c5c22e6c392a8c98a6/latest";

let dropdowns = document.querySelectorAll(".dropdown select");
let btn = document.querySelector(".btn");
let amnt = document.querySelector(".amnt input");
let fromCurr = document.querySelector(".from select");
let toCurr = document.querySelector(".to select");
let result=document.querySelector(".result");



for (p of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    p.append(newOption);
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (p.name === "to" && currCode === "INR") {
      newOption.selected = "selected";
    }
    else if (p.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    }
  }

  p.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });

}

function updateFlag(element) {
  let currCode = element.value;
  let flagCode = countryList[currCode];
  let img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${flagCode}/shiny/64.png`;
}



let exchangeRate=async()=>{
  let amtValue = amnt.value;
  console.log(amtValue);
  const url = `${BASE_URL}/${fromCurr.value}`;
  console.log(url);
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  let cal = amtValue * data.conversion_rates[toCurr.value];
  console.log(cal);
  console.log(fromCurr.value);
  result.innerText=`${amtValue} ${fromCurr.value} = ${cal} ${toCurr.value}`;
}





let mode=document.querySelector(".mode");
let span=document.querySelector(".material-symbols-outlined");
let dropp=document.querySelector(".dropdown");
let main=document.querySelector("main");
mode.addEventListener("click",()=>{
  if(span.innerText==="dark_mode"){
    span.innerText="light_mode";
    main.style.backgroundColor="rgb(89, 89, 89)"
    dropp.style.backgroundColor="rgb(69, 69, 69)";
    dropp.style.border="solid rgb(144, 143, 143) 2px";
    document.body.style.color="white";

  }
  else{
    span.innerText="dark_mode";
    main.style.backgroundColor="rgb(220, 220, 220)"
    dropp.style.backgroundColor="rgb(207, 206, 206)";
    dropp.style.border="solid rgb(170, 163, 163) 2px";
    document.body.style.color="dark";
    document.body.style.color="black";

  }
  
})



btn.addEventListener("click", (evt) => {
  evt.preventDefault();
exchangeRate();

})

window.addEventListener("load",(evt)=>{
   evt.preventDefault();
  exchangeRate();
})





