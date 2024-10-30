import { Component, Input } from '@angular/core';
import { Company } from '../../models/company/company';

@Component({
  selector: 'app-company-summary',
  standalone: true,
  imports: [],
  templateUrl: './company-summary.component.html',
  styleUrl: './company-summary.component.scss',
})
export class CompanySummaryComponent {
  @Input() companyDetails!: Company;
}
