import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../Model/game.model';

const siteUrl = 'http://localhost:49866/api/games/';
const httpOptions = {
  headers: new HttpHeaders(
      {
      'Content-Type': 'application/json',
      'Data-Type' : 'json' }
  )
};

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

   getAllGames(): Observable<Game[]> {
    return this.http.get<Game[]>(siteUrl);
  }

  getGameById(id: number): Observable<Game> {
    return this.http.get<Game>(siteUrl + id);
  }

  getGamesByPlayerName(name: string): Observable<Game[]> {
    return this.http.get<Game[]>(siteUrl + name);
  }

  getGamesBySearchParams(id: number, gameName: string, playerOne: string, playerTwo: string, winner: number): Observable<Game[]> {
    let searchParams = '';
    if (id != null) {searchParams += `id=${id}`; }
    if (playerOne != null) {searchParams += `playerOne=${playerOne}`; }
    if (playerTwo != null) {searchParams += `playerTwo=${playerTwo}`; }
    if (gameName != null) {searchParams += `gameName=${gameName}`; }
    if (winner != null) {searchParams += `winner=${winner}`; }

    return this.http.get<Game[]>(`${siteUrl}search?${searchParams}`);
  }

  addNewGame(game): Observable<Game> {
    return this.http.post<Game>(siteUrl, game, httpOptions);
  }

  updateGame(game: Game): Observable<Game> {
    const url = siteUrl + game.Id;
    console.log(url);
    return this.http.put<Game>(url, game);
  }

  deleteGame(id: number): Observable<Game> {
    return this.http.delete<Game>(siteUrl + id, httpOptions);
  }
}
