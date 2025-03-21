import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

  public forecasts: any[] = [];

  constructor(private http: HttpClient, private router: Router) { console.log('App Routes:', this.router.config); }
}
