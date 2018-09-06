import { GameEditComponent } from './game-edit/game-edit.component';
import { GamesSearchComponent } from './games-search/games-search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesListComponent } from './games-list/games-list.component';

const routes: Routes = [
    { path: 'search', component: GamesSearchComponent },
    { path: 'games', component: GamesListComponent },
    { path: 'games/:id', component: GameEditComponent },
    { path: '', redirectTo: 'games', pathMatch: 'full' },
    { path: '**', redirectTo: 'games', pathMatch: 'full' }
];


@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)],
    providers: []
})

export class AppRoutingModule { }
