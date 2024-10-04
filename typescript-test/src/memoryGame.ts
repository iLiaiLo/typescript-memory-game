import displayContent from "./displayContent";

const frame:HTMLDivElement=document.querySelector(".frame")!;
const start:HTMLButtonElement=document.querySelector(".start")!;
const result:HTMLParagraphElement=document.querySelector(".result")!;
const playAgain:HTMLButtonElement=document.querySelector(".play-again")!;

const NumbersArray:number[]=Array.from({length:9},(_,index)=>index+1);
let counter:number=0;
let starter:boolean=false;


displayContent(frame,NumbersArray)


start.addEventListener("click",(e:MouseEvent):void=>{
 
    (e.target as HTMLButtonElement).disabled=true;
    
    for(let i=0;i<frame?.children.length;i++){
        (frame.children[i].firstChild as HTMLButtonElement).style.display="inline-block";
    }
    
    
    setTimeout(()=>{
        starter=true;
        for(let i=0;i<frame?.children.length;i++){
            (frame.children[i].firstChild as HTMLButtonElement).style.display="none";
        }
    },5000)

})


frame.addEventListener("click",(e:MouseEvent):void=>{
    if(!starter) return;
        
    if(e.target && (e.target as HTMLDivElement).className==="cell"){
        
        counter++;

        if((e.target as HTMLButtonElement).firstChild?.textContent!== `${counter}`){
            
            for(let i:number=0;i<frame?.children.length;i++){

                (frame.children[i].firstChild as HTMLButtonElement).style.display="inline-block";

                if(frame.children[i].firstChild?.textContent===`${counter}`){
                    (frame.children[i].firstChild as HTMLButtonElement).style.backgroundColor="lightgreen"
                }
            }
            
            ((e.target as HTMLDivElement).firstChild as HTMLButtonElement).style.backgroundColor="tomato";

            playAgain.style.display="inline-block"
            starter=false;
            return
        }

        const elem:ChildNode|null=(e.target as HTMLDivElement).firstChild;
        (elem as HTMLButtonElement).style.display="inline-block"
        

        if(counter===9){

            result.textContent="Success!"
            for(let i:number=0;i<frame?.children.length;i++){
                (frame.children[i].firstChild as HTMLButtonElement).style.backgroundColor="lightgreen"
            }

            playAgain.style.display="inline-block"
        }
    }

})

playAgain.addEventListener("click",():void=>window.location.reload())