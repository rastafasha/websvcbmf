import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { PacienteService } from '../../services/paciente.service';
import { Paciente } from '../../models/paciente';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-paciente-detail',
  templateUrl: './paciente-detail.component.html',
  styleUrls: ['./paciente-detail.component.css']
})
export class PacienteDetailComponent implements OnInit {

  paciente_id: any;
  patient_selected: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteService,
    private titleService: Title,
    private ativatedRoute: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.ativatedRoute.params.subscribe((resp:any)=>{
      console.log(resp);
      this.paciente_id = resp.id;
     })
     this.showUser();
    window.scrollTo(0,0);

    //this.titleService.setTitle('SVCBMF - Blog Detail');
  }

  showUser(){
    this.pacienteService.getPaciente(this.paciente_id).subscribe((resp:any)=>{
      console.log(resp);
      this.patient_selected = resp.patient;
      
      
    })
  }

}
