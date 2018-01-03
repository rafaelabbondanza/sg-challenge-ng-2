import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  menuItems = [
    { title: 'new', link: '/new' },
    { title: 'comments', link: '/comments' },
    { title: 'admin', link: '/admin' }
  ];
}
