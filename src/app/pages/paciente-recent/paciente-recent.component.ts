import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';

@Component({
  selector: 'app-paciente-recent',
  templateUrl: './paciente-recent.component.html',
  styleUrls: ['./paciente-recent.component.css']
})
export class PacienteRecentComponent implements OnInit {

  pacientes: Paciente;
  error: {};

  

  constructor(private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacienteService.getPacientes().subscribe((resp:any)=>{
      this.pacientes = resp.data;
    })
  }

}
