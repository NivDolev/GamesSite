import { GameService } from './services/game.service';
import { AppRoutingModule } from './app-router.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesSearchComponent } from './games-search/games-search.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { GameNewComponent } from './game-new/game-new.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    GamesSearchComponent,
    GameEditComponent,
    NavigationComponent,
    GameNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
