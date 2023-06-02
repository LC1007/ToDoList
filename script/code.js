    let btn = document.querySelector('#addBtn')
    let empty = ''
    btn.addEventListener('click', function(){
        let inputVal = document.querySelector('#todoInput').value 
        let para = document.createElement('p')
        let container = document.querySelector('.output')
            container.appendChild(para).innerHTML = inputVal
            inputVal = empty

         para.addEventListener('click', function(){
            para.style.textDecoration = "line-through"
         })

         para.addEventListener('dblclick', function(){
            container.removeChild(para)
         })
    })

