import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  // constructor() {}

  // services: any[] = [
  //   {
  //     title: ``,
  //     des: ``,
  //     img: ``,
  //   },
  // ];
  services: any[] = [
    {
      title: `PPC Advertising`,
      des: `Increase your hotel's online visibility and attract 
      potential guests instantly with our targeted 
      Pay-Per-Click (PPC) advertising campaigns. 
      We create engaging ads, select the right keywords 
      and optimize your bidding strategy, ensuring 
      maximum ROI and a steady flow of high-quality 
      leads to your website.`,
    },
    {
      title: `SEARCH ENGINE OPTIMIZATION`,
      des: `Improve your hotel's organic search rankings with our 
      expert Search Engine Optimization (SEO) services. 
      We analyze your website, optimize its structure and 
      content, and build high-quality backlinks to boost 
      your online presence. With our SEO strategies, your 
      hotel will rank higher on search engines, driving more 
      organic traffic and increasing your chances of 
      attracting new guests.`,
    },
    {
      title: `Social Media Marketing`,
      des: `Enhance your hotel's online reputation and engage 
      with potential guests through our Social 
      Media Marketing services. We create and manage 
      your hotel's social media profiles, develop and share 
      captivating content, and interact with your audience 
      fostering a strong online community around your 
      brand. Our social media strategies not only increase 
      brand awareness but also help drive direct bookings.`,
    },
    {
      title: `Email Marketing`,
      des: `Nurture relationships with your guests and keep them 
      coming back with our personalized Email Marketing 
      campaigns. We create compelling newsletters 
      promotions, and automated email sequences 
      tailored to your hotel's unique identity and your 
      guests' preferences. Our Email Marketing services 
      help you stay connected with your audience 
      increase guest loyalty, and boost repeat bookings.`,
    },
    {
      title: `FUNNELS`,
      des: `Supercharge your hotel's booking potential with our 
      optimized marketing funnels. We craft a seamless 
      journey from targeted ads to smooth booking 
      processes, ensuring higher conversions, increased 
      occupancy rates, and a thriving hotel business.`,
    },
  ];
  constructor(
    private location: Location,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activeRoute.data.subscribe((data: any) => {
      this.services = data.services;
      console.log(data);
    });
    // console.log(this.location.getState());
  }
}
