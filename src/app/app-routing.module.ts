import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HighScoreComponent } from './high-score/high-score.component';

const routes: Routes = [
  { path: '', component: GameComponent },
  { path: 'high-scores', component: HighScoreComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
