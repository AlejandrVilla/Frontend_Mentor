const icon_div = document.querySelector('.icon_div');
const share_div = document.querySelector('.share_div');
const share_div2 = document.querySelector('.share_div2');
const container = document.querySelector('.container');

icon_div.addEventListener('click', toggleShare);

function toggleShare(){
    let w = container.offsetWidth
    if(w>350){
        const activo = share_div.hasAttribute('id', 'inactive');
        if (activo){
            share_div.removeAttribute('id','inactive');
        }
        else{
            share_div.setAttribute('id','inactive');
        }
    }
    else{
        const activo = share_div2.hasAttribute('id', 'inactive');
        if (activo){
            share_div2.removeAttribute('id','inactive');
        }
        else{
            share_div2.setAttribute('id','inactive');
        }
    }
}