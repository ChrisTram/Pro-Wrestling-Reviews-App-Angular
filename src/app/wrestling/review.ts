export class Review {
    id: number;
    name: string;
    picture: string;
    date: Date;
    //year: number;
  }

  export class EventReview extends Review {
    id: number;
    name: string;
    picture: string;
    matchs: MatchReview[];
    date: Date;
  }

  export class MatchReview extends Review {
    id: number;
    name: string;
    picture: string;
    date: Date;
    event: EventReview;
  }