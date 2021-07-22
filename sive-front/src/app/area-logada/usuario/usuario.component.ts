import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  data = new Date();
  reservas = [{ turno: "manhã", observacao: "" }]
  constructor() {
    
   }
  turno = new FormControl('');
  observacoes = new FormControl('');

  ngOnInit(): void {
  }
  
  agendar() {
    this.reservas.push({turno:this.turno.value,observacao:this.observacoes.value})
  }
}
