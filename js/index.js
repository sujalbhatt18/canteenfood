document.querySelector('.cross').style.display = "none"

document.querySelector('.fa-bars-cross').addEventListener("click" , ()=>{
    document.querySelector('.container-1').classList.toggle('nav-go')

    if(document.querySelector('.container-1').classList.contains('nav-go')){
        document.querySelector('.fa-bars').style.display = "inline"
        document.querySelector('.cross').style.display = "none"
    }else{
        document.querySelector('.fa-bars').style.display = "none"
        setTimeout(() => {
            document.querySelector('.cross').style.display = "inline"
        }, 300);
    }
})

