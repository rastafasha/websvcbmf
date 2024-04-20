import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-blogpost-detail',
  templateUrl: './blogpost-detail.component.html',
  styleUrls: ['./blogpost-detail.component.css']
})
export class BlogpostDetailComponent implements OnInit {



  blog_id: any;
  blog_selected: any;
  slug: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private titleService: Title,
     private _sanitizer: DomSanitizer,
     private ativatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    const slug = this.ativatedRoute.snapshot.paramMap.get('slug');

    this.slug = slug;
    this.blogService.getPostBySlug(this.slug).subscribe(
      (res:any) => {
        this.blog_selected = res.blog;
        // console.log(this.blog_selected);
      }
    );

    // this.ativatedRoute.params.subscribe((resp:any)=>{
    //   console.log(resp);
    //   this.blog_id = resp.id;
    //  })
    //  this.showUser();
    window.scrollTo(0,0);

    //this.titleService.setTitle('SVCBMF - Blog Detail');
  }

  // showUser(){
  //   this.blogService.getBlog(this.blog_id).subscribe((resp:any)=>{
  //     console.log(resp);
  //     this.blog_selected = resp.blog;
      
      
  //   })
  // }

  public onReady( editor ) {
    editor.ui.getEditableElement().parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
    );
  }


  getVideoIframe(url) {
    var video, results;

    if (url === null) {
        return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video   = (results === null) ? url : results[1];

    return this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
}



}
