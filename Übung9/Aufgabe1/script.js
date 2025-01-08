let überschrift = document.querySelector('h1');
überschrift.style.fontStyle = 'italic';

let überschrift2 = document.querySelectorAll('h2');
for(let i=0; i<überschrift2.length; i++){
    überschrift2[i].textContent = 'Artikel ' + überschrift2[i].textContent ;
}