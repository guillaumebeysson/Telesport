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

    /**
     * Récupère les données présentent dans le json.
     * @returns {Observable<CountryParticipation[]>} Observable des participations par pays.
     */
    getOlympicData(): Observable<CountryParticipation[]> {
        return this.http.get<CountryParticipation[]>(this.jsonUrl);
    }

    /**
     * Calcule le noombre de médailles pour chaque pays
     * @param data Tableau de participations par pays
     * @returns nom du pays et nombre de médailles par pays sous forme de tableau
     */
    getCountryMedals(data: CountryParticipation[]): { name: string, value: number }[] {
        return data.map(country => ({
            name: country.country,
            value: country.participations.reduce((acc, p) => acc + p.medalsCount, 0)
        }));
    }

    /**
     * Calcule le nombre de participations par pays
     * @param data Tableau de participations par pays
     * @returns nombre de participations par pays
     */
    getUniqueYearsCount(data: CountryParticipation[]): number {
        const years = data.flatMap(country => country.participations.map(participation => participation.year));
        const uniqueYears = [...new Set(years)];
        return uniqueYears.length;
    }

    /**
     * Calcule le nombre de pays présents
     * @param data Tableau de participations par pays
     * @returns nombre de pays
     */
    getCountryCount(data: CountryParticipation[]): number {
        return data.length;
    }

    /**
     * Calcule le nombre total de médailles remportées pour chaque pays
     * @param participations Tableau représentant les médailles remportées lors de chaque édition
     * @returns nombre total de médailles par pays
     */
    getTotalMedals(participations: { medalsCount: number }[]): number {
        return participations.reduce((sum, p) => sum + p.medalsCount, 0);
    }

    /**
     * Calcule le nombre total d'athletes pour chaque pays
     * @param participations Tableau représentant le nombre d'athletes lors de chaque édition
     * @returns nombre total d'athletes par pays
     */
    getTotalAthletes(participations: { athleteCount: number }[]): number {
        return participations.reduce((sum, p) => sum + p.athleteCount, 0);
    }
}