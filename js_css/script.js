/*
fonction qui sert à remplacer les cookies et le chemin de la page actuel quand le bouton de
changement de langue est appuyé.
*/
function toggle(lang) {
    document.cookie = `lang=${lang};path=/`;
    window.location.replace(`../${lang}/index.html`);
}


// fonction appelé quand l'utilisateur scroll dans la page
window.addEventListener('scroll',(event) => {
    
    // version compatible avec tout les navigateurs
    let min_max = [0, Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight )];
    // ajuster le max
    min_max = [min_max[0], min_max[1]*0.5];
    
    let percentage;
    let scrolling = window.scrollY;

    
    // si on est en dessous du min
    if (scrolling <= min_max[0]){
        percentage = 0;
    }
    // si on est au dessus du max
    else if (scrolling >= min_max[1]){
        percentage = 100;
    }
    // si on est entre le min et le max
    else{
        percentage = Math.round((scrolling - min_max[0])/(min_max[1] - min_max[0]) * 100);
    }

    // ne trouve l'id que si l'utilisateur est sur la bonne page
    if (document.getElementById("myBar") != null){
        document.getElementById("myBar").style.width = `${percentage}%`;
    }
});