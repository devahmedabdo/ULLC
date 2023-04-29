import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ULLC';
  activeMenu: boolean = false;
  setActiveMenu(data: any) {
    this.activeMenu = data;
  }
  toTop() {
    window.scrollTo(0, 0);
    this.activeMenu = false;
  }
}
