export type HexColor = string;

export interface IChessBoardColorSchema {
    darkCellColor: HexColor;
    lightCellColor: HexColor;
    blackPieceColor: HexColor;
    whitePieceColor: HexColor;
}

export type ChessPieceType =
    'king' |
    'queen' |
    'bishop' |
    'knight' |
    'rook' |
    'pawn';

export type ChessPieceSide = 'white' | 'black';

export interface IChessPiece {
    type: ChessPieceType;
    side: ChessPieceSide;
}

