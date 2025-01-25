
export type Player = number;
export type Score = [number, number];
export type Posic = [number, number];

export interface Card {
	name: string;
  matched: boolean;
  id: number;
	posic: Posic;
}

export enum Mode {
    NORMAL,
    SWAP
}
