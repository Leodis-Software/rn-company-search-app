import { Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { CompanyComponent } from './pages/company/company.component';
import { AuthGuard } from './components/auth-guard/auth-guard.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'search', component: SearchComponent },
  {
    path: 'company/:companyId',
    component: CompanyComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
];
