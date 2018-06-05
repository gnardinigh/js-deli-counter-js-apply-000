var katzDeli = []

function takeANumber(katzDeliLine){
  var counter = 0
  if(katzDeliLine.length===0){
    katzDeliLine[0] = 1
    return `Welcome, you are number 1`
  }
  else{
  var lineSpot = katzDeliLine.length+1;
  katzDeliLine[katzDeliLine.length] = katzDeliLine.length+1;
  return `Welcome, you are number ${lineSpot}`;
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return `There is nobody waiting to be served!`
  }
  else{
    var nextUp = katzDeliLine.shift();
    return `Currently serving number ${nextUp}.`;
  }
}

function currentLine(katzDeliLine){
  if (katzDeliLine.length===0){
    return`The line is currently empty.`
  }
  else{
    var currentLine = "The line is currently: "
    for(var i=0;i<katzDeliLine.length;i++){
      if(i<katzDeliLine.length-1){
      currentLine += `${i+1}. ${katzDeliLine[i]}, `;
      }
      else{
        currentLine +=`${i+1}. ${katzDeliLine[i]}`;
      }
    }
    return currentLine;
  }
}
