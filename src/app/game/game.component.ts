import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gameStatus: string = '';
  hint: string = '';
  guess: string = '';
  playerName: string = '';

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.startNewGame();
  }

  startNewGame(): void {
    console.log('Starting a new game...');
    this.gameService.startNewGame().subscribe({
      next: (response: any) => {
        this.gameStatus = response;
      },
      error: (error) => {
        console.error('Error starting new game:', error);
      }
    });
  }
  
  makeGuess(): void {
    if (this.guess.trim()) {
      this.gameService.makeGuess(this.guess).subscribe({
        next: (response: string) => {
          this.gameStatus = response; 
        },
        error: (error) => {
          console.error('Error making guess:', error); 
        },
        complete: () => {
          console.log('Guess submission completed.');
        }
      });
    } else {
      console.error('Guess cannot be empty');
    }
  }
  
  skipTurn(): void {
    this.gameService.skipTurn().subscribe({
      next: (response: any) => {
        this.gameStatus = response;
      },
      error: (error) => {
        console.error('Error skipping turn:', error);
      }
    });
  }
  
  getHint(): void {
    this.gameService.getHint().subscribe({
      next: (response: any) => {
        this.hint = response;
      },
      error: (error) => {
        console.error('Error getting hint:', error);
      }
    });
  }
  
  saveHighScore(): void {
    if (this.playerName.trim()) {
      this.gameService.saveHighScore(this.playerName).subscribe({
        next: (response: string) => {
          alert(response); 
        },
        error: (error) => {
          console.error('Error saving high score:', error); 
        }
      });
    } else {
      console.error('Player name cannot be empty');
    }
  }
  
}