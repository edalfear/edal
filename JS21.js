/*
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    //fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('grau nao identificado')
    }

    //Fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", "")); 
    let formula =  (fahrenheit) => (fahrenheit - 32) * 5/9 
    let degreeSign = 'C'
    // fluxo alternativo c -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", "")); 
        formula =  celsius => celsius * 9/5 + 32
        degreeSign = 'F'

    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log (transformDegree('10C'))
    console.log (transformDegree('50F'))
    transformDegree('50Z')

}
catch (error) {
    console.log(error.message)
}

----------- BIBLIOTECA------------ 


const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories= booksByCategory.length

console.log(totalCategories);
for(let category of booksByCategory){
    console.log('total de livros da categoria ' , category.category)
    console.log(category.books.length)
}


function countAuthors () {
    let authors = [];

    for (let category of booksByCategory) {
        for(let book of category.books){
            if(authors.indexOf(book.author) ==-1 ) {
                authors.push(book.author)
            }
        }
    }
    console.log('total de autores:' , authors.length)
}

countAuthors();


function booksOfAugustoCury () {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === 'Augusto Cury') {
                books.push(book.title)
            }
        }
    }
    console.log('Livros do autor:' , books)
}

booksOfAugustoCury();

function booksOfAuthor (author) {
    let books = [];

    for (let category of booksByCategory) {
        for(let book of category.books){
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }
    console.log('Livros do autor' , author , books.join(", ") )
}

booksOfAuthor('Augusto Cury');
*/

