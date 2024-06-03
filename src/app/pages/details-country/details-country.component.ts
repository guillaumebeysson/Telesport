import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OlympicsService } from '../../services/olympics.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CountryParticipation } from '../../models/Olympics';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details-country',
  standalone: true,
  imports: [NgxChartsModule, RouterLink],
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css']
})
export class DetailsCountryComponent implements OnInit {
  countryName: string | null;
  barChartData: { name: string, value: number }[] | undefined;
  subscription!: Subscription;
  totalParticipations: number = 0;
  totalMedals: number = 0;
  totalAthletes: number = 0;

  constructor(private route: ActivatedRoute, private olympicsService: OlympicsService) {
    this.countryName = this.route.snapshot.paramMap.get('countryName');
  }

  ngOnInit(): void {
    this.subscription = this.olympicsService.getOlympicData().subscribe((data: CountryParticipation[]) => {
      const countryData = data.find(item => item.country === this.countryName);

      if (countryData) {
        this.barChartData = countryData.participations.map(participation => ({
          name: participation.year.toString(),
          value: participation.medalsCount
        }));
        this.totalParticipations = countryData.participations.length;
        this.totalMedals = this.olympicsService.getTotalMedals(countryData.participations);
        this.totalAthletes = this.olympicsService.getTotalAthletes(countryData.participations);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}