import { AfterViewInit, Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  slides: any[] = [
    {
      title: `Qui sommes-nous ?`,
      titleEn: `Who are we ?`,
      des1: `Nous sommes deux amis en échange en Californie et nous 
      avons décidé de nous lancer dans le marketing des réseaux 
      sociaux en travaillant en freelance pour divers clients. Nous 
      avons rapidement réalisé notre potentiel et avons créé notre 
      propre agence, You Will See.`,
      des1En: `We are two friends on exchange in California and we decided to venture into social media marketing by working as freelancers for various clients. We quickly realized our potential and created our own agency, You Will See. The name of our company came from a funny moment where one of us wasn't very convinced of the idea and the other responded with "you will see!" At You Will See, we take pride in turning our passion into a thriving business and we believe that our commitment and dedication to our clients are the keys to our success.`,
      des2: `Le nom de notre entreprise est né d'un moment amusant 
      où l'un de nous n'était pas très convaincu de l'idée et l'autre 
      a répondu "tu verras!". Chez You Will See, nous sommes fiers 
      de transformer notre passion en une entreprise florissante 
      et nous sommes convaincus que notre engagement et 
      notre dévouement envers nos clients sont les clés de 
      notre succès.`,
      des2En: ``,

      img: `assets/main/about-us-1.svg`,
    },
    {
      titleEn: `Who are we ?`,
      des1: `Nous avons mis en place une stratégie efficace en nous 
      concentrant sur ce que nous faisons de mieux : la publicité 
      payante pour une seule industrie. En nous spécialisant dans 
      le marketing des réseaux sociaux, nous sommes déterminés 
      à aider les entreprises à réussir dans cet univers en constante 
      évolution.`,
      des2: `Nous sommes heureux de vous accueillir chez You Will See et 
      nous sommes impatients de travailler avec vous pour vous aider 
      à atteindre vos objectifs de marketing sur les réseaux sociaux.`,
      title: `Qui sommes-nous ?`,
      des1En: `We have implemented an effective strategy by focusing on what we do best: paid advertising for a single industry. By specializing in social media marketing, we are determined to help businesses succeed in this constantly evolving universe. We are happy to welcome you to You Will See and we look forward to working with you to help you achieve your social media marketing goals.`,
      des2En: ``,
      img: `assets/main/about-us-2.svg`,
    },
  ];
  users: any[] = [
    `Étan : Concepteur graphique`,
    `Simona : Responsable de la stratégie de contenu`,
    `Sandra : Analyste de données`,
    `Alex : Spécialiste en médias sociaux`,
    `Ça pourrait être toi, envoie nous ton CV`,
  ];
}
