CREATE TABLE exercises (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT CHECK (category IN ('Barbell','Dumbbell','Machine','Bodyweight','Cable','Other'))
);

CREATE TABLE muscle_groups (
    exercise_id INTEGER NOT NULL,
    muscle TEXT CHECK (muscle IN ('Chest','Upper Chest','Abs','Quads','Hamstrings','Calves','Forearms','Biceps','Triceps','Traps','Upper Back','Lower Back','Lats','Rear Delt','Side Delt','Front Delt','Neck','Glutes')),
    PRIMARY KEY (exercise_id, muscle),
    FOREIGN KEY (exercise_id) REFERENCES exercises(id)
);