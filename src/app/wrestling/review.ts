export class Review {
    id: number;
    name: string;
    date: Date;
    driveLink: string;
    year: number; //Utilisé pour le trie mais surtout les reviews qui ne concernent pas un show précis. 
                  //TODO A supprimer et générer auto dans le futur.
    type: string; //Type de review, peut être une fed ou une zone géographique
                  //ex : Jap, PWG, UK, WWE, WWE NXT, WWE 205 Live, PROGRESS...
    //drivelink: string;
    //year: number;
  }


  //Inutilisé pour le moment, à voir comment je recup toutes mes reviews (trop pour ranger dans des db...)
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
  }