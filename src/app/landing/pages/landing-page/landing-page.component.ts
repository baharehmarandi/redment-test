import {Component, OnInit} from '@angular/core';

export interface Banner {
  id: number;
  smallTitle?: string;
  title?: string;
  image?: string;
  paragraph?: string;
  linkText?: string;
}
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  banner1?: Banner;
  banner2?: Banner;
  ngOnInit() {

    this.banner1 = {
        id: 0,
        smallTitle: "TOP NOTCH AUSTRALIA’S FLOORING BRAND",
        title: `<h3 style="font-size: 40px">Enhance your interior Just with <span style="color: #6F1AB6; font-size:40px">CalmWalk</span></h3>`,
        image: "/assets/images/Rectangle 4.png",
        paragraph: '"We are a distinguished provider in the industry of high-quality exceptional tiles. Knowing the expectation of the customers and understanding their personalities, we have succeeded in providing striking varieties of tiles that look astonishing in every way."',
        linkText: "Learn more"
    }

      this.banner2 = {
        id: 1,
        smallTitle: "",
        title: `<h3 style="font-size: 40px"><span style="color: #6F1AB6; font-size:40px">Pet-friendly</span> Along The Whole Value Chain</h3>`,
        image: "/assets/images/Rectangle 18.png",
        paragraph: '"Our products are sourced with complete consideration for the environment and with healthy living in mind. We choose manufacturing partners that match these non-negotiable parameters. Preference Floors products are manufactured using advanced production technology utiltising sustainable non-toxic materials including raw materials & final coatings, this delivers an ethical product framework from beginning to end."',
        linkText: "How we do that"
    }
  }

}
