CREATE DATABASE draco2;

\c draco2;

CREATE TABLE publicacao(
    codigo SERIAL NOT NULL PRIMARY KEY,
    usuario VARCHAR(20) NOT NULL,
    conteudo TEXT NOT NULL,
    link TEXT NOT NULL
);

DROP TABLE publicacao;

INSERT INTO publicacao(usuario, conteudo, link) VALUES('pedro', 'oi', 'https://i.ibb.co/DtKygg5/frasco-mana.png');
SELECT * FROM publicacao;
DELETE FROM publicacao WHERE codigo = 1;
