import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  @Input() activeMenu!: boolean;
  @Output() setActiveMenu = new EventEmitter<any>();
  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
    this.setActiveMenu.emit(this.activeMenu);
  }
  setLang = async (lang: any) => {
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.reflectActiveMenu();
  };
  ngOnInit(): void {}
}
