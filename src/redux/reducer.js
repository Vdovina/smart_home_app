import { ACTIONS } from "./constants";

const initialState = {
  feedData: {
    isLoading: false,
    news: [
      {
        user: "Управляющий",
        message: "Уважаемые жители ЖК «Умный Город», 8 мая 2022 года будет отключение горячего водоснабжения."
      },
      {
        user: "Управляющий",
        message: "21 декабря в 9:00 со двора дома будут убирать снег, пожалуйста, уберите свои машины со двора к этому времени."
      },
      {
        user: "Алёна",
        message:
          "Потерялся рыжий шотландский котик, зовут Степка, звонить в 43 квартиру 5 подъезда."
      },
      {
        user: "Дарья",
        message:
          "Ищу репетитора по математике в нашем доме, звонить 89125546756"
      },
      {
        user: "Реклама",
        message:
          "Уважаемые жители, у нас в доме 1 июля открывается магазин здорового питания, приглашаем на открытие!"
      },
      {
        user: "Анастасия",
        message:
          "Кто оставил розовую курточку на детской площадке? Просьба забрать у охранника на цокольном этаже!"
      },
      {
        user: "Управляющий",
        message:
          "Уважаемые жители нашего ЖК, у нас сменились ключи от домофона, огромная просьба подойти к охраннику до 06.05, иначе не попадёте домой :)"
      },
      {
        user: "Управляющий",
        message:
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
      debugger;
      // return {
      //   ...state,
      //   feedData: {
      //     ...state.feedData,
      //     isLoading: true,
      //   }
      // }
      return state;
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
    default:
      return state;
  }
};

export default reducer;
