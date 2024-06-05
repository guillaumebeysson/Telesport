import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DetailsCountryComponent } from './pages/details-country/details-country.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'country-details/:countryName', component: DetailsCountryComponent },
    { path: '**', component: NotFoundComponent }
];
