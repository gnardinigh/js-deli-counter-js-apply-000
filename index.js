var katzDeli = []

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  return `Welcome, ${name]}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
    return `There is nobody waiting to be served!`
  }
  else{
    var nextUp = katzDeliLine[0];
    katzDeliLine.shift();
    return `Currently serving ${nextUp}.`;
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
