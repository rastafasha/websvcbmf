import { Component, OnInit } from '@angular/core';
import { BanverticalService } from '../../../services/adsVertical.service';
import { Banvertical } from '../../../models/ads-vertical';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Component({
  selector: 'app-banvertical',
  templateUrl: './banvertical.component.html',
  styleUrls: ['./banvertical.component.css']
})
export class BanverticalComponent implements OnInit {

  banverticals: Banvertical;

  error: string;

  private http: HttpClient;

  ServerUrl = environment.apiUrl;
  p: Number = 1;
  count: Number = 5;

  banV: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay:true,
    animateOut: 'fadeOut',
    navSpeed: 1500,
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

  constructor(public banverticalService: BanverticalService,){
    
  }

  
  ngOnInit() {

    this.banverticalService.getBanverticalsActive().subscribe((resp:any)=>{
      this.banverticals = resp.banverticals.data;
    })

    
  }

}
