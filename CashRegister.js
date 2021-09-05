const Currency = {      // create  the cash converter
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
  let sukli = Math.round(cash * 100) - Math.round(price * 100); // get the subtract of  cash and price and must be times in 100 to prevent decimals
  let change = {status:null,change:[] };    
  let checking = sukli;
  let filterCid = cid.reverse().filter(item=>sukli >=Currency[item[0]] && item[1] !==0); // cid must be reverse and filter if higher and greater than sukli
  let sum =0;
  filterCid.map(item =>{ // map each element of filterCid
    let current = item[0];      // get the current name of cash
    let currentVal = Math.round(item[1] * 100); // get the value of the current name of cash and time to 100 to prevent decimal
    sum +=currentVal;
    let amount = 0;
    
    while(sukli>=Currency[current] && currentVal > 0){  // check if the sukli is greater than the currency and it must be not lessthan 0 
      sukli-=Currency[current];       //subtract the sukli/change
      currentVal-=Currency[current];  //subtract the value inside the cid
      amount+=Currency[current];      // add the amount to change
    }
    if(amount!==0)                    // if amount  not equal to zero push the current and its value this will execute per iterate
      change["change"].push([current,amount/100]);
    
  })
  

  if(sukli>0){    // if sukli is greater than 0 meaning the cid is insufficient
    change['status'] = 'INSUFFICIENT_FUNDS';
    change['change']=[];
  }
  else if(sukli === 0 && sum === checking){   // if sukli is equal to zero and sum is equal to checking meaning cid is has no cash left 
    change['status'] = 'CLOSED';
    change['change']=cid.reverse();
  }
  else{                    // this will come true meaning cid must have cash left
    change['status'] = 'OPEN';
    
  }

  return change;


}
let cid =[        //  insert all the cash in drawer in the array
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
