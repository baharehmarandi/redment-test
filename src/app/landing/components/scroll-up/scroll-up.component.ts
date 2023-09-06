import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-up',
  templateUrl: './scroll-up.component.html',
  styleUrls: ['./scroll-up.component.scss']
})
export class ScrollUpComponent {

  onGoUp(){
    window.scrollTo({
      top:0,
      left:0,
      behavior: "smooth"
    })
  }
}
