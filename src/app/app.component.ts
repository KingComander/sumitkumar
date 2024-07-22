import { Component, OnInit } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { DevilComponent } from './devil/devil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import Typed from 'typed.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,DevilComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'sumitkumar';
  ngOnInit() {
    this.initializeScrollEffects();
    this.initializeTypedAnimations();
    this.initializeCarousel();
  }

  private initializeScrollEffects() {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 20) {
        navbar?.classList.add('sticky');
      } else {
        navbar?.classList.remove('sticky');
      }

      const scrollUpBtn = document.querySelector('.scroll-up-btn');
      if (window.scrollY > 500) {
        scrollUpBtn?.classList.add('show');
      } else {
        scrollUpBtn?.classList.remove('show');
      }
    });

    document.querySelector('.scroll-up-btn')?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'auto' });
      document.documentElement.style.scrollBehavior = 'auto';
    });

    document.querySelectorAll('.navbar .menu li a').forEach(link => {
      link.addEventListener('click', () => {
        document.documentElement.style.scrollBehavior = 'smooth';
      });
    });

    document.querySelector('.menu-btn')?.addEventListener('click', () => {
      document.querySelector('.navbar .menu')?.classList.toggle('active');
      document.querySelector('.menu-btn i')?.classList.toggle('active');
    });
  }

  private initializeTypedAnimations() {
    const options1 = {
      strings: ["Web Developer", "Designer", "Freelancer", "Gamer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };
    new Typed('.typing', options1);

    const options2 = {
      strings: ["Web Developer", "Game Developer", "Blogger", "Designer", "Freelancer", "Gamer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    };
    new Typed('.typing-2', options2);
  }

  private initializeCarousel() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      // Implement or integrate a vanilla JS carousel functionality here
      this.owlCarousel(carousel, {
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
          0: { items: 1, nav: false },
          600: { items: 2, nav: false },
          1000: { items: 3, nav: false }
        }
      });
    }
  }

  private owlCarousel(element: Element, options: any) {
    // Implement the functionality of the owlCarousel here
    console.log('Initialize carousel with options:', options);
  }
}
