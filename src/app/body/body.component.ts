import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  listPokemon:any = []
  private ApiUrl:string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getList();
    console.log('listo');
    
  }

  getPokemon(id:number){
    //console.log(this.ApiUrl+id);
    
    return this.http.get(this.ApiUrl+id);
  }

  getList(){
    for(let i=1; i<150;i++){

      this.getPokemon(i).subscribe( (list:any) => {
        this.listPokemon = [...this.listPokemon,list].sort((a,b) => a.id - b.id);
      });
      }

    };

}
