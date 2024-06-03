import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryParticipation } from '../models/Olympics';

@Injectable({
    providedIn: 'root'
})
export class OlympicsService {
    private jsonUrl = '/mock/olympic.json';

    constructor(private http: HttpClient) { }

    getOlympicData(): Observable<CountryParticipation[]> {
        return this.http.get<CountryParticipation[]>(this.jsonUrl);
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
        return data.length;
    }

    getTotalMedals(participations: { medalsCount: number }[]): number {
        return participations.reduce((sum, p) => sum + p.medalsCount, 0);
    }

    getTotalAthletes(participations: { athleteCount: number }[]): number {
        return participations.reduce((sum, p) => sum + p.athleteCount, 0);
    }
}