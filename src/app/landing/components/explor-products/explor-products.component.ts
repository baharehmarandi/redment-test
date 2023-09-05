import {Component, OnInit} from '@angular/core';

export interface Products {
  id: number;
  product: {
    title: string;
    image: string;
    tag?: string;
  }[]
}

@Component({
  selector: 'app-explor-products',
  templateUrl: './explor-products.component.html',
  styleUrls: ['./explor-products.component.scss']
})
export class ExplorProductsComponent implements OnInit {


  products?: Products[];

  ngOnInit() {

    this.products =[
      {id: 0,
        product: [
          {title: 'Lavender Grey', image: '/assets/images/Parquet.png', tag: 'Popular'},
          {title: 'Hazelnut', image: '/assets/images/Parquet1.png', tag: ''},
          {title: 'Light Goldenrod', image: '/assets/images/Parquet1.png', tag: ''},
          {title: 'Kobicha', image: '/assets/images/Parquet4.png', tag: 'Top Selling'},
        ]
      },
      {id: 1,
        product: [
          {title: 'Lavender Grey', image: '/assets/images/Parquet.png', tag: 'Popular'},
          {title: 'Kobicha', image: '/assets/images/Parquet4.png', tag: 'Top Selling'},
          {title: 'Light Goldenrod', image: '/assets/images/Parquet1.png', tag: ''},
          {title: 'Hazelnut', image: '/assets/images/Parquet3.png', tag: ''},
        ]
      },
      {id: 3,
        product: [
          {title: 'Kobicha', image: '/assets/images/Parquet4.png', tag: 'Top Selling'},
          {title: 'Hazelnut', image: '/assets/images/Parquet3.png', tag: ''},
          {title: 'Light Goldenrod', image: '/assets/images/Parquet1.png', tag: ''},
          {title: 'Lavender Grey', image: '/assets/images/Parquet.png', tag: 'Popular'},
        ]
      }
    ]
  }
}
