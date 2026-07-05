export type GetDeckResponse = {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
};

export type GetCardResponse = {
  success: boolean;
  deck_id: string;
  cards: [ResponseCard];
  remaining: number;
};

export type ResponseCard = {
  code: string;
  image: string;
  images: {
    svg: string;
    png: string;
  };
  value: string;
  suit: string;
};

export type DisplayCard = {
  image: string;
  value: string;
  suit: string;
};
