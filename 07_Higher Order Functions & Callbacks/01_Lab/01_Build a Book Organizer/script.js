const books = [
    {
        title: "Atomic habits",
        authorName: "James Clear",
        releaseYear: 2018,
    },
    {
        title: "Hands-on Machine Learning with Scikit-Learn, Keras, and TensorFlow",
        authorName: " Aurelien Geron",
        releaseYear: 2017,
    },
    {
        title: "The Manga Guide to the Universe",
        authorName: "ISHIKAWA KENJI",
        releaseYear: 2011,
    },
    {
        title: "The Left Hand of Darkness",
        authorName: "Ursula K. Le Guin",
        releaseYear: 1969,
    },
    {
        title: "Norwegian Wood",
        authorName: "Haruki Murakami",
        releaseYear: 1987,
    },
    {
        title: "The Road",
        authorName: "Cormac McCarthy",
        releaseYear: 2006,
    },
    {
        title: "Pride and Prejudice",
        authorName: "Jane Austen",
        releaseYear: 1813,
    },
    {
        title: "The Name of the Rose",
        authorName: "Umberto Eco",
        releaseYear: 1980,
    },
    {
        title: "Cloud Atlas",
        authorName: "David Mitchell",
        releaseYear: 2004,
    },
    {
        title: "Klara and the Sun",
        authorName: "Kazuo Ishiguro",
        releaseYear: 2021,
    },
];

function sortByYear(book1, book2) {
    if (book1.releaseYear < book2.releaseYear) {
        return -1;
    } else if (book1.releaseYear > book2.releaseYear) {
        return 1;
    } else {
        return 0;
    }
}

const filteredBooks = books.filter((book)=> {
    return book.releaseYear < 2000
})

console.log(filteredBooks.sort(sortByYear));