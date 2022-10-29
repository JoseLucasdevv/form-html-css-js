const img = document.querySelectorAll('.img')
const input = document.querySelectorAll('.form-control .input')
const btn = document.querySelector(".btn")
const labels = document.querySelectorAll(".form-control label")


input.forEach((inputs)=>{
    if(inputs.value === ''){
        img.forEach(index=>{
            index.style.display = 'none';
        });
    }
})

btn.addEventListener('click',()=>{
    input.forEach((inputs)=>{
        if(inputs.value === ''){
            img.forEach((item)=>{
                item.style.display = 'block'
                item.removeAttribute('src')
                item.setAttribute('src','./assets/img/remove.png')
                })
        }else{
            img.forEach((item)=>{
                item.style.display = 'block'
                item.removeAttribute('src')
                item.setAttribute('src','./assets/img/check.png')
             })
            }
        })
})

labels.forEach((label) =>{
    label.innerHTML = label.innerText
    .split("")
    // .map(Primeiro Parãmetro é o item , segundo Paramêtro é o indice.)
    .map((letter,idx) =>`<span style="transition-delay: ${idx * 50}ms ">${letter}</span>`)
    .join("");
});

// function paraCadaLabel(label,index){
//     const letras = label.innerText.split('')
//     label.innerHTML = "";

//     function paraCadaLetra(letra,index){
//         label.innerHTML +=`<span style="transition-delay:${index * 50}ms">${letra}</span>`
//     }
     
//     letras.forEach(paraCadaLetra) 
// }

// labels.forEach(paraCadaLabel)

/*for(const label of labels)
    label.innerHTML = [...label.innerText]
        .map((l, i) => `<span style="transition-delay:${i * 50}ms">${l}</span>`).join('');*/








