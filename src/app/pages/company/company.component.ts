import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Company } from '../../models/company/company';
import { CommonModule } from '@angular/common';
import { CompanySummaryComponent } from '../../components/company-summary/company-summary.component';
import { TitleValueFieldComponent } from '../../components/title-value-field/title-value-field.component';
import { RouterLink } from '@angular/router';
import { Officer } from '../../models/officer/officer';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    CompanySummaryComponent,
    TitleValueFieldComponent,
    RouterLink,
  ],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent implements OnInit {
  @Input() companyId!: number;

  public isLoading: boolean = true;
  public companyView: boolean = true;
  public officersView: boolean = false;
  public companyDetails: Company | null = null;
  public companyOfficers: Officer[] | null = null;

  constructor(private apiService: ApiService) {}

  public ngOnInit(): void {
    this.apiService
      .searchCompanies(this.companyId.toString())
      .subscribe((result) => {
        const firstCompany = result.items?.at(0);

        if (firstCompany?.company_number == this.companyId) {
          this.companyDetails = firstCompany;
        }
        this.isLoading = false;
      });
  }

  public switchToOfficersView(): boolean {
    this.isLoading = true;
    this.companyView = false;
    this.officersView = true;

    this.apiService
      .searchCompanyOfficers(this.companyId)
      .subscribe((result) => {
        this.companyOfficers = result.items;
        this.isLoading = false;
      });

    return false;
  }
}
