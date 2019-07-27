import {Component, Input, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Post} from "../../models/post.model";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService, private router: Router) {}

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        this.postsService.emitPosts();
        if (this.posts.length == 0) {
          this.router.navigate(['/new-post']);
        }
      }
    );
  }

  moreLove(post: Post){
    this.postsService.moreLove(post);
  }

  lessLove(post: Post){
    this.postsService.lessLove(post);
  }

  onDeletePost(post: Post) {
    this.postsService.removePosts(post);
    if (this.posts.length == 0) {
      this.router.navigate(['/new-post']);
    }
  }
}
