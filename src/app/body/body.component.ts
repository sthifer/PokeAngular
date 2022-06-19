import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  listPokemon:any = [];
  pickPokemon:number =0;
  private ApiUrl:string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getList();
  }

  getPokemon(id:number){
    return this.http.get(this.ApiUrl+id);
  }

  getList(){
    for(let i=1; i<=151;i++){

      this.getPokemon(i).subscribe( (list:any) => {
        this.listPokemon = [...this.listPokemon,list].sort((a,b) => a.id - b.id);
      });
      }

    };

    flip(id:number){
      this.pickPokemon=id;
    }

}
