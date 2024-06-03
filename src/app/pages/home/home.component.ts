import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Router } from '@angular/router';
import { CountryParticipation } from '../../models/Olympics';
import { OlympicsService } from '../../services/olympics.service';
import { TooltipData } from '../../models/TooltipData';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgxChartsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy { //dans angular 18 il est inutile d'implémenter OnInt et OnDestroy
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
  subscription!: Subscription;

  constructor(private olympicsService: OlympicsService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.olympicsService.getOlympicData().subscribe(data => {
      this.olympicData = data
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getTooltipText(data: TooltipData): string {
    return `${data.data.name} <br> <i class="fa-solid fa-medal"></i> <strong>${data.data.value}</strong>`;
  }

  getCountryMedals(data: CountryParticipation[]): { name: string, value: number }[] {
    return this.olympicsService.getCountryMedals(data);
  }

  getUniqueYearsCount(data: CountryParticipation[]): number {
    return this.olympicsService.getUniqueYearsCount(data);
  }

  getCountryCount(data: CountryParticipation[]): number {
    return this.olympicsService.getCountryCount(data);
  }

  onSelect(data: { name: string }): void {
    this.router.navigateByUrl(`/country-details/${data.name}`)
  }

}
