import { Component, OnInit } from '@angular/core';
import { DirectorioService } from '../../services/directorio.service';
import { Directorio } from '../../models/directorio';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent implements OnInit {

  directories: Directorio;

  error: string;
  doctores:any;

  private http: HttpClient;

  ServerUrl = environment.apiUrl;
  imagenSerUrl = environment.apiUrlMedia;

  p: Number = 1;
  count: Number = 8;

  classApplied = true;

  heroes = Directorio;
  selectedHero?: Directorio;

  vCardInfo:string;
  value: string;
  display = false;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  href : string;

  query:string ='';


  constructor(
    public directorioService: DirectorioService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);

   }

  ngOnInit() {

    window.scrollTo(0,0);
    this.getDirectories();


  }

  getDirectories(): void {
    this.directorioService.getDirectorios().subscribe((resp:any)=>{
      this.doctores = resp.directories.data;
    })
  }

  toggleClass(id: number){
    this.classApplied = !this.classApplied;
  }

  public PageSize(): void {
    this.getDirectories();
    this.query = '';
  }


  // buscarDirectorio( termino: string) {

  //   this.directorioService.buscarDirectorio( termino )
  //     .subscribe( directorios => this.doctores = directorios);


  // }

  search( ) {// funciona, devuelve la busqueda

    // if(this.doctores == undefined){
    //   console.log('pendiente');

    // }

    // if( this.search.length == 0){
    //   return false;

    // }

    return this.directorioService.search(this.query).subscribe(
      res=>{
        this.doctores = res;
        if(!this.query){
          this.ngOnInit();
        }
      });

    
  }


  /**
   * @method: Descarga la imagen del qr
   * @author: malcolm
   * @since: 11/07/2022
   */


   vcard: string;

  downloadImage(){

    const box = document.getElementById('box');
    box.parentElement.classList.add('parent')

    box.hasAttribute('img');

    this.href = document.getElementsByClassName('parent')[0].querySelector('img').src;

    console.log('img', this.href);

    this.vcard = this.href;
    console.log('vcard', this.vcard);
  }




}
