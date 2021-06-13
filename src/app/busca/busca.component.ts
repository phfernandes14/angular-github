import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  user:string = '';


  busca(){
    console.log(this.user)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
