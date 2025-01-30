CREATE TABLE exercises (
    name TEXT NOT NULL PRIMARY KEY,
    category TEXT CHECK (category IN ('Barbell','Dumbbell','Machine','Bodyweight','Cable','Other'))
);

CREATE TABLE muscle_groups (
    exercise_name TEXT NOT NULL,
    muscle TEXT CHECK (muscle IN ('Chest','Upper Chest','Abs','Quads','Hamstrings','Calves','Forearms','Biceps','Triceps','Traps','Upper Back','Lower Back','Lats','Rear Delt','Side Delt','Front Delt','Neck','Glutes')),
    PRIMARY KEY (exercise_name, muscle),
    FOREIGN KEY (exercise_name) REFERENCES exercises(name)
);