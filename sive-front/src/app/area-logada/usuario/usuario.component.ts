import { DatePipe } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Reserva } from 'src/app/model/reserva.interface';
import { environment } from '../../../environments/environment';
import { ReservaService } from 'src/app/services/reserva.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  data = new Date();
  reservas = [{ _id:"", data:"", turno: "manhã", observacao: "" }]
  formReserva!: FormGroup;
  reservaAtual:Reserva = new Reserva();

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.createForm(new Reserva());
    this.formReserva.patchValue({
      data: this.data.toLocaleDateString(),
   });
    this.buscaReservas();
  }

  agendar() {
    this.reservaAtual.matricula = "201778xyz";
    this.reservaAtual.turno = this.formReserva.value.turno;
    this.reservaAtual.observacao = this.formReserva.value.observacao;
    this.reservaAtual.data = this.data.toLocaleDateString();

    console.log(this.reservaAtual);
    this.http.post<any>(environment.server+"reserva", this.reservaAtual).subscribe(data => {
      console.log(data)
    });
    window.location.reload();
  }

  createForm(reserva: Reserva) {
    this.formReserva = new FormGroup({
      turno: new FormControl(reserva.turno),
      data: new FormControl(reserva.data),
      observacao: new FormControl(reserva.observacao),
    })
  }
  buscaReservas(){
    this.http.get<any[]>(environment.server+"reserva").subscribe(data => {
      this.reservas = data;
     console.log(this.reservas)
    });

  }
  delete(id:any){
    console.log(id)
    this.http.delete<any>(environment.server+"reserva?id="+id).subscribe(data => {
      console.log(data)
    });
    window.location.reload();

  }
}
