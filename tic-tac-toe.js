//document.getElementsByTagName("div")[0].setAttribute("class", "square");

window.onload=()=>{
    let n = document.querySelectorAll("div#board div");
    let isX= true;

    //ex2
    i.addEventListener("userclick",()=>{
        if( game[n]=== 0 ){
            if(isX === true){
                i.classList.add("X")
                i.innerHTML= "X"
                isX=false;
                game[n]="X";


            }else{
                i.classList.add("O")
                i.innerHTML="O"
                isX=true;

                game[n]="O";
            }
        }

        //Ex3
        i.addEventListener("mouover",()=>{
            i.classList.add("hover")
        })

        i.addEventListener("mouleave",()=>{
            i.classList.remover("hover")
        })


        /*  console.log(game);

        let top=[game[0],game[1],game[2]];
        let mid=[game[3],game[4],game[5]];
        let low=[game[6],game[7],game[8]];

        let topVert=[game[0],game[3],game[6]]
        let midVert=[game[1],game[4],game[7]]
        let lowVert=[game[2],game[5],game[8]]

        let diag1=[game[0],game[4],game[8]]
        let diag2=[game[2],game[4],game[6]]
        //if([])

        let 
    }

}
*/