import { element } from 'protractor';
import { GameService } from './../services/game.service';
import { Component, OnInit } from '@angular/core';
import { Game } from '../Model/game.model';

@Component({
  selector: 'app-games-search',
  templateUrl: './games-search.component.html',
  styleUrls: ['./games-search.component.css']
})
export class GamesSearchComponent implements OnInit {

  games: Game[];
  searched = false;
  constructor(private gameService: GameService) { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log(form.value);
    const params = form.value;
    this.gameService.getGamesBySearchParams(
      +params.GameId, params.Game_Name, params.Player_One, params.Player_Two, params.Winner)
      .subscribe(games => {
        this.games = games;
        console.log(this.games);
      });
    this.searched = true;
  }

  onClearResults(): void {
    this.games = [];
    this.searched = false;
  }
}
