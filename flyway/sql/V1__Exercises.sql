CREATE TABLE users (
    email TEXT NOT NULL PRIMARY KEY,
    password TEXT NOT NULL
)

CREATE TABLE exercises (
    user TEXT NOT NULL,
    name TEXT NOT NULL,
    category TEXT CHECK (category IN ('Barbell','Dumbbell','Machine','Bodyweight','Cable','Other')),
    PRIMARY Key (user, name),
    FOREIGN KEY (user) REFERENCES users(email)
);

CREATE TABLE muscle_groups (
    user TEXT NOT NULL,
    exercise_name TEXT NOT NULL,
    muscle TEXT CHECK (muscle IN ('Chest','Upper Chest','Abs','Quads','Hamstrings','Calves','Forearms','Biceps','Triceps','Traps','Upper Back','Lower Back','Lats','Rear Delt','Side Delt','Front Delt','Neck','Glutes')),
    PRIMARY KEY (user, exercise_name, muscle),
    FOREIGN KEY (exercise_name) REFERENCES exercises(name),
    FOREIGN KEY (user) REFERENCES users(email)
);