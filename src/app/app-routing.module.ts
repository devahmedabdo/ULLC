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
      titleEn: `Reach excellence and surpass your competition!`,
      desEn: `Discover our digital advertising offer and join the future of online communication. We are experts in Social Ads and can help you increase your online visibility and boost your sales through our unique approach that combines high-performing creatives and advanced media buying methods. Don't miss this opportunity to grow your business - contact us now to learn more.`,
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
      titleEn: `Reach a massive audience of over 2.8 billion 
      users with our unique approach.`,
      desEn: `At You Will See, we are experts in digital advertising and understand 
      that Facebook Ads is a powerful tool to reach a massive audience 
      of over 2.8 billion monthly users. With our unique approach combining 
      high-performing creatives and advanced media buying methods, we 
      can help you reach new potential customers and grow your online 
      sales. We use highly advanced tools to track and recycle relevant 
      keywords for your business, and we are confident in our ability to 
      help you generate quality leads and acquire new customers.`,
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
      titleEn: `Let us help you succeed with Facebook 
      Ads and maximize your results 
      through our best practices and 
      dedicated team.`,
      desEn: `Contact us at You Will See now to discover how our Facebook Ads offering can take your online business to new heights. We are here to help you maximize your results, using the best practices and most advanced tools to achieve your digital advertising goals on Facebook. With our expertise in digital advertising, you can join the future of digital advertising today and we are here to show you how. So don't wait any longer, let us help you succeed with Facebook Ads.`,
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
      titleEn: `Reach excellence and surpass your competition!`,
      desEn: `Discover our digital advertising offer and join the future of online communication. We are experts in Social Ads and can help you increase your online visibility and boost your sales through our unique approach that combines high-performing creatives and advanced media buying methods. Don't miss this opportunity to grow your business - contact us now to learn more.`,
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
      titleEn: `Increase your visibility and boost your sales with our Instagram Ads offer.`,
      desEn: `At our company, our Instagram Ads offering combines high-performing creatives with advanced media buying methods to increase your online visibility and boost your sales. More than half of in-store purchases are influenced by online advertising, so don't miss out on this opportunity to grow your business through our targeted online advertising campaigns.`,
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
      titleEn: `Generate quality leads and acquire new clients with our expertise in Instagram Ads digital advertising.`,
      desEn: `We are experts in digital advertising and we are confident in our ability to help you generate high-quality leads and acquire new customers through our unique approach. With more than 81% of French people regularly buying online, it's time to join the future of digital advertising now. Contact our agency to discover how our Instagram Ads offering can help skyrocket your online business.`,
    },
  ],
  youtube: [
    {
      title: `Atteignez l'excellence et surpasser 
      votre concurrence !`,
      des: `Découvrez notre offre de publicité digitale et rejoignez l'avenir de la communication en ligne. Nous sommes des experts en Social Ads et nous pouvons vous aider à augmenter votre visibilité en ligne et à booster vos ventes grâce à notre approche unique qui combine des créations  performantes et des méthodes de media buying avancées. Ne manquez pas cette opportunité de faire croître votre entreprise - contactez-nous dès maintenant pour en 
      savoir plus.`,
      img: `../../../assets/services/service-img-1.svg`,
      titleEn: `Reach excellence and surpass your competition!`,
      desEn: `Discover our digital advertising offer and join the future of online communication. We are experts in Social Ads and can help you increase your online visibility and boost your sales through our unique approach that combines high-performing creatives and advanced media buying methods. Don't miss this opportunity to grow your business - contact us now to learn more.`,
    },
    {
      title: `Notre expertise en publicité digitale 
      à votre service pour des campagnes 
      publicitaires performantes sur YouTube. `,
      des: `Nous sommes une agence de publicité numérique spécialisée dans la publicité sur YouTube. Chez You Will See, nous disposons d'une équipe d'experts en publicité digitale qui travaille en collaboration avec des experts de l'industrie pour proposer des stratégies publicitaires personnalisées et performantes sur YouTube Ads. Nous nous engageons à maximiser les résultats de nos clients en matière de publicité sur YouTube.`,
      img: `../../../assets/services/YouTube.svg`,
      titleEn: `Our expertise in digital advertising at your service for high-performing advertising campaigns on YouTube.`,
      desEn: `We are a digital advertising agency specialized in advertising on YouTube. At You Will See, we have a team of digital advertising experts who work in collaboration with industry experts to provide customized and high-performing advertising strategies on YouTube Ads. We are committed to maximizing our clients' results in advertising on YouTube.`,
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
      titleEn: `Customized advertising strategies to maximize your success on YouTube Ads`,
      desEn: `By working with us, our clients benefit from a dedicated team committed to their success and always ready to help them achieve their advertising goals on YouTube. We stay at the forefront of the latest industry trends to offer our clients increasingly effective and efficient advertising campaigns on YouTube. At You Will See, our priority is the success of our clients through quality digital advertising expertise.`,
    },
  ],
  google: [
    {
      title: `Atteignez l'excellence et surpasser 
      votre concurrence !`,
      des: `Découvrez notre offre de publicité digitale et rejoignez l'avenir de la communication en ligne. Nous sommes des experts en Social Ads et nous pouvons vous aider à augmenter votre visibilité en ligne et à booster vos ventes grâce à notre approche unique qui combine des créations  performantes et des méthodes de media buying avancées. Ne manquez pas cette opportunité de faire croître votre entreprise - contactez-nous dès maintenant pour en 
      savoir plus.`,
      img: `../../../assets/services/service-img-1.svg`,
      titleEn: `Reach excellence and surpass your competition!`,
      desEn: `Discover our digital advertising offer and join the future of online communication. We are experts in Social Ads and can help you increase your online visibility and boost your sales through our unique approach that combines high-performing creatives and advanced media buying methods. Don't miss this opportunity to grow your business - contact us now to learn more.`,
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
      titleEn: `Customized and precise ads with Google Ads - You Will See, your digital advertising partner.`,
      desEn: `At You Will See, we are experts in digital advertising and use Google Ads to help our clients reach their target audience with precision. We create customized ads based on their marketing objectives, using different formats such as text ads, display ads, and video ads. With our team of experts, we can track and analyze the performance of their advertising campaigns in real-time to adjust bids and keywords to optimize results.`,
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
      titleEn: `Maximize your advertising budget with You Will See and achieve optimal results on Google Ads.`,
      desEn: `By working with us, you benefit from personalized support to find the most effective bids for your business while maximizing your advertising budget. We are here to help you increase your online visibility, reach new potential customers, and achieve your digital advertising goals on Google. Trust our expertise to achieve optimal and cost-effective results for your business.`,
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
