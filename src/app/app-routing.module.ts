import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ServicesComponent } from './views/services/services.component';
import { AboutUsComponent } from './views/about-us/about-us.component';
const services = {
  facebook: [
    {
      title: `Atteignez l'excellence et surpasser 
    votre concurrence !`,
      des: `Découvrez notre offre de publicité digitale et rejoignez l'avenir de la communication en ligne. Nous sommes des experts en Social Ads et nous pouvons vous aider à augmenter votre visibilité en ligne et à booster vos ventes grâce à notre approche unique qui combine des créations  performantes et des méthodes de media buying avancées. Ne manquez pas cette opportunité de faire croître votre entreprise - contactez-nous dès maintenant pour en 
    savoir plus.`,
      img: `../../../assets/services/service-img-1.svg`,
    },
    {
      title: `Atteignez une audience massive de plus de 2,8 
    milliards d'utilisateurs grâce à notre 
    approche unique.`,
      des: `Chez You Will See, nous sommes des experts en publicité digitale et nous 
    savons que Facebook Ads est un outil puissant pour atteindre une 
    audience massive de plus de 2,8 milliards d'utilisateurs mensuels. Grâce 
    à notre approche unique combinant des créations performantes et des 
    méthodes de media buying avancées, nous pouvons vous aider à 
    toucher de nouveaux clients potentiels et à développer vos ventes en 
    ligne. Nous utilisons des outils très avancés pour traquer et recycler les 
    mots-clés pertinents pour votre entreprise, et nous sommes confiants 
    dans notre capacité à vous aider à générer des leads de qualité et à 
    acquérir de nouveaux clients.`,
      img: `../../../assets/services/Facebook.svg`,
    },
    {
      title: `Laissez-nous vous aider à réussir avec 
      Facebook Ads et à maximiser vos résultats 
      grâce à nos meilleures pratiques et notre 
      équipe dédiée.`,
      des: `Contactez-nous chez You Will See dès maintenant pour 
    découvrir comment notre offre Facebook Ads peut faire 
    décoller votre entreprise en ligne. Nous sommes là pour 
    vous aider à maximiser vos résultats, en utilisant les 
    meilleures pratiques et les outils les plus avancés pour 
    atteindre vos objectifs de publicité digitale sur Facebook. 
    Avec notre expertise en matière de publicité digitale, 
    vous pouvez rejoindre l'avenir de la publicité digitale 
    dès maintenant et nous sommes là pour vous montrer 
    comment. Alors n'attendez plus, laissez-nous vous aider 
    à réussir avec Facebook Ads.`,
      img: `../../../assets/services/facebook-service.svg`,
    },
  ],
  instagram: [
    {
      title: `Atteignez l'excellence et surpasser 
      votre concurrence !`,
      des: `Découvrez notre offre de publicité digitale et rejoignez l'avenir de la communication en ligne. Nous sommes des experts en Social Ads et nous pouvons vous aider à augmenter votre visibilité en ligne et à booster vos ventes grâce à notre approche unique qui combine des créations  performantes et des méthodes de media buying avancées. Ne manquez pas cette opportunité de faire croître votre entreprise - contactez-nous dès maintenant pour en 
      savoir plus.`,
      img: `../../../assets/services/service-img-1.svg`,
    },
    {
      title: `Augmentez votre visibilité et boostez vos 
      ventes avec notre offre 
      Instagram Ads.`,
      des: `Chez nous, notre offre Instagram Ads combine des créations 
      performantes et des méthodes de media buying avancées pour 
      augmenter votre visibilité en ligne et booster vos ventes. Plus de la moitié
      des achats en magasin sont influencés par la publicité en ligne, ne 
      manquez pas cette opportunité de faire croître votre entreprise grâce à 
      nos campagnes de publicité en ligne ciblées.`,
      img: `../../../assets/services/Instagram.svg`,
    },
    {
      title: ` Générez des leads de qualité et acquérez 
      de nouveaux clients avec notre expertise 
      en publicité digitale Instagram Ads.`,
      des: `Nous sommes des experts en publicité digitale, et nous sommes 
      confiants dans notre capacité à vous aider à générer des leads 
      de qualité et à acquérir de nouveaux clients grâce à notre 
      approche unique. Avec plus de 81% des Français qui achètent 
      régulièrement en ligne, il est temps de rejoindre l'avenir de la 
      publicité digitale dès maintenant. Contactez notre agence pour 
      découvrir comment notre offre Instagram Ads peut aider à faire 
      décoller votre entreprise en ligne.`,
      img: `../../../assets/services/instagram-service.svg`,
    },
  ],
  youtube: [
    {
      title: `Atteignez l'excellence et surpasser 
      votre concurrence !`,
      des: `Découvrez notre offre de publicité digitale et rejoignez l'avenir de la communication en ligne. Nous sommes des experts en Social Ads et nous pouvons vous aider à augmenter votre visibilité en ligne et à booster vos ventes grâce à notre approche unique qui combine des créations  performantes et des méthodes de media buying avancées. Ne manquez pas cette opportunité de faire croître votre entreprise - contactez-nous dès maintenant pour en 
      savoir plus.`,
      img: `../../../assets/services/service-img-1.svg`,
    },
    {
      title: `Notre expertise en publicité digitale 
      à votre service pour des campagnes 
      publicitaires performantes sur YouTube. `,
      des: `Nous sommes une agence de publicité numérique spécialisée dans la publicité sur YouTube. Chez You Will See, nous disposons d'une équipe d'experts en publicité digitale qui travaille en collaboration avec des experts de l'industrie pour proposer des stratégies publicitaires personnalisées et performantes sur YouTube Ads. Nous nous engageons à maximiser les résultats de nos clients en matière de publicité sur YouTube.`,
      img: `../../../assets/services/YouTube.svg`,
    },
    {
      title: `Des stratégies publicitaires 
      personnalisées pour maximiser 
      votre succès sur YouTube Ads.`,
      des: `En travaillant avec nous, nos clients bénéficient d'une équipe 
      dédiée à leur succès et toujours prête à les aider à atteindre 
      leurs objectifs publicitaires sur YouTube. Nous restons 
      constamment à la pointe des dernières tendances de 
      l'industrie pour offrir à nos clients des campagnes publicitaires toujours plus performantes et efficaces sur YouTube. Chez You Will See, notre priorité est la réussite de nos clients grâce à une expertise en publicité digitale de qualité.
      `,
      img: `../../../assets/services/youtube-service.svg`,
    },
  ],
  google: [
    {
      title: `Atteignez l'excellence et surpasser 
      votre concurrence !`,
      des: `Découvrez notre offre de publicité digitale et rejoignez l'avenir de la communication en ligne. Nous sommes des experts en Social Ads et nous pouvons vous aider à augmenter votre visibilité en ligne et à booster vos ventes grâce à notre approche unique qui combine des créations  performantes et des méthodes de media buying avancées. Ne manquez pas cette opportunité de faire croître votre entreprise - contactez-nous dès maintenant pour en 
      savoir plus.`,
      img: `../../../assets/services/service-img-1.svg`,
    },
    {
      title: `Des annonces personnalisées et précises avec 
      Google Ads - You Will See, votre partenaire de publicité digitale.`,
      des: `Chez You Will See, nous sommes des experts en publicité digitale et nous 
      utilisons Google Ads pour aider nos clients à atteindre leur public cible 
      de manière très précise. Nous créons des annonces personnalisées en 
      fonction de leurs objectifs marketing, en utilisant différents formats tels 
      que les annonces texte, les annonces display et les annonces vidéo. 
      Grâce à notre équipe d'experts, nous pouvons suivre et analyser les 
      performances de leurs campagnes publicitaires en temps réel pour 
      ajuster les enchères et les mots-clés afin d'optimiser les résultats.`,
      img: `../../../assets/services/Google.svg`,
    },
    {
      title: `Maximisez votre budget publicitaire avec 
      You Will See et obtenez des résultats 
      optimaux sur Google Ads.`,
      des: `En travaillant avec nous, vous bénéficiez d'un accompagnement 
      personnalisé pour trouver les enchères les plus efficaces pour 
      votre entreprise, tout en maximisant votre budget publicitaire. 
      Nous sommes là pour vous aider à accroître votre visibilité en 
      ligne, toucher de nouveaux clients potentiels et atteindre vos 
      objectifs de publicité digitale sur Google. Faites confiance à 
      notre expertise pour obtenir des résultats optimaux et rentables 
      pour votre entreprise.`,
      img: `../../../assets/services/google-service.svg`,
    },
  ],
};

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    path: 'facebookservices',
    component: ServicesComponent,
    data: { services: services.facebook },
  },
  {
    path: 'instgramservices',
    component: ServicesComponent,
    data: { services: services.instagram },
  },
  {
    path: 'googleservices',
    component: ServicesComponent,
    data: { services: services.google },
  },
  {
    path: 'youtubeservices',
    component: ServicesComponent,
    data: { services: services.youtube },
  },
  { path: 'aboutus', component: AboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
