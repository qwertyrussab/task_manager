const form = document.querySelector (".form")
// let counter = 1
const containerTable = document.querySelector('.container-table')

const scroll_to_form = document.querySelector('#scrolltoform')


window.addEventListener('scroll', function(){
    const formPosition = form.getBoundingClientRect()
    if(formPosition.bottom < 0){
        scroll_to_form.style.display = 'block'
        
    }
    else{
        scroll_to_form.style.display = 'none'
    }
})

   const table = document.createElement('table')
   table.classList.add("table", "table-striped", "mt-4")
   
       table.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Приоритет</th>
                <th>Удалить</th>
                <th>Статус</th>
            </tr>
        </thead>
        <tbody></tbody>
    `

form.addEventListener("submit", function(event){
   event.preventDefault()

    

    containerTable.appendChild(table)

    const title = document.querySelector("#inputTitle3").value
    const description = document.querySelector("#inputdesc3").value
    const priority = form.querySelector("input[name=gridRadios]:checked").nextElementSibling.innerText

    const tbody = table.querySelector('tbody')
    const row = document.createElement('tr')

    row.innerHTML = `
        <td></td> 
        <td>${title}</td>
        <td>${description}</td>
        <td>${priority}</td>
        <td><button class="delete"><i class="fa-solid fa-trash-can"></button></td>
        <td><input class="checked" type="checkbox"></td>
            
    `
    tbody.appendChild(row)

    function updateNumbers(){
        const rows = tbody.querySelectorAll('tr')
        rows.forEach((row,index)=>{
            row.querySelector('td').innerText = index + 1
        })
    }

    row.querySelector('.delete').addEventListener('click', function(){
        row.remove()
        updateNumbers()
    })



    updateNumbers()

    form.reset() //ВНИЗУ

    const checkbox = row.querySelector(".checked")

    checkbox.addEventListener("change", function(){

        if(checkbox.checked){
            row.classList.add("complete")

        }
        else{
            row.classList.remove("complete")
        }

    })

})

scroll_to_form.addEventListener('click', function(){
    form.scrollIntoView({behavior: 'smooth'})

})