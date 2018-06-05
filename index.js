var katzDeli = []
var counter = 0;

function takeANumber(katzDeliLine){
  katzDeliLine.push(counter++);
  return `You are number ${counter}.`
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
