export class Review {
    id: number;
    name: string;
    date: number;
    driveLink: string;
    img: string;              
    type: string; //Type de review, peut être une fed ou une zone géographique
                  //ex : Jap, PWG, UK, WWE, WWE NXT, WWE 205 Live, PROGRESS...
    types: Array<string>;
  }


  //Inutilisé pour le moment, à voir comment je recup toutes mes reviews (trop pour ranger dans des db...)
  /*
  export class Event extends Review {
    id: number;
    name: string;
    picture: string;
    matchs: Match[];
    date: Date;
  }

  export class Match extends Review {
    id: number;
    name: string;
    picture: string;
    date: Date;
    event: Event;
  }*/