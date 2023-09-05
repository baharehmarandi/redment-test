import {Component, Input} from '@angular/core';
import {Banner} from "../../pages/landing-page/landing-page.component";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  @Input() banner?: Banner;
  @Input() styleClass?: string;
}
