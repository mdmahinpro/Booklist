// Element Selection
let title=document.querySelector('#title')
let author=document.querySelector('#author')
let year=document.querySelector('#year')
let addBtn=document.querySelector('.btn')
let bookList=document.querySelector('#book-list')

//Adding books
addBtn.addEventListener('click',function(e){
    e.preventDefault()
    if(title.value=='' && author.value=='' && year.value==''){
        alert('Please input atleast one field')
    }else{
        let newRow=document.createElement('tr')
        //Adding new elemnts
        let newTitle=document.createElement('th')
        newTitle.innerHTML=title.value
        newRow.appendChild(newTitle)

        let newAuthor=document.createElement('th')
        newAuthor.innerHTML=author.value
        newRow.appendChild(newAuthor)

        let newYear=document.createElement('th')
        newYear.innerHTML=year.value
        newRow.appendChild(newYear)

        //Adding row to booklist
        bookList.appendChild(newRow)
    }
})