import { Component, OnInit } from '@angular/core';
import { Revista } from '../../models/revista';
import {RevistaService} from '../../services/revista.service';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.component.html',
  styleUrls: ['./revista.component.css']
})
export class RevistaComponent implements OnInit {

  revistas:Revista;
  private http: HttpClient;
  error: string;

  p: Number = 1;
  count: Number = 4;

  ServerUrl = environment.apiUrl;

  constructor(public revistaService: RevistaService) { }

  ngOnInit() {

    this.revistaService.getRevistas().subscribe((resp:any)=>{
      this.revistas = resp.revistas.data
    })

    window.scrollTo(0,0);
  }

}
