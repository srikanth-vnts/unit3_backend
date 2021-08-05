const readline = require('readline');

const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
var books = ['hp','eragon','legend of futian']

function read(){
readline1.question(` 1 - Show all books
 2 - Add a new book
 3 - Quit
 Enter Key:`, (key) => {
    if (key == 1) {
        console.log(books);
        read()
        

    } else if (key == 2) {
        readline1.question(`Enter the new book: `, (book) => {
            books.push(book);
            read()
         
        })
    } else if (key == 3) {
        readline1.question(`Are you sure you want to quit - press Y to quit`, (key) => {
            if (key == 'Y') {
                readline1.close()
            }
        })
    } else {
        console.log("You have selected an invalid entry so please press 1, 2 or 3")
        read()
    }
    
});
}
    read()

readline1.on('close', () => {
    console.log('Bye Bye');
})
