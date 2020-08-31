import { Component } from '@angular/core';
export interface INav {
  path: string;
  label: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navs: INav[] = [
    { path: 'list', label: 'birds' },
    { path: 'card', label: 'Card' },
  ];
  title = 'birding';
}
