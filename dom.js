alert("Hii Bimal kumar Ladddu 😁😁😊🙋‍♀️🙋‍♂️");
console.log("This is Document Object Model");

let arrDivs=[];
for(let i=0;i<16;i++){
    arrDivs[i]= document.getElementById(`view${i+1}`);
}
// declaring the array for colors of divs 
const arrColor=["yellow","green","blue","red","ruby","purple","gray","pink","orange","papayagreen","voilet"];
for(let i=0;i<17;i++){
    arrDivs[i].addEventListener("click",function(){
        if(this){
            const randomIndex=Math.ceil(Math.random()*arrColor.length);
            arrDivs[i].style.backgroundColor=arrColor[randomIndex];
            console.log("click on "+arrDivs[i]);
        }
        else{
            console.log("Pata nahi Null return kar raha hai");
        }
    })
}
console.log("pata nahi Loop se bahar aa gaya ?");






