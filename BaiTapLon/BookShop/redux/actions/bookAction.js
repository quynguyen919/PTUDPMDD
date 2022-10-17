export const createBook = (book) => {
    return {
        type: 'CREATE_BOOK',
        payload: {
            id: book.id,
            nameBook: book.nameBook,
            // category: book.category,
            author:book.author,
            price: book.price,
            descriptionBook:book.descriptionBook,
            photoBook: book.photoBook
        }
    };
};

export const updateBook = (book) => {
    return {
        type: 'UPDATE_BOOK',
        payload: {
            id: book.id,
            nameBook: book.nameBook,
            // category: book.category,
            author:book.author,
            price: book.price,
            descriptionBook:book.descriptionBook,
            photoBook: book.photoBook
        }
    };
};

export const delteBook = (book) => {
    return {
        type: 'DELETE_BOOK',
        payload: {
            bookId: book.id,
        }
    };
};