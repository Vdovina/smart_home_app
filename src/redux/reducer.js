import { ACTIONS } from "./constants";

const initialState = {
  feedData: {
    news: [
      {
        user: "Me",
        message: "lol lol lol"
      },
      {
        user: "You",
        message: "HELLO HELLO HELLO"
      },
      {
        user: "Anatoly",
        message:
          "desfjgfbgnhff fgfgfdfsdf  sfrfgf fdg deffbgs dbgf  vf gb s d bg f bg d gb rgbgdfgdsdfjhv bf ndbk n,n,n,fg nf,bfdj kff rffffffffffasc bgg"
      },
      {
        user: "Mafia",
        message:
          "ОТКЛЮЧЕНИЕ ВОДЫ В ДОМЕ С 12.75.2454!!! СРОЧНО НАБЕРИТЕ В ТАЗИКИ ВОДИЧКУ"
      }
    ]
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
