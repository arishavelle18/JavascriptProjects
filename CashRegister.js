const Currency = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
};

function checkCashRegister(price, cash, cid) {
  let sukli = Math.round(cash * 100) - Math.round(price * 100);
  let change = {status:null,change:[] };
  let checking = sukli;
  let filterCid = cid.reverse().filter(item=>sukli >=Currency[item[0]] && item[1] !==0);
  let sum =0;
  filterCid.map(item =>{
    let current = item[0];
    let currentVal = Math.round(item[1] * 100);
    sum +=currentVal;
    let amount = 0;
    
    while(sukli>=Currency[current] && currentVal > 0){
      sukli-=Currency[current];
      currentVal-=Currency[current];
      amount+=Currency[current];
    }
    if(amount!==0)
      change["change"].push([current,amount/100]);
    
  })
  

  if(sukli>0){
    change['status'] = 'INSUFFICIENT_FUNDS';
    change['change']=[];
  }
  else if(sukli === 0 && sum === checking){
    change['status'] = 'CLOSED';
    change['change']=cid.reverse();
  }
  else{
    change['status'] = 'OPEN';
    
  }

  return change;


}
let cid =[
  ["PENNY", 0.5], 
  ["NICKEL", 0], 
  ["DIME", 0], 
  ["QUARTER", 0], 
  ["ONE", 0], 
  ["FIVE", 0], 
  ["TEN", 0], 
  ["TWENTY", 0], 
  ["ONE HUNDRED", 0]
];
console.log(checkCashRegister(19.5, 20,cid));
