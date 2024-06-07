import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FacturasVencidasComponent } from './components/facturas-vencidas/facturas-vencidas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FacturasVencidasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'facturas-vencidas';
}
