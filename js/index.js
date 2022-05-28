console.log("library")

// constructor
function Book(name, author, type){
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor 
function Display(){

}

// Add method to diplay prototype
Display.prototype.add = function(book){
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`;
                    
        tableBody.innerHTML += uiString
}
// implement to clear 
Display.prototype.clear = function(){
let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
// implement to validate
Display.prototype.validate = function(book){
    if(book.name.length < 2 || book.author.length<2 ){
        return false
    } else{
        return true
    }
}

Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 2000);

}
// add submit event listner to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e){
    console.log("form submitted")

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
    let book = new Book(name,author,type)
    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success', 'Your book successfully has been submitted')
        console.log('success')

    }else{
        display.show('danger', 'Sorry, you cannnot add this book')
    }
  
    console.log(book)
    e.preventDefault()

}
