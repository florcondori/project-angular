import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlayerDataComponent } from './player-data/player-data.component';
import { PlayComponent } from './play/play.component';
import { ResultComponent } from './result/result.component';
import { NewGameComponent } from './new-game/new-game.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  { path: 'new-game', component: NewGameComponent},
  { path: 'player-data', component: PlayerDataComponent },
  { path: 'play', component: PlayComponent },
  { path: 'results', component: ResultComponent},
  { path: '', component: MainComponent },
  { path: '**', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlayerDataComponent,
    PlayComponent,
    ResultComponent,
    NewGameComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
