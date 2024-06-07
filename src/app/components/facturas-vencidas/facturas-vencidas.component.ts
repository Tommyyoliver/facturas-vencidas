import { Component } from '@angular/core';
import { Factura } from './model/factura.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-facturas-vencidas',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './facturas-vencidas.component.html',
  styleUrl: './facturas-vencidas.component.scss'
})
export class FacturasVencidasComponent {

  facturas: Factura[] = [
    { nombre: 'OESA COMERCIO E REPRESENTACOES S/A', soc: 'S070', factura: '9599600', demora: 220, st: 'G', clase: 'E7', fechaDoc: '20.06.2023', cPag: 'D030', importe: 5855.9, moneda: 'US' },
    { nombre: 'OESA COMERCIO E REPRESENTACOES S/A', soc: 'S070', factura: '96004914', demora: 137, st: 'G', clase: 'EV', fechaDoc: '30.06.2023', cPag: 'D030', importe: 137312.216, moneda: 'US' },
    { nombre: 'OESA COMERCIO E REPRESENTACOES S/A', soc: 'S070', factura: '96103497', demora: 140, st: 'G', clase: 'US', fechaDoc: '29.09.2023', cPag: 'D030', importe: 140403.152, moneda: 'US' },
    { nombre: 'OESA COMERCIO E REPRESENTACOES S/A', soc: 'S170', factura: '96108603', demora: 137, st: 'G', clase: 'E7', fechaDoc: '03.10.2023', cPag: 'D030', importe: 137666.268, moneda: 'US' },
  ]

  getTotalImporte() {
    return {
      total: this.facturas.reduce((total, factura) => total + factura.importe, 0),
      moneda: this.facturas[0].moneda
    }
  }

}
