var Lucas = ["Lucas","Carlos","Luan",'SEILA','AMANDA','BRUNA'];

/*Lucas.forEach((idx,lucas,maisum)=>{
    console.log(idx,lucas,maisum);
})*/
        //

/*Lucas.map((idx,lucas,maisum)=>{
    console.log(idx,lucas,maisum);
})*/


        //Lucas[0].split("") Corta e separa Letra por Letra do indice do array que foi selecionado.
console.log(Lucas[0].split(""))






const labels = document.querySelectorAll(".form-control label")

/*labels.forEach((label) =>{
    label.innerHTML = label.innerText
    .split("")
    .map((letter,idx) =>`<span style="transition-delay: ${idx * 50}ms ">${letter}</span>`)
    .join("");
    

});*/

function paraCadaLabel(label,index){
    const letras = label.innerText.split('')
    label.innerHTML = "";

    function paraCadaLetra(letra,index){
        label.innerHTML +=`<span style="transition-delay:${index * 50}ms">${letra}</span>`
    }
     
    letras.forEach(paraCadaLetra) 
}


labels.forEach(paraCadaLabel)

/*for(const label of labels)
    label.innerHTML = [...label.innerText]
        .map((l, i) => `<span style="transition-delay:${i * 50}ms">${l}</span>`).join('');*/








