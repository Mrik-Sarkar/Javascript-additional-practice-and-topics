let n=prompt("Enter the number of elements you want to add:");
let a=[];

for(let i=1;i<=n;i++){
    if(i==1){

        let e1=prompt(`Enter the ${i}st element:`);
        a.push(e1);
    }
    else if(i==2){
        let e2=prompt(`Enter the ${i}nd element:`);
        a.push(e2);
    }
    else if(i==3){
        let e3=prompt(`Enter the ${i}rd element:`);
        a.push(e3);
    }
    else{
        let en=prompt(`Enter the ${i}th element:`);
        a.push(en);
    }
   
}
alert("The data collection has been created! Check console to view ;)")
console.log(`The data collection is ${a}`)
