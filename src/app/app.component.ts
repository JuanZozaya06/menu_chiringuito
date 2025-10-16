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
          price: '1',
          disclaimer: '',
          top: true,
        },
        {
          name: 'Chisto burguer',
          price: '1',
          disclaimer: '',
          top: false,
        },
        {
          name: 'tex mex',
          price: '1',
          disclaimer: '',
          top: false,
        },
        {
          name: 'pulled pork',
          price: '1',
          disclaimer: '',
          top: false,
        },
        {
          name: 'mar y tierra',
          price: '1',
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
          price: '1',
          disclaimer: '',
          top: false,
        },
        {
          name: 'playero',
          price: '2',
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
          price: '4',
          disclaimer: '',
          top: false,
        },
        {
          name: 'bulldog',
          price: '5',
          disclaimer: '',
          top: true,
        },
        {
          name: 'camarones',
          price: '6',
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
          price: '1',
          disclaimer: '',
          top: false,
        },
        {
          name: 'mexicanas',
          price: '1',
          disclaimer: '',
          top: false,
        },
        {
          name: 'toci papas',
          price: '1',
          disclaimer: '',
          top: false,
        },
        {
          name: 'chisto papas',
          price: '1',
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
          price: '1',
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
          price: '1',
          disclaimer: '(lata)',
          top: false,
        },
        {
          name: 'cerveza',
          price: '1',
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
