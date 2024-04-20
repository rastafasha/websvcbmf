import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Title } from '@angular/platform-browser';
import { HttpClient, HttpErrorResponse, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-blogpost-list',
  templateUrl: './blogpost-list.component.html',
  styleUrls: ['./blogpost-list.component.css']
})
export class BlogpostListComponent implements OnInit {

  title = 'Blogs';
  blogs: Blog;
  error: {};

  private http: HttpClient;

  ServerUrl = environment.apiUrl;

  p: Number = 1;
  count: Number = 4;


  constructor(
    private titleService: Title,
    private blogService: BlogService,

    handler: HttpBackend) {
    this.http = new HttpClient(handler);
   }

  ngOnInit() {
    //this.titleService.setTitle(this.title);

    this.blogService.getActiveBlogs().subscribe((resp:any)=>{
      this.blogs = resp.blogs
    })
    window.scrollTo(0,0);
  }

}
