console.log('EcmaScript version 6')
let books_records;
let book;
class Book{
    constructor(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}
}
class Display{
     
    // add(){
    //         books_records = JSON.parse(localStorage.getItem('books'))
    //         if(books_records){
    //             let tableBody = document.getElementById('tableBody');
    //             books_records.forEach(function(book){

            
    //             let uiString = `<tr>
    //                             <td>${book.name}</td>
    //                             <td>${book.author}</td>
    //                             <td>${book.type}</td>
    //                         </tr>`;
    //         tableBody.innerHTML += uiString
    //         console.log('book has been added')
    //     })

    //          }
               
    //         }
        
       
    clear(){
        let libraryForm = document.getElementById("libraryForm");
            libraryForm.reset();
        }
    validate(book){
        if(book.name.length < 2 && book.author.length<2 || book.name.value === "" && book.author.value === ""){
            return false
        } else{
            return true
        }
    }
   
    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText;
        if(type === 'success'){
             boldText = "success"
        }else{
            boldText = 'Error'
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>${boldText}:</strong> ${displayMessage}
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                </button>
                            </div>`;
        setTimeout(function () {
            message.innerHTML = ''
        }, 2000);
    
    }
}
function add(){
    books_records = JSON.parse(localStorage.getItem('books'))
    if(books_records){
        books_records = JSON.parse(localStorage.getItem('books'))
        let tableBody = document.getElementById('tableBody');
        books_records.forEach(function(book,id){

    
        let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                        <td> <div class="col-2" id=${id} onClick="deleteBook(this.id)">
                        <button type="submit" class="btn btn-primary">Delete</button>
                    </div></td>
                    </tr>
                  `;
    tableBody.innerHTML += uiString
    console.log('book has been added')
})

     }
       
    }

function deleteBook(id){
        console.log("perfectly it deleted", id)
        books_records = JSON.parse(localStorage.getItem('books'))
        books_records.splice(id,1)
    localStorage.setItem("books", JSON.stringify(books_records))
//    add()
    }

let display = new Display();
// add submit event listner to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);
function libraryFormSubmit(e){
    // e.preventDefault()

    // tableBody=localStorage.getItem('tableBody')
    // localStorage.setItem("tableBody")
    let name = document.getElementById('bookName').value;
    let author =  document.getElementById('author').value;
    let type;
    let fiction =  document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if(fiction.checked){
        type = fiction.value;
    }
    else if(programming.checked){
        type = programming.value;
    }
    else if(cooking.checked){
        type = cooking.value;
    }
    //   book object 
    book = new Book(name,author,type)
    books_records = new Array()
    books_records = JSON.parse(localStorage.getItem('books'))? JSON.parse(localStorage.getItem('books')) : [];
   

    books_records.push({
      
    'name': name,
   'author': author,
   'type' : type

})
        // add();

    if(display.validate(book)){
        // add();
        display.clear();
        display.show('success', 'Your book successfully has been submitted')
        console.log('success')

    }else{
        display.show('danger', 'Sorry, you cannnot add this book')
    }
    localStorage.setItem('books' ,JSON.stringify(books_records))   
    console.log(books_records) 
}
add();
