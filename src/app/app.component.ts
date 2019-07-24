import {Component} from '@angular/core';
import {Post} from "./entities/Post";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post [] = [
    new Post(
      'Mon premier post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at finibus neque. Curabitur non lectus placerat, tempor felis sit amet, molestie arcu. Morbi hendrerit ante luctus, luctus urna in, rutrum leo. Suspendisse tristique faucibus feugiat. In malesuada neque a dolor convallis, ut ullamcorper augue vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque efficitur sodales metus, ac mollis lectus porta sit amet.',
      3
    ),
    new Post(
      'Mon deuxième post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at finibus neque. Curabitur non lectus placerat, tempor felis sit amet, molestie arcu. Morbi hendrerit ante luctus, luctus urna in, rutrum leo. Suspendisse tristique faucibus feugiat. In malesuada neque a dolor convallis, ut ullamcorper augue vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque efficitur sodales metus, ac mollis lectus porta sit amet.',
      -3
    ),
    new Post(
      'Mon troisième post',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at finibus neque. Curabitur non lectus placerat, tempor felis sit amet, molestie arcu. Morbi hendrerit ante luctus, luctus urna in, rutrum leo. Suspendisse tristique faucibus feugiat. In malesuada neque a dolor convallis, ut ullamcorper augue vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque efficitur sodales metus, ac mollis lectus porta sit amet.',
      0
    ),
  ]
}
