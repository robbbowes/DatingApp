import { Photo } from './photo';

export interface Member {
    id: number;
    userName: string;
    gender: string;
    dateOfBirth: string;
    knownAs: string;
    created: string;
    lastActive: string;
    introduction: string;
    lookingFor: string;
    interests: string;
    city: string;
    country: string;
    photos: Photo[];
}
