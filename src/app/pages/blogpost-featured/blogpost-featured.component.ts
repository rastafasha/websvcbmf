import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blogpost-featured',
  templateUrl: './blogpost-featured.component.html',
  styleUrls: ['./blogpost-featured.component.css']
})
export class BlogpostFeaturedComponent implements OnInit {

  blogs: Blog;
  error: {};

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit() {
    this.blogService.getFeaturedBlogs().subscribe((resp:any)=>{
      // this.blogs = resp.blogsdestacados;
      this.blogs = resp.blogsdestacados.data;
    })
  }

}
