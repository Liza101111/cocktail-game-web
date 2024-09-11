import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css']
})
export class HighScoreComponent implements OnInit {
  highScores: any[] = [];
  
  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.loadHighScores();
  }

  loadHighScores(): void {
    this.gameService.getHighScores().subscribe(
      (scores: any[]) => {
        this.highScores = scores;
      },
      (error: any) => {
        console.error('Error fetching high scores:', error);
      }
    );
  }
}
