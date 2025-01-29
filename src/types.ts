import {
    Generated,
    Insertable,
    Selectable,
    Updateable
} from 'kysely'

export interface Database {
    exercise: ExerciseTable
    muscleGroup: MuscleGroupTable
}

export interface ExerciseTable {
    id: Generated<number>
    name: string
    category: 'Barbell' | 'Dumbbell' | 'Machine' | 'Bodyweight' | 'Cable' | 'Other'
}

export type Exercise = Selectable<ExerciseTable>
export type NewExercise = Insertable<ExerciseTable>
export type ExerciseUpdate = Updateable<ExerciseTable>

export interface MuscleGroupTable {
    exercise_id: number
    muscle: 'Chest' | 'Upper Chest' | 'Abs' | 'Quads' | 'Hamstrings' | 'Calves' | 'Forearms' | 'Biceps' | 'Triceps' | 'Traps' | 'Upper Back' | 'Lower Back' | 'Lats' | 'Rear Delt' | 'Side Delt' | 'Front Delt' | 'Neck' | 'Glutes'
}

export type MuscleGroup = Selectable<MuscleGroupTable>
export type NewMuscleGroup = Insertable<MuscleGroupTable>
export type MuscleGroupUpdate = Updateable<MuscleGroupTable>