// Code your solution here

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce((total, current)=>{
  return total + current
},0)
// console.log(totalBatteries);
