import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CompanySearchResults } from '../../models/company/compaySearchResults';
import { OfficerSearchResults } from '../../models/officer/officerSearchResults';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  public searchCompanies = (
    searchTerm: string,
  ): Observable<CompanySearchResults> => {
    return this.httpClient.get<CompanySearchResults>(
      '/api/Companies/v1/Search',
      {
        params: {
          Query: encodeURIComponent(searchTerm),
          ItemsPerPage: 20,
          StartIndex: 1,
        },
      },
    );
  };

  public searchCompanyOfficers = (
    companyId: number,
  ): Observable<OfficerSearchResults> => {
    return this.httpClient.get<OfficerSearchResults>(
      '/api/Companies/v1/Officers',
      {
        params: { CompanyNumber: encodeURIComponent(companyId) },
      },
    );
  };
}
