import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Perfils } from '../perfil';
@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  user:string = '';

  public perfil$:Observable<any>
  public pessoa:any

  busca(){
    this.perfil$ = this.http.get('https://api.github.com/users/'+this.user)
    this.http.get<Perfils>('https://api.github.com/users/'+this.user).subscribe((data)=>{
    console.log(data)  
    this.pessoa = data
    },(error)=>{
      if(this.user == ""){
        alert("Por favor, insira um usuário abaixo !")
      }else alert("Usuário não encontrado !!")
      
  }
    ); 
  
  }
  
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }

}
