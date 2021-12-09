// Constants
const asidenavbar = document.querySelector('.dKogfI');
const toggleasidebtn = document.querySelector('.eCxtrN');
const loader = document.querySelector('#Loader');
const homepage = document.querySelector('.homepage');



document.addEventListener("DOMContentLoaded",function(){
    let h = window.innerHeight;
    let w = window.innerWidth;
    setTimeout(() => {
        loader.classList.add('d-none');
        homepage.classList.remove('d-none');
    }, 300);
    // if(w<768){
    //     asidebarnav.classList.remove('dKogfI');
    //     asidebarnav.classList.add('dSbVSd');
    // }
    // else{
    //     asidebarnav.classList.add('dKogfI');
    //     asidebarnav.classList.remove('dSbVSd');
    // }

    toggleasidebtn.addEventListener("click",()=>{
        asidenavbar.classList.toggle('dKogfI');
        asidenavbar.classList.toggle('dSbVSd');
        toggleasidebtn.classList.toggle('eVRjg');
        toggleasidebtn.classList.toggle('eCxtrN');
    });
});