import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  slides: any[] = [
    {
      title: `Qui sommes-nous ?`,
      des1: `Nous sommes deux amis en échange en Californie et nous 
      avons décidé de nous lancer dans le marketing des réseaux 
      sociaux en travaillant en freelance pour divers clients. Nous 
      avons rapidement réalisé notre potentiel et avons créé notre 
      propre agence, You Will See.`,
      des2: `Le nom de notre entreprise est né d'un moment amusant 
      où l'un de nous n'était pas très convaincu de l'idée et l'autre 
      a répondu "tu verras!". Chez You Will See, nous sommes fiers 
      de transformer notre passion en une entreprise florissante 
      et nous sommes convaincus que notre engagement et 
      notre dévouement envers nos clients sont les clés de 
      notre succès.`,
      img: `assets/main/about-us-1.svg`,
    },
    {
      title: `Qui sommes-nous ?`,
      des1: `Nous avons mis en place une stratégie efficace en nous 
      concentrant sur ce que nous faisons de mieux : la publicité 
      payante pour une seule industrie. En nous spécialisant dans 
      le marketing des réseaux sociaux, nous sommes déterminés 
      à aider les entreprises à réussir dans cet univers en constante 
      évolution.`,
      des2: `Nous sommes heureux de vous accueillir chez You Will See et 
      nous sommes impatients de travailler avec vous pour vous aider 
      à atteindre vos objectifs de marketing sur les réseaux sociaux.`,
      img: `assets/main/about-us-2.svg`,
    },
  ];
  users: any[] = [
    `Étan : Concepteur 
    graphique`,
    `Simona : Responsable 
    de la stratégie de 
    contenu`,
    `Sandra : Analyste 
    de données`,
    `Alex : Spécialiste en 
    médias sociaux`,
    `Ça pourrait être toi, envoie nous ton CV`,
  ];
}
