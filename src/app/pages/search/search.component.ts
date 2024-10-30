import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { CompanySearchResults } from '../../models/company/compaySearchResults';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CompanyListComponent } from '../../components/company-list/company-list.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    MatButtonModule,
    MatProgressSpinnerModule,
    CompanyListComponent,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  public searchResults: CompanySearchResults | null = null;
  public isSearching: boolean = false;

  constructor(private apiService: ApiService) {}

  public searchCompanies = (searchTerm: string): void => {
    this.toggleSearching();

    this.apiService.searchCompanies(searchTerm).subscribe((results) => {
      this.searchResults = results;
      this.toggleSearching();
    });
  };

  private toggleSearching = (): void => {
    this.isSearching = !this.isSearching;
  };
}
