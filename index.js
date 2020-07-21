function writeCards(x,y){
  let counter=0;
  const message=[];
  for(let i=0; i<x.length;i++){
    counter++;
    message.push("Thank you, " + x[i]+", for the wonderful surprise gift!");
  }
  return message;
}
