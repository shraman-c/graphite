import Dexie, { Table } from 'dexie';

export interface LocalFlashcard {
  id: string;
  subject_id: string;
  front: string;
  back: string;
  card_type: string;
  status: string;
  note_file_id?: string;
  next_review_at: string | null;
  interval: number;
  ease_factor: number;
  review_count: number;
}

export interface SyncQueueItem {
  id?: number;
  action: 'review' | 'edit' | 'delete';
  payload: any;
  created_at: string;
}

export class GraphiteDB extends Dexie {
  cards!: Table<LocalFlashcard, string>;
  syncQueue!: Table<SyncQueueItem, number>;

  constructor() {
    super('GraphiteLocalDB');
    this.version(1).stores({
      cards: 'id, subject_id, status, next_review_at',
      syncQueue: '++id, action, created_at'
    });
  }
}

export const db = new GraphiteDB();
export { GraphiteDB as CatalystDB };
