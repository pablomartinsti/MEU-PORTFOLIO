const myObserver = new IntersectionObserver((entries) =>{
 
    entries.forEach ( (entry) =>{

        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
    })

})

const elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

let header = document.querySelector('.header')



function mostraMenu (){


    header.style.transform = "translateY(0%)";
    header.style.width =  "80%";
    header.style.height = "710px";
    
    
}
function escondermenu(){
    header.style.transform = "translateY(-110%)";
    header.style.width =  "100%";
    
    
    
    
}
