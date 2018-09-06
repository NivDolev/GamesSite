import { GameService } from './../services/game.service';
import { Component, OnInit, Input } from '@angular/core';
import { Game } from '../Model/game.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit {
  game: Game;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.gameService.getGameById(id).subscribe((game: Game) => this.game = game);
  }

  onUpdateGame(): void {
    this.gameService.updateGame(this.game).subscribe(data => console.log(data));
  }

  onDeleteGame(): void {
    this.gameService.deleteGame(this.game.Id).subscribe(data => console.log(data));
  }
}
