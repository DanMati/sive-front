import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Reserva } from '../model/reserva.interface';
import { throwError} from 'rxjs';
import { catchError} from 'rxjs/operators';

@Injectable()
export class ReservaService {
  constructor(private http: HttpClient) { }


}