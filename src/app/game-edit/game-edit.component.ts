import { GameService } from './../services/game.service';
import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../Model/game.model';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {

  @Input()
  game: Game;

  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onUpdateGame(): void {
    console.log(this.game);
    this.gameService.updateGame(this.game).subscribe(data => console.log(data));
  }

  onDeleteGame(): void {
    this.gameService.deleteGame(this.game.Id).subscribe(data => console.log(data));
  }
}
