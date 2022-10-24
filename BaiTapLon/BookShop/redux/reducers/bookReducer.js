import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    books: [
        {
            id: 1,
            category: 'Truyện ngắn - Tản văn',
            nameBook: 'Làm Bạn Với Bầu Trời ( Bìa Cứng)',
            price: 198100,
            author:"",
            descriptionBook:
                'Up to 20 hours battery life ',
            photoBook: require('../../images/LamBanVoiBauTroi.jpg'),
        },
        {
            id: 2,
            category: 'Lịch sử - Địa lý',
            nameBook: 'Bàn Về Văn Minh',
            price: 78000,
            author:"",
            descriptionBook:
                'Up to 20 hours battery life ',
            photoBook: require('../../images/ban-ve-van-minh.jpg'),
        },
        {
            id: 3,
            category: 'Lịch sử - Địa lý',
            nameBook: 'Xã Hội Việt Nam',
            price: 110000,
            author:"",
            descriptionBook:
                'Up to 20 hours battery life ',
            photoBook: require('../../images/xa-hoi-viet-nam.jpg'),
        },
        {
            id: 4,
            category: 'Manga-Comic',
            nameBook: 'Sói & Gia Vị - Tập 9',
            price: 50000,
            author:"",
            descriptionBook:
                'Up to 20 hours battery life ',
            photoBook: require('../../images/soivsGiavi9.jpg'),
        }
    ],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_BOOK':
            // console.log("fdsgsdfgds")
            let photo=action.payload.photoBook
            let newBook = {
                id: action.payload.id,
                nameBook: action.payload.nameBook,
                // category: action.payload.category,
                price: action.payload.price,
                descriptionBook:action.payload.description,
                // photoBook: require('../../images/'+{photo}+'.jpg')   ,
                author:action.payload.author,
                 }
            // console.log(newBook);
            AsyncStorage.setItem('bookItems', JSON.stringify([...state.books, newBook]));
            return {
                ...state,
                books: [...state.books,newBook],
            };
        case 'UPDATE_BOOK':
            state.books.some(book => {
                if (book.id === action.payload.id) {
                    let photo=action.payload.photoBook
                    book.nameBook = action.payload.nameBook;
                    // book.category = action.payload.category;
                    book.price = action.payload.price;
                    book.descriptionBook = action.payload.description;
                    // book.photoBook = require('../../images/'+{photo}+'.jpg') ;
                    book.author=action.payload.author;
                }
            }
            )
            AsyncStorage.setItem('bookItems', JSON.stringify([...state.books]));
            return {
                ...state,
                books: [...state.books],
            };
        case 'DELETE_BOOK':
            let new_Book = state.books.filter(x => x.id != action.payload.id)
            AsyncStorage.setItem('bookItems', JSON.stringify(new_Book));
            return {
                ...state,
                books: new_Book,
            };
        default:
             //AsyncStorage.setItem('bookItems', JSON.stringify(state.books));
            return state;
    }
};