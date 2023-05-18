import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titre1:string='moto';
  titre2:string='velo';
  titre3:string='car';
  message:string='';
  photo:string='';
  affiche(arg:string){
this.message='merci d avoir liker  '+arg;
  }
}
