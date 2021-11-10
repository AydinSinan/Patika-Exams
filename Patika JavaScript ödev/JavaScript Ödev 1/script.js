var name = prompt("Adınız:")
document.querySelector("#myName").innerHTML = name
let info = document.querySelector("#variable")
isim
const smile = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
</svg>`
function digitalSaat(){
    var dt = new Date();    
    var saat = dt.getHours();
    var dakika = dt.getMinutes();
    var saniye = dt.getSeconds();
    var gün =dt.getDay()

    var Time;
    Time=setInterval(`digitalSaat()`,1000)

    var time=`${saat}//${dakika}//${saniye}/Haftanın ${gün}.Günü`
    document.getElementById("variable").innerHTML=time
}    