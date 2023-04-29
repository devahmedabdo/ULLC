import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  @Input() activeMenu!: boolean;
  @Output() setActiveMenu = new EventEmitter<any>();
  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
    this.setActiveMenu.emit(this.activeMenu);
  }
  ngOnInit(): void {}
}
