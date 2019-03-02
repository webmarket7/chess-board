import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IChessBoardColorSchema } from '../../common/interfaces';

@Component({
    selector: 'chess-board',
    templateUrl: './chess-board.component.pug',
    styleUrls: ['./chess-board.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessBoardComponent implements OnInit {

    private readonly _colorSchemas = {
        sandCastle: {
            darkCellColor: '#b88b4a',
            lightCellColor: '#e3c16f',
            blackPieceColor: '#000',
            whitePieceColor: '#fff'
        },
        dusk: {
            darkCellColor: '#706677',
            lightCellColor: '#ccb7ae',
            blackPieceColor: '#000',
            whitePieceColor: '#f9f8cc'
        },
        wheat: {
            darkCellColor: '#bbbe64',
            lightCellColor: '#eaf0ce',
            blackPieceColor: '#000',
            whitePieceColor: '#FCA'
        }
    };
    private readonly _numbers: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];

    // Config
    private _colorSchemaName = 'sandCastle';
    private _side: 'white'|'black';
    private _rows: Array<number>;
    private _columns: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

    get rows() {
        return this._rows;
    }

    get columns() {
        return this._columns;
    }

    get colorSchema(): IChessBoardColorSchema {
        return this._colorSchemas[this._colorSchemaName];
    }

    @Input() position = {
        a1: {
            side: 'white',
            type: 'rook'
        },
        b1: {
            side: 'white',
            type: 'knight'
        },
        c1: {
            side: 'white',
            type: 'bishop'
        },
        d1: {
            side: 'white',
            type: 'queen'
        },
        e1: {
            side: 'white',
            type: 'king'
        },
        f1: {
            side: 'white',
            type: 'bishop'
        },
        g1: {
            side: 'white',
            type: 'knight'
        },
        h1: {
            side: 'white',
            type: 'rook'
        },
        a2: {
            side: 'white',
            type: 'pawn'
        },
        b2: {
            side: 'white',
            type: 'pawn'
        },
        c2: {
            side: 'white',
            type: 'pawn'
        },
        d2: {
            side: 'white',
            type: 'pawn'
        },
        e2: {
            side: 'white',
            type: 'pawn'
        },
        f2: {
            side: 'white',
            type: 'pawn'
        },
        g2: {
            side: 'white',
            type: 'pawn'
        },
        h2: {
            side: 'white',
            type: 'pawn'
        },
        a8: {
            side: 'black',
            type: 'rook'
        },
        b8: {
            side: 'black',
            type: 'knight'
        },
        c8: {
            side: 'black',
            type: 'bishop'
        },
        d8: {
            side: 'black',
            type: 'queen'
        },
        e8: {
            side: 'black',
            type: 'king'
        },
        f8: {
            side: 'black',
            type: 'bishop'
        },
        g8: {
            side: 'black',
            type: 'knight'
        },
        h8: {
            side: 'black',
            type: 'rook'
        },
        a7: {
            side: 'black',
            type: 'pawn'
        },
        b7: {
            side: 'black',
            type: 'pawn'
        },
        c7: {
            side: 'black',
            type: 'pawn'
        },
        d7: {
            side: 'black',
            type: 'pawn'
        },
        e7: {
            side: 'black',
            type: 'pawn'
        },
        f7: {
            side: 'black',
            type: 'pawn'
        },
        g7: {
            side: 'black',
            type: 'pawn'
        },
        h7: {
            side: 'black',
            type: 'pawn'
        },
    };

    @Input()
    get side() {
        return this._side;
    }
    set side(side: 'white'|'black') {
        this._side = side;

        switch (side) {
            case 'white':
                this._rows = this._numbers.reverse();
                break;

            case 'black':
                this._rows = this._numbers;
        }
    }

    @Input()
    get colorSchemaName() {
       return this._colorSchemaName;
    }
    set colorSchemaName(colorSchemaName: string) {
        this._colorSchemaName = colorSchemaName;
    }

    @Input() areCoordinatesVisible = true;

    constructor() {
    }

    ngOnInit(): void {
    }

    setInitialPosition() {

    }

    trackByFn(id, index): number {
        return index;
    }
}
