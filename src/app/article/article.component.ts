import { NgIf } from '@angular/common';
import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
nblike:number=0;
commentaire:string="";
nbcommentaire:string="les commentaires";
@Input()titre:string;
@Input()description:string;
@Output()ecrire=new EventEmitter<string>;
@Input()photo:string;
constructor(){

}
Oninit(){

}
onlike(){
  this.nblike++;
  this.ecrire.emit(this.titre);
}
ondislike(){
  if(this.nblike>0){
    this.nblike--;
  }
  
}
}
