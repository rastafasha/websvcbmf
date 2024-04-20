import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';

@Component({
  selector: 'app-blogpost-recent',
  templateUrl: './blogpost-recent.component.html',
  styleUrls: ['./blogpost-recent.component.css']
})
export class BlogpostRecentComponent implements OnInit {

  blogs: Blog;
  error: {};

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getRecentBlogs().subscribe((resp:any)=>{
      this.blogs = resp.blogsrecientes.data;
    })
    
  }

}
