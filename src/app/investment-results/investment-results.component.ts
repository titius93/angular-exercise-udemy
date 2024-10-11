import {Component, Input} from '@angular/core';
import {InvestmentResult} from '../investment-results.model';
import {CurrencyPipe, formatCurrency} from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input() results?: InvestmentResult[];
  protected readonly formatCurrency = formatCurrency;
}
