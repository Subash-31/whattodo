export type CategoryType = "" | "health" | "work" | "bills" | "cleaning" | "other" | "food"|"exercise"|"entertainment"|"education"|"travel"|"social"|"finance"|"home"|"pets";

export interface Task {
    id?: number;
    content: string;
    category?: CategoryType | null;
    isUrgent: boolean;
    doneDate: Date | null;
}