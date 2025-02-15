CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE exercises (
    user_id INTEGER,
    name TEXT NOT NULL,
    category TEXT CHECK (category IN ('Barbell','Dumbbell','Machine','Bodyweight','Cable','Other')),
    PRIMARY Key (user_id, name),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE muscle_groups (
    user_id INTEGER,
    exercise_name TEXT NOT NULL,
    muscle TEXT CHECK (muscle IN ('Chest','Upper Chest','Abs','Quads','Hamstrings','Calves','Forearms','Biceps','Triceps','Traps','Upper Back','Lower Back','Lats','Rear Delt','Side Delt','Front Delt','Neck','Glutes')),
    PRIMARY KEY (user_id, exercise_name, muscle),
    FOREIGN KEY (user_id, exercise_name) REFERENCES exercises(user_id, name)
);

CREATE UNIQUE INDEX ON users(lower(email));