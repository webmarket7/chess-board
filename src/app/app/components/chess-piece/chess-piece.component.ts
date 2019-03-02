import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChessPieceSide, ChessPieceType, IChessBoardColorSchema } from '../../common/interfaces';

@Component({
    selector: 'chess-piece',
    templateUrl: './chess-piece.component.pug',
    styleUrls: ['./chess-piece.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChessPieceComponent implements OnInit {

    @Input() colorSchema: IChessBoardColorSchema;
    @Input() side: ChessPieceSide;
    @Input() type: ChessPieceType;

    constructor() {
    }

    ngOnInit() {
    }

}
