export enum Priority {
  HIGH = 'high',
  LOW = 'low',
}

export interface CreateBoard {
  email: string;
  userId: string;
  title: string;
  description: string;
  priority: Priority;
}
