export class Review {
    id: number;
    name: string;
    picture: string; //Inutile pour une première version ?
    date: Date;
    //drivelink: string;
    //year: number;
  }

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