import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';
import { WebpageComponent } from './webpage/webpage.component';
import { DevilComponent } from './devil/devil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WebpageComponent,RouterLink,DevilComponent,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sumitkumar';
}
