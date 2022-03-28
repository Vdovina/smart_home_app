import { ACTIONS } from "./constants";

const initialState = {
  feedData: {
    isLoading: false,
    news: [
      {
        id: 0,
        author: "Управляющий",
        text: "Уважаемые жители ЖК «Умный Город», 8 мая 2022 года будет отключение горячего водоснабжения."
      },
      {
        id: 1,
        author: "Управляющий",
        text: "21 декабря в 9:00 со двора дома будут убирать снег, пожалуйста, уберите свои машины со двора к этому времени."
      },
      {
        id: 2,
        author: "Алёна",
        text:
          "Потерялся рыжий шотландский котик, зовут Степка, звонить в 43 квартиру 5 подъезда."
      },
      {
        id: 3,
        author: "Дарья",
        text:
          "Ищу репетитора по математике в нашем доме, звонить 89125546756"
      },
      {
        id: 4,
        author: "Реклама",
        text:
          "Уважаемые жители, у нас в доме 1 июля открывается магазин здорового питания, приглашаем на открытие!"
      },
      {
        id: 5,
        author: "Анастасия",
        text:
          "Кто оставил розовую курточку на детской площадке? Просьба забрать у охранника на цокольном этаже!"
      },
      {
        id: 6,
        author: "Управляющий",
        text:
          "Уважаемые жители нашего ЖК, у нас сменились ключи от домофона, огромная просьба подойти к охраннику до 06.05, иначе не попадёте домой :)"
      },
      {
        id: 7,
        author: "Управляющий",
        text:
          "Уважаемые жители ЖК «Умный Город». Просьба предоставить ФИО детей, идущих в первый класс 01.09.2022 для формирования списков подарков на праздник знаний, который будет проходить во дворе Нашего дома."
      }
    ]
  },
  userData: {
    name: 'Anastasia',
    apt: 22,
    phoneNumber: '89328344846',
  },
  residentalData: {
    name: 'ЖК Умный Дом',
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_NEWS:
      return {
        ...state,
        feedData: {
          ...state.feedData,
          isLoading: true,
        }
      }
    case ACTIONS.FETCH_NEWS_FAILED: 
      return state;
    case ACTIONS.FETCH_NEWS_SUCCESSED:
      return {
        ...state,
        feedData: {
          ...state.feedData,
          isLoading: false,
          news: action.payload,
        }
      }
    case ACTIONS.ADD_NEWS:
      return {
        ...state,
        feedData: {
          ...state.feedData,
          news: [...state.feedData.news, action.payload],
        }
      }
    default:
      return state;
  }
};

export default reducer;
