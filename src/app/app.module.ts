import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
    faChessPawn, faChessKing, faChessQueen, faChessBishop, faChessKnight, faChessRook
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { AppComponent } from './app.component';
import { ChessBoardComponent } from './app/components/chess-board/chess-board.component';
import { ChessPieceComponent } from './app/components/chess-piece/chess-piece.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule
    ],
    declarations: [
        AppComponent,
        ChessBoardComponent,
        ChessPieceComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        library.add(faChessPawn, faChessKing, faChessQueen, faChessBishop, faChessKnight, faChessRook);
    }
}
