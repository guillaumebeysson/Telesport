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
}