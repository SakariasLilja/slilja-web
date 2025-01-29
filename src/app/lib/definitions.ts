export type Exercise = {
    id: number;
    name: string;
    category: 'Barbell' | 'Dumbbell' | 'Machine' | 'Bodyweight' | 'Cable' | 'Other';
    muscleGroups: string[]; 
}