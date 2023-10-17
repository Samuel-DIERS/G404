const onglets=document.querySelectorAll('.onglet')
const contenu=document.querySelectorAll('.contenu')
let index = 0
console.log(onglets);
console.log(contenu);
onglets.forEach(onglet => 
    onglet.addEventListener('click',() =>{
        if(onglet.classList.contains('oActive')){
           return
        }
        else{
            onglet.classList.add('oActive')
        }
        index=onglet.getAttribute('data-anim')
        console.log('index',index,onglet);
        for(i=0; i < onglets.length; i++){
            console.log("fr1");
            if(onglets[i].getAttribute('data-anim') !=index){
                onglets[i].classList.remove('oActive')
                console.log("onglet retiré !");
            }
        }
        for(i=0; i < contenu.length; i++){
            console.log("fr2");

            if(contenu[i].getAttribute('data-anim') == index){
                contenu[i].classList.add('activeContenu')
            }
            else{contenu[i].classList.remove('activeContenu')}
        }
        }))