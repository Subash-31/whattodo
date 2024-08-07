export type CategoryType = "" | "health" | "work" | "bills" | "cleaning" | "other" | "food"|"exercise"|"entertainment"|"education"|"travel"|"social"|"finance"|"home"|"pets";

export interface Task {
    id?: number;
    content: string;
    category?: CategoryType | null;
    isUrgent: boolean;
    doneDate?: Date | null;
    name?: string; // Add this if you need it
    createdAt?: Date; // Add this if you need it
    label?: number; // Add this if you need it
    updatedAt?: Date; // Add this if you need it
    userId?: number; // Add this if you need it
    categoriesId?: number; // Add this if you need it
    deadlines?: Date | null;// Add this if you need it
    status?: string; // Add this if you need it
    deletedAt?: Date | null; // Add this if you need it// Add this if you need it
    tenant?: string; // Add this if you need it
    createdAtSystem?: Date; // Add this if you need it
    updatedAtSystem?: Date; // Add this if you need it
    permissions?: any[]; // Add this if you need it
    databaseId?: string; // Add this if you need it
    collectionId?: string; // Add this if you need it
}
