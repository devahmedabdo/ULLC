import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-top',
  templateUrl: './to-top.component.html',
  styleUrls: ['./to-top.component.scss'],
})
export class ToTopComponent implements OnInit {
  constructor() {}
  toTop() {
    window.scrollTo(0, 0);
  }
  hide: boolean = false;
  lastScroll: number = 0;
  ngOnInit(): void {
    this.lastScroll = window.scrollY;
    window.addEventListener('scroll', () => {
      if (this.lastScroll < window.scrollY) {
        this.hide = true;
      } else {
        this.hide = false;
      }
      this.lastScroll = window.scrollY;
    });
  }
}
