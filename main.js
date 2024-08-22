let arttirma = document.querySelector("#arttirma");
let sayiSonuc = 0;

arttirma.addEventListener("click", function(){
document.querySelector("#sayiDeger").innerHTML = 
sayiSonuc+=1;
if(sayiSonuc  >=5){sayiSonuc = 0;}
});