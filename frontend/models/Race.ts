export interface Participant {
  id?: number;
  name: string;
  race: number;
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
  participant_set?: Participant[];
}

export interface RaceListItem {
  id?: number;
  name: string;
  description: string;
  start_time: string;
}
