const form = document.querySelector (".form")


form.addEventListener("submit", function(event){
   event.preventDefault()

   const table = document.createElement('table')
   table.classList.add("table", "table-striped", "mt-4")
   
       table.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th>Название</th>
                <th>Описание</th>
                <th>Приоритет</th>
            </tr>
        </thead>
        <tbody></tbody>
    `
    document.body.appendChild(table)

    const title = document.querySelector("#inputTitle3").value
    const description = document.querySelector("#inputdesc3").value
    const priority = form.querySelector("input[name=gridRadios]:checked").nextElementSibling.innerText

    if(!title){
        alert ("Введите название задачи!!!!")
    }
    if(!description){
        alert ("Введите описание задачи!!!!")
    }
    const tbody = table.querySelector('tbody')
    const row = document.createElement('tr')

    row.innerHTML = `
        <td>1</td> 
        <td>${title}</td>
        <td>${description}</td>
        <td>${priority}</td>
            
    `
    tbody.appendChild(row)


    form.reset() //ВНИЗУ
})