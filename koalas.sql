CREATE TABLE koalaInfo(
id SERIAL PRIMARY KEY,
nameKoala VARCHAR(32) UNIQUE,
sex VARCHAR(1),
age int,
transfer VARCHAR(1),
notes VARCHAR(100));
INSERT INTO koalaInfo VALUES(1, 'Scotty', 'M', 4, 'Y', 'Born in Guatamala');
INSERT INTO koalaInfo VALUES(2, 'Jean', 'F', 5, 'Y', 'Allergic to lots of lava');
INSERT INTO koalaInfo VALUES(3, 'Ororo', 'F', 7, 'N', 'loves listening to Paula(Abdul)');
INSERT INTO koalaInfo VALUES(4, 'Logan', 'M', 15, 'N', 'loves the sauna');
INSERT INTO koalaInfo VALUES(5, 'Charlie', 'M', 9, 'Y', 'Favorite band is Nirvana');
INSERT INTO koalaInfo VALUES(6, 'Betsy', 'F', 4, 'Y', 'has a pet iguana'); 
