const form = document.querySelector (".form")
// let counter = 1



   const table = document.createElement('table')
   table.classList.add("table", "table-striped", "mt-4")
   
       table.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Приоритет</th>
                <th>удалить</i></th>
            </tr>
        </thead>
        <tbody></tbody>
    `

form.addEventListener("submit", function(event){
   event.preventDefault()

    

    document.body.appendChild(table)

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
})