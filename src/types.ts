import {
    Generated,
    Insertable,
    Selectable,
    Updateable
} from 'kysely'

export interface Database {
    users: UserTable
    exercises: ExerciseTable
    muscle_groups: MuscleGroupTable
}

export interface UserTable {
    id: Generated<number>
    email: string
    password: string
}

export type User = Selectable<UserTable>
export type NewUser = Insertable<UserTable>
export type UserUpdate = Updateable<UserTable>

export interface ExerciseTable {
    user_id: number
    name: string
    category: 'Barbell' | 'Dumbbell' | 'Machine' | 'Bodyweight' | 'Cable' | 'Other'
}

export type Exercise = Selectable<ExerciseTable>
export type NewExercise = Insertable<ExerciseTable>
export type ExerciseUpdate = Updateable<ExerciseTable>

export interface MuscleGroupTable {
    user_id: number
    exercise_name: string
    muscle: 'Chest' | 'Upper Chest' | 'Abs' | 'Quads' | 'Hamstrings' | 'Calves' | 'Forearms' | 'Biceps' | 'Triceps' | 'Traps' | 'Upper Back' | 'Lower Back' | 'Lats' | 'Rear Delt' | 'Side Delt' | 'Front Delt' | 'Neck' | 'Glutes'
}

export type MuscleGroup = Selectable<MuscleGroupTable>
export type NewMuscleGroup = Insertable<MuscleGroupTable>
export type MuscleGroupUpdate = Updateable<MuscleGroupTable>