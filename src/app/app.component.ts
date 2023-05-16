import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lang: string = 'en';
  constructor(private translate: TranslateService) {
    let lang = localStorage.getItem('lang');
    this.setLang(lang || 'fr');
    window.addEventListener('scroll', () => {
      let animationClasses = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClasses.forEach((e) => {
        if (e.getBoundingClientRect().top < 600) {
          e.classList.add('reveal');
        } else {
          e.classList.remove('reveal');
        }
      });
    });
    window.addEventListener('load', () => {
      let animationClasses = document.querySelectorAll(
        '.lReveal , .dReveal,.uReveal,.rReveal'
      );
      animationClasses.forEach((e) => {
        if (e.getBoundingClientRect().top < 600) {
          e.classList.add('reveal');
        } else {
          e.classList.remove('reveal');
        }
      });
    });
  }
  setLang = async (lang: any) => {
    this.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
  };

  title = 'ULLC';
  activeMenu: boolean = false;
  setActiveMenu(data: any) {
    this.activeMenu = data;
  }
  toTop() {
    window.scrollTo(0, 0);
    this.activeMenu = false;
    let animationClasses = document.querySelectorAll(
      '.lReveal , .dReveal,.uReveal,.rReveal'
    );
    animationClasses.forEach((e) => {
      if (e.getBoundingClientRect().top < 600) {
        e.classList.add('reveal');
      } else {
        e.classList.remove('reveal');
      }
    });
  }
}
