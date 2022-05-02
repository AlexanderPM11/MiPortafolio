const btnBar=document.querySelector(".btn_Set");
btnBar.addEventListener("click",()=>{
    const contUl=document.querySelector(".contUl");
    let elementStyle = window.getComputedStyle(contUl);
    let elementDisplay = elementStyle.getPropertyValue('display');

    if(elementDisplay=="flex"){
        contUl.style.display="none";
       
      
    }
    else{
        contUl.style.display="flex";
       
    }
});

function showM( modal) {
    $(modal).modal("show");
}

const card=document.querySelector(".img1");
    card.addEventListener("click",()=>{
        showM("#EjemploModal1");
    });

const card2=document.querySelector(".img2");
card2.addEventListener("click",()=>{
    showM("#EjemploModal2");
});
const card3=document.querySelector(".img3");
card3.addEventListener("click",()=>{
    showM("#EjemploModal3");
   
});
function closeModal(modal_close){
    $(modal_close). modal('hide') 
}
const ultCont=document.querySelector(".contUl");
onresize=function() { 
        const ancho_Screen=screen.width;
        if(ancho_Screen>=899){
            ultCont.style.display="flex";
            
        }
        
    };
    

const all_li=document.querySelectorAll("li");
all_li.forEach(li=>{
    li.addEventListener("click",()=>{
        const ContbtBar=document.querySelector(".ContbtBar");
        let elementStyle = window.getComputedStyle(ContbtBar);
        let Display = elementStyle.getPropertyValue('display');
        if(Display=="flex"){
            ultCont.style.display="none";
        }
        
    });
    

});