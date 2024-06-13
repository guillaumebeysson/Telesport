import { Participation } from "./Participation";

export interface CountryParticipation {
    id: number;
    country: string;
    participations: Participation[];
}