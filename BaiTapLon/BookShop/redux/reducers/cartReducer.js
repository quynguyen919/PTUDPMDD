const initialState = {
    items: [
        {
            id: 1,
            category: 'Truyện ngắn - Tản văn',
            nameBook: 'Làm Bạn Với Bầu Trời ( Bìa Cứng)',
            price: 198100,
            descriptionBook:
                'Up to 20 hours battery life ',
            photoBook: require('../../images/LamBanVoiBauTroi.jpg'),
            quantityBuy: 1,
            isDiscount: false,
            percent: 0
        },
        {
            id: 2,
            category: 'Lịch sử - Địa lý',
            nameBook: 'Bàn Về Văn Minh',
            price: 78000,
            descriptionBook:
                'Up to 20 hours battery life ',
            photoBook: require('../../images/ban-ve-van-minh.jpg'),
            quantityBuy: 1,
            isDiscount: true,
            percent: 20
        },
        {
            id: 3,
            category: 'Lịch sử - Địa lý',
            nameBook: 'Xã Hội Việt Nam',
            price: 110000,
            descriptionBook:
                'Up to 20 hours battery life ',
            photoBook: require('../../images/xa-hoi-viet-nam.jpg'),
            quantityBuy: 1,
            isDiscount: false,
            percent: 0
        },
        {
            id: 4,
            category: 'Manga-Comic',
            nameBook: 'Sói & Gia Vị - Tập 9',
            price: 50000,
            descriptionBook:
                'Up to 20 hours battery life ',
            photoBook: require('../../images/soivsGiavi9.jpg'),
            quantityBuy: 1,
            isDiscount: true,
            percent: 20
        }
    ],
};

const getDataFromDB = (items) => {
    let array = [];
    items.forEach(data => {
        array.push(data);
    })
    return array;
}

export default (state = initialState, action) => {
    let newList;
    switch (action.type) {
        case 'MINUS_QUANTITY':
            state.items.forEach(data => {
                if (data.id == action.id) {
                  data.quantityBuy = action.quantity - 1;
                }
                newList = getDataFromDB(state.items)
              })
            return {
                ...state,
                items: newList,
            };
        case 'PUST_QUANTITY':
            state.items.forEach(data => {
  
                if (data.id == action.id) {
                // console.log(action.id)
                  data.quantityBuy = action.quantity + 1;
                console.log(data.quantityBuy)
                }
              })
            //   console.log(state.items)
              newList = getDataFromDB(state.items)
            return {
                ...state,
                items: newList,
            };
        case 'REMOVE_ITEM_FROM_CART':
            for (let index = 0; index < state.items.length; index++) {
                if (state.items[index].id == action.id) {
                    state.items.splice(index, 1);
                }
            }
            newList = getDataFromDB(state.items)
            return {
                ...state,
                items: newList,
            }
        default:
            return state;
    }
};