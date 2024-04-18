import { Component, OnInit } from '@angular/core';
import { Paciente } from '../../models/paciente';
import { PacienteService } from '../../services/paciente.service';

import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {


  title = 'Tips para los pacientes y la comunidad.';
  pacientes: Paciente;
  error: {};

  private http: HttpClient;

  ServerUrl = environment.apiUrl;

  p: Number = 1;
  count: Number = 4;


  constructor(
    private pacienteService: PacienteService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    //this.titleService.setTitle(this.title);

    this.pacienteService.getPacientes().subscribe((resp:any)=>{
      this.pacientes = resp.pacientes.data;
    })
    window.scrollTo(0,0);
  }
}
