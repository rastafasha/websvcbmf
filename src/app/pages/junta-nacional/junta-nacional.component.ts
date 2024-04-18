import { Component, OnInit } from '@angular/core';
import { Ceo } from '../../models/ceo';
import { CeoService } from '../../services/ceo.service';

import { Fotoceo } from '../../models/fotoceo';
import { FotoceoService } from '../../services/fotoseo.service';

import { HttpClient, HttpBackend } from '@angular/common/http';



@Component({
  selector: 'app-junta-nacional',
  templateUrl: './junta-nacional.component.html',
  styleUrls: ['./junta-nacional.component.css']
})
export class JuntaNacionalComponent implements OnInit {


  ceos: Ceo;
  fotoceos: Fotoceo;
  error: {};

  private http: HttpClient;

  constructor(
    private ceoService: CeoService,
    private fotoceoService: FotoceoService,

    ) {
   }

  ngOnInit() {
    window.scrollTo(0,0);
    this.loadCeo();
    this.loadFotoCeo();
  }

  loadCeo(){
    this.ceoService.getCeos().subscribe((resp:any)=>{
      this.ceos = resp.ceos.data
    })
  }
  loadFotoCeo(){
    this.fotoceoService.getFotoceos().subscribe((resp:any)=>{
      this.fotoceos = resp.fotoceos.data
    })
  }

}
