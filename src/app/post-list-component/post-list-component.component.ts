import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {

   @Input() post = {
    title: 'ignore',
    content: 'ignore',
    loveIts: 0,
    createdAt: Date.now()
  };





  constructor() { }

  ngOnInit() {

  }


  onDontLoveIt() {
    this.post.loveIts = this.post.loveIts - 1;
  }
  onLoveIt() {
    this.post.loveIts = this.post.loveIts + 1;
  }

  getColor() {
    if (this.post.loveIts<0) {
      return 'red';
    } else if (this.post.loveIts === 0) {
      return  'black';
    } else {
      return 'green';
           }
  }

  /*Normal j'ai pas besoin de cette fontion mais sur les champs createdAt toute le temps c'est nul ... du coup j'ai mis en dur */
  getDate() {return new Date(); }
}
