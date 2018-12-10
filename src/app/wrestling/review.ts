export class Review {
    id: number;
    name: string;
    picture: string;
    created: Date;
  }

  export class EventReview extends Review {
    id: number;
    name: string;
    picture: string;
    matchs: MatchReview[];
    created: Date;
  }

  export class MatchReview extends Review {
    id: number;
    name: string;
    picture: string;
    created: Date;
    event: EventReview;
  }