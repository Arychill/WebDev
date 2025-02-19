import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  gallery: string[];
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  encodeURI(link: string): string {
    return encodeURIComponent(link);
  }

  products: Product[] = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-large'
      ],
      name: 'Apple iPhone 15 128GB',
      description: 'Новый iPhone 15 с отличной камерой и производительностью.',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h9b/84060368764958.png?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdf/h9b/84060368764958.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h47/h90/84060368830494.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hed/ha5/84060368896030.png?format=gallery-large'
      ],
      name: 'Apple Watch Ultra Series 2',
      description: 'Новые Apple Watch Ultra с GPS и Cellular.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/apple-watch-ultra-series-2-gps-cellular-alpine-loop-m-49-mm-serebristyi-sinii-113574842/'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h0a/84446711382046.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h43/h0a/84446711382046.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h96/84446711447582.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h96/84446711447582.jpg?format=gallery-large'
      ],
      name: 'Зарядное устройство Apple MNWP3ZM/A белый',
      description: 'Адаптер питания с двумя портами USB‑C мощностью 35 Вт позволяет одновременно заряжать два устройства, где бы вы ни находились — дома, в офисе или в пути.',
      rating: 5, 
      link:'https://kaspi.kz/shop/p/apple-mnwp3zm-a-belyi-114329574/?c=750000000&m=1705001&sr=3&qid=a10f0f312e0a0792181f35ed78bd05e3&isPromoted=true&ref=shared_link'
        },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h0a/84446711382046.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h79/hfe/87310100004894.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hdc/hcc/87310100103198.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h4d/h09/87310100037662.jpg?format=gallery-large'
      ],
      name: 'Вешалка напольная STARMAX STD-10, металл, 108x170 см, черный',
      description: 'товар может поставляться в разобранном виде (по поводу сборки уточняйте у продавца)',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-starmax-std-10-metall-108x170-sm-chernyi-120864539/?c=750000000&m=7282007&isPromoted=true&ref=shared_link'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/pbc/24800993.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9d/pbc/24800993.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p51/pbf/5295555.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p89/pbf/5295557.jpg?format=gallery-large'
      ],
      name: 'Клавиатура Ajazz AK820 Max черный',
      description: 'Беспроводная механическая клавиатура Ajazz AK820 Max имеет более удобный и обновленный дизайн по сравнению с AK820 Pro. Благодаря закругленной форме и обновленной ручке эта клавиатура предоставляет вам больше возможностей.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-max-chernyi-119248134/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h93/h72/64377059409950.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hda/h07/80523585847326.png?format=gallery-large'
      ],
      name: 'Зарядное устройство Apple 18W USB-C Power Adapter USB Type-C белый',
      description: 'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000&m=319001&sr=1&qid=a10f0f312e0a0792181f35ed78bd05e3&isPromoted=true&ref=shared_link'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h15/84801274847262.jpg',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/he4/h18/85956872077342.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p5e/p44/19103010.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7b/p44/19103011.png?format=gallery-large'
      ],
      name: 'Мышь MCHOSE AX5 Pro Max белый',
      description: 'Корпус из Магниевого сплава. Оптические микропереключатели TTC Optical/OMRON Optical. Чип Nordic-N52840/Realtek. Сенсор Pixart paw 3395. Роллер TTC Gold Wheel ScrollWhell.',
      rating: 4.4,
      link: 'https://kaspi.kz/shop/p/mchose-ax5-pro-max-belyi-119159443/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/h40/85558868377630.png?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd5/h40/85558868377630.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h54/h95/85558868443166.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/hda/85558868508702.png?format=gallery-large'
      ],
      name: 'Отпариватель Mijia Handheld Ironing Machine 2 MJGTJ02LF белый',
      description: 'Отпариватель для одежды ручной Xiaomi Mijia Handheld Ironing Machine Steamer MJGTJ01LF 1300W - это удобное и эффективное устройство, которое позволит вам легко и быстро придать своей одежде свежий и аккуратный вид.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/mijia-handheld-ironing-machine-2-mjgtj02lf-belyi-117857318/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/hfc/86068751499294.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h24/hfc/86068751499294.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3d/86068751564830.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h24/hfc/86068751499294.jpg?format=gallery-large'
      ],
      name: 'Mercedes-Benz Mercedes Benz 1781 8x17/5x112 D66.6 ET25 4 диска серебристый',
      description: 'Литые диски',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/mercedes-benz-mercedes-benz-1781-8x17-5x112-d66-6-et25-4-diska-serebristyi-119618164/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/h15/84801274847262.jpg',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/h76/67964597043230.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h97/h86/67964597764126.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/h76/67964597043230.jpg?format=gallery-large'
      ],
      name: 'Постоянный свет Ulanzi VL120RGB',
      description: 'VL120RGB, cиликоновый рассеиватель, кабель Type-C, адаптер для крепления холодного башмака',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/ulanzi-vl120rgb-108477288/?0&c=750000000&ref=shared_link'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-large',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/h67/63803862581278.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h20/he1/63803865792542.jpg?format=gallery-large'
      ],
      name: 'Пылесос Deerma DX700 белый',
      description: 'Пылесос Deerma DX700 – стильный, компактный и удобный пылесос, конструкция которого предусматривает использование в качестве портативного ручного или помощника для эффективной уборки напольных покрытий.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000'
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd4/h94/63804412854302.jpg?format=gallery-medium'
      ],
      name: 'Стиральная машина LG F2J3NS0W белый',
      description: 'Глубина стиральной машины LG F2J3NS0W всего 44 см, благодаря чему она поместится даже в небольшую ванную комнату.',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/lg-f2j3ns0w-belyi-3601511/?c=750000000'
    }
    
  ];
}