import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

   createDb() {
    const movies=[
      {id:1,name:'Matrix',description:'Wachowski Brothers yapımı bilimkurgu filmi', imageUrl:'matrix.jpg'},
{id:2,name:'The Lord Of The Rings',description:'J.R.R. Tolkien kitabından uyarlama film', imageUrl:'lotr.jpeg'},
{id:3,name:'Star Wars',description:'Bilimkurgu filmlerinin atası ', imageUrl:'starwars.jpeg'},
{id:4,name:'The Godfather',description:'Carleone ailesinin anlatıldığı film', imageUrl:'godfather.jpg'}
    ];
    return {movies};
  }
  constructor() { }
}
