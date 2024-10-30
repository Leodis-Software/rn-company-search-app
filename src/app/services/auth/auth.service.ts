import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  public getAuthenticated(): boolean {
    return this.cookieService.get('authenticated') == 'true';
  }

  public setAuthenticated(authenticated: boolean): void {
    this.cookieService.set('authenticated', authenticated ? 'true' : 'false');
  }

  public getReturnUri(): string {
    return this.cookieService.get('returnUri');
  }

  public setReturnUri(returnUri: string): void {
    this.cookieService.set('returnUri', returnUri);
  }
}
