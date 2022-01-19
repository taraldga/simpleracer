export interface ParticipantSerializer {
    id?: number;
    name: string;
    race: 1 | 2;
    email: string;
    start_nr?: number;
}

export interface ResultSerializer {
    id?: number;
    created_at?: string;
    updated_at?: string;
    start?: string | null;
    finish?: string | null;
    participant: 1 | 2;
    race: 1 | 2;
}

export interface RaceSerializer {
    id?: number;
    name: string;
    description: string;
    start_time: string;
    participant_set?: any[];
}

export interface RaceListSerializer {
    id?: number;
    name: string;
    description: string;
    start_time: string;
}

