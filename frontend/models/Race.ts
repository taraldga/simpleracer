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
  participant: number;
  race: number;
}

export interface Race {
  id?: number;
  name: string;
  description: string;
  start_time: string;
  participant_set?: any[];
}

export interface RaceListItem {
  id?: number;
  name: string;
  description: string;
  start_time: string;
}
