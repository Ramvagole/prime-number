let a=[]
let b=4
for (let i=1;i<10;i++){
  if(b%i==0){
    a.push(b)
  }
}
if(a.length==2){
  console.log("prime number")
}
else{
  console.log("is not prime number")
}