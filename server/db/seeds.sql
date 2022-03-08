INSERT INTO users (id, first_name, last_name, email, password)
VALUES (1, "dylan", "honeyman", "dylan@gmail.com", "password123"),
       (2, "lauren", "bair", "lauren@gmail.com", "password123"),
       (3, "geoff", "honeyman", "geoff@gmail.com", "password123");

INSERT INTO listings (id, make, model, start_date, end_date, user_id)
VALUES (1, "kona", "hei hei", "2022-03-01", "2022-03-05", 1),
       (2, "trek", "evo", "2022-03-01", "2022-03-05", 2),
       (3, "all-city", "nature boy", "2022-03-01", "2022-03-05", 3);
