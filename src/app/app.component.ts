import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  images = [
    {
      url: 'bgs/bg1.png',
      name: 'Hamburguesa Clásica',
    },
    {
      url: 'bgs/bg2.png',
      name: 'Toci Papas',
    },
    {
      url: 'bgs/bg3.png',
      name: 'Perro Clásico',
    },
  ];
  currentIndex = 0;

  left = [
    {
      name: 'Hamburguesas',
      items: [
        {
          name: 'Clásica',
          price: '6',
          disclaimer: '',
          top: true,
        },
        {
          name: 'Chisto burguer',
          price: '10',
          disclaimer: '',
          top: false,
        },
        {
          name: 'tex mex',
          price: '9',
          disclaimer: '',
          top: false,
        },
        {
          name: 'pulled pork',
          price: '10',
          disclaimer: '',
          top: false,
        },
        {
          name: 'mar y tierra',
          price: '12',
          disclaimer: '',
          top: false,
        },
      ],
    },
    {
      name: 'Perros Calientes',
      items: [
        {
          name: 'clásico',
          price: '2',
          disclaimer: '',
          top: false,
        },
        {
          name: 'playero',
          price: '3',
          disclaimer: '',
          top: false,
        },
        {
          name: 'chisto-perro',
          price: '3',
          disclaimer: '',
          top: false,
        },
        {
          name: 'pulled pork',
          price: '4.5',
          disclaimer: '',
          top: false,
        },
        {
          name: 'bulldog',
          price: '4.5',
          disclaimer: '',
          top: true,
        },
        {
          name: 'camarones',
          price: '5',
          disclaimer: '',
          top: false,
        },
      ],
    },
  ];

  right = [
    {
      name: 'Salchipapas',
      items: [
        {
          name: 'clásica',
          price: '6',
          disclaimer: '',
          top: false,
        },
        {
          name: 'mexicanas',
          price: '10',
          disclaimer: '',
          top: false,
        },
        {
          name: 'toci papas',
          price: '9',
          disclaimer: '',
          top: false,
        },
        {
          name: 'chisto papas',
          price: '9',
          disclaimer: '',
          top: true,
        },
      ],
    },

    {
      name: 'Corndogs',
      items: [
        {
          name: 'relleno',
          price: '2.5',
          disclaimer: '',
          top: false,
        },
      ],
      extras: [
        'Miel mostaza',
        'ajo',
        'pepinillos',
        'cebolla encurtida',
        'bbq',
        'mermelada de chistorra',
      ],
    },

    {
      name: 'Bebidas',
      items: [
        {
          name: 'refresco',
          price: '2.5',
          disclaimer: '(lata)',
          top: false,
        },
        {
          name: 'cerveza',
          price: '1.5',
          disclaimer: '(nacional)',
          top: false,
        },
      ],
    },
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // cada 15 segundos
  }
}
