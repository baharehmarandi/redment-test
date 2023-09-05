import {Component, OnInit} from '@angular/core';

export interface BlogList {
  id: number;
  image?: string;
  date?: string;
  title?: string;
}
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  blogLists?: BlogList[];

  ngOnInit() {
    this.blogLists = [
      {id:0, title: "Why flooring should be the most vital aspect of a house?", date: "2023-07-10T00:00:00Z", image: "/assets/images/Rectangle 19.png"},
      {id:1, title: "Why flooring should be the most vital aspect of a house?", date: "2023-07-10T00:00:00Z", image: "/assets/images/Rectangle 181.png"},
      {id:2, title: "Why flooring should be the most vital aspect of a house?", date: "2023-07-10T00:00:00Z", image: "/assets/images/Rectangle 182.png"}
    ]
  }
}
