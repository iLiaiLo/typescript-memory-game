function displayContent(elem:HTMLDivElement|null,arr:number[]):void{

    for(let i:number=0;i<9;i++){
        const cell:HTMLDivElement=document.createElement("div");
        cell.className="cell";
    
        const button:HTMLButtonElement=document.createElement("button");
        button.className="number-btn"
    
        cell.appendChild(button);
    
        elem?.appendChild(cell);
    }

    const shuffledArr:number[]=arr.sort(():number=>Math.random()-0.5);

    shuffledArr.forEach((num:number,ind:number)=>{
    const child:ChildNode=elem?.children[ind].firstChild!;
    child.textContent=`${num}`
    })
}

export default displayContent