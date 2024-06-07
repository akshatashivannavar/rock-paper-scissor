let num1=0;
let num2=0;

const choices=document.querySelectorAll("#choice");
const user0=document.querySelector(".num1");
const user1=document.querySelector(".num2");
const msg=document.querySelector(".msg");
//comp choice ny creating a function
const gencompchoice=()=>{
const Option=["rock","paper","scissor"];
let randidx=Math.floor(Math.random()*3);
return Option[randidx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText="GAME WAS DRAW.PLAY AGAIN";
    last.style.backgroundColor="#001C30 ";
};



const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        num1++;
        user0.innerText=num1;
        console.log("YOU WIN");
        msg.innerText=`YOU WIN! Your ${compchoice} beats ${userchoice}`;
        last.style.backgroundColor="green";
    }else{
        num2++;
        user1.innerText=num2;
        console.log("YOU LOOSE");
        msg.innerText=`YOU LOOSE. ${userchoice} beats ur ${compchoice}`;
        last.style.backgroundColor="red";
    }
}
//our choice (created a functn)
const playgame=(userchoice) => {
    console.log("user choice =",userchoice);
    //com choice
    const compchoice=gencompchoice();
console.log("computer choice=",compchoice);

if(userchoice === compchoice) {
                   drawGame(); 
}else{
    let userwin=true;
    if(userchoice==="rock"){
                  userwin= compchoice==="paper" ? false:true;

    }else if(userchoice==="paper"){
                  userwin= compchoice==="scissor"? false:true;

    }else{
                  userwin= compchoice==="rock"?false:true;
    } 
    showwinner(userwin,compchoice,userchoice);
}
};


choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    let userchoice=choice.getAttribute("class")
    playgame(userchoice);
    });
});