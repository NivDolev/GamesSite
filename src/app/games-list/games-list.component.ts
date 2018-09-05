import { GameService } from './../services/game.service';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games = [];
  filteredGames = [];

  @Output()
  selectedGame: any;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getAllGames().subscribe(games => {
      this.games = games.sort();
      this.filteredGames = this.games;
      this.onSort();
    });
  }

  selectGame(game: any) {
    this.selectedGame = game;
  }

  onSort() {
    this.filteredGames = this.filteredGames.sort(function (a, b) {
      if (a['Id'] < b['Id']) {
        return -1;
      } else if (b['Id'] < a['Id']) {
        return 1;
      } else {
        return 0;
      }
    });
  }
}
