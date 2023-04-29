import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  services: any[] = [
    {
      link: 'facebookservices',
      color: '#FF6347',
      title: `Facebook ads`,
      des: `Facebook Ads permet de 
    toucher une audience précise 
    avec des options de ciblage 
    avancées.`,
      img: `../../../assets/services/Facebook.svg`,
    },
    {
      link: 'instgramservices',
      color: '#50C878',
      title: `Instagram ads`,
      des: `Instagram Ads permet de 
      toucher une audience 
      qualifiée avec des formats 
      publicitaires créatifs et visuels.`,
      img: `../../../assets/services/Instagram.svg`,
    },
    {
      link: 'youtubeservices',
      color: '#F7F908',
      title: `YouTube ads`,
      des: `Youtube Ads offre une grande 
      portée et des options de 
      ciblage avancées pour toucher 
      une audience qualifiée.`,
      img: `../../../assets/services/YouTube.svg`,
    },
    {
      link: 'googleservices',
      color: '#00C0F1',
      title: `Google ads`,
      des: `Google Ads permet une
      visibilité immédiate sur le 
      moteur de recherche 
      le plus utilisé au monde.`,
      img: `../../../assets/services/Google.svg`,
    },
  ];
  goals: any[] = [
    {
      name: `Proactif`,
      des: `Nous sommes toujours en 
      avance sur la courbe pour 
      offrir un avantage 
      concurrentiel à nos clients.`,
      img: `Proactif.svg`,
    },
    {
      name: `Enthousiaste`,
      des: `nous n'acceptons que les 
      clients qui nous donnent 
      envie de nous lever du lit 
      le matin.`,
      img: `Enthousiaste.svg`,
    },
    {
      name: `Rapport`,
      des: `Nous nous engageons à 
      construire des relations à 
      long terme avec nos clients 
      basées sur la confiance et 
      l'empathie.`,
      img: `Rapport.svg`,
    },
    {
      name: `Objectif `,
      des: `Nous avons un objectif clair 
      en tête : aider nos clients à 
      atteindre leur succès.`,
      img: `Objectif.svg`,
    },
    {
      name: `Créatif`,
      des: ` Nous sommes une agence de 
      marketing créative qui pense 
      en dehors des sentiers battus 
      pour des résultats 
      exceptionnels.`,
      img: `Créatif.svg`,
    },
    {
      name: `Expertise`,
      des: `Nous avons une vaste 
      expérience et expertise 
      pour offrir des solutions 
      efficaces à nos clients.`,
      img: `Expertise.svg`,
    },
  ];
  faqs: any[] = [
    {
      question: `Quel est votre processus pour créer une campagne publicitaire efficace sur 
      Instagram, Facebook, YouTube ou Google ?`,
      solution: `Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis 
      molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla 
      accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. 
      Maecenas eget condimentum velit, sit amet feugiat lectus.orquen`,
    },
  ];
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    new Swiper('.goals-swiper', {
      slidesPerView: 'auto',
      spaceBetween: 22,

      // loop: true,
      // freeMode: {
      //   enabled: true,
      //   sticky: true,
      // },
      // slidesPerView: 'auto',
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 100,
        dragClass: 'scroll-drag',
        enabled: true,
      },
      // spaceBetween: 0,
      breakpoints: {
        1320: {
          slidesPerView: 2,
          spaceBetween: 22,
        },
      },

      // grid: {
      //   rows: 3,
      // },
      // mousewheel: {
      //   forceToAxis: true,
      // },
    });
  }
}
