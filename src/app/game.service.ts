import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  startNewGame(): Observable<string> {
    return this.http.get(`${this.apiUrl}/start`, { responseType: 'text' });
  }

  makeGuess(guess: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/guess`, null, {
      params: { guess: guess },
      responseType: 'text' 
    });
  }

  skipTurn(): Observable<any> {
    return this.http.post(`${this.apiUrl}/skip`, {}, { responseType: 'text' });
  }

  getGameStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}/status`);
  }

  getHint(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hint`, { responseType: 'text' });
  }

  saveHighScore(playerName: string): Observable<string> {
    return this.http.post(`${this.apiUrl}/saveScore`, null, {
      params: { playerName: playerName },
      responseType: 'text' 
    });
  }
  
  getHighScores(): Observable<any> {
    return this.http.get(`${this.apiUrl}/high-scores`);
  }
}
