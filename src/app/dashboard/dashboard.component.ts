import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryParticipation } from '../models/Olympics';
import { OlympicsService } from '../services/olympics.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgxChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  olympicData!: CountryParticipation[];

  view: [number, number] = [700, 400];
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  animation: boolean = false;
  legendPosition: string = 'below';
  maxLabelLength: number = 15;
  tooltipDisabled: boolean = false;

  constructor(private olympicsService: OlympicsService, private router: Router) { }

  ngOnInit(): void {
    this.olympicsService.getOlympicData().subscribe(data => {
      this.olympicData = data
    })
  }
  getTooltipText(data: any): string {
    return `${data.data.name} <br> <i class="fa-solid fa-medal"></i> <strong>${data.data.value}</strong>`;
  }

  getCountryMedals(data: CountryParticipation[]): { name: string, value: number }[] {
    return data.map(country => ({
      name: country.country,
      value: country.participations.reduce((acc, p) => acc + p.medalsCount, 0)
    }));
  }

  getUniqueYearsCount(data: CountryParticipation[]): number {
    const years = data.flatMap(country => country.participations.map(participation => participation.year));
    const uniqueYears = [...new Set(years)];
    return uniqueYears.length;
  }

  getCountryCount(data: CountryParticipation[]): number {
    return data.length
  }

  onSelect(data: { name: string }): void {
    this.router.navigateByUrl(`/${data.name}`)
  }


}
