import { Component, OnInit } from '@angular/core';
import { BanhorizontalService } from '../../../services/adsHorizontal.service';
import { Banhorizontal } from '../../../models/ads-horizontal';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-banhorizontal',
  templateUrl: './banhorizontal.component.html',
  styleUrls: ['./banhorizontal.component.css']
})
export class BanhorizontalComponent implements OnInit {

  banhorizontals: Banhorizontal;

  error: string;

  private http: HttpClient;

  ServerUrl = environment.apiUrl;
  p: Number = 1;
  count: Number = 5;

  banH: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    animateOut: 'fadeOut',
    navSpeed: 15000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

  constructor(public banhorizontalService: BanhorizontalService,){
    
  }

  
  ngOnInit() {
    this.banhorizontalService.getBanhorizontalsActivo().subscribe((resp:any)=>{
      this.banhorizontals = resp.banhorizontals.data;
    })

    
  }

}
