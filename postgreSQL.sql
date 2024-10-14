-- Ce fichier sera utilisé par Docker pour initialiser la base de données au démarrage
--comment faire pour executer des commande depuis vs code ?


-- Database: serveurweb

-- DROP DATABASE IF EXISTS serveurweb;

CREATE DATABASE serveurweb
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'French_France.1252'
    LC_CTYPE = 'French_France.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;


CREATE TABLE users (
id_user SERIAL PRIMARY KEY,
email VARCHAR(50) UNIQUE NOT NULL,
motdepasse TEXT NOT NULL CHECK (length(motdepasse) >= 8),
nom VARCHAR(30) NOT NULL,
prenom VARCHAR(30) NOT NULL
);

CREATE TABLE articles (
id_article SERIAL PRIMARY KEY,
nom TEXT NOT NULL,
prix DECIMAL(4,2) NOT NULL,
date_ajout DATE
);

CREATE TABLE commandes (
id_commande SERIAL PRIMARY KEY,
date_heure_commande TIMESTAMP,
montant DECIMAL (8,2),
id_user INT REFERENCES users(id_user),
id_article INT REFERENCES articles(id_article)
);

CREATE TABLE lignes_de_commande(
id_commande INT REFERENCES commandes(id_commande),
id_article INT REFERENCES articles(id_article),
quantite INT,
CONSTRAINT pk_lignes_de_commande PRIMARY KEY (id_commande, id_article)
);

CREATE TABLE moyen_de_paiement (
code VARCHAR(19) UNIQUE NOT NULL,
date_exp DATE NOT NULL,
cvc VARCHAR(3) NOT NULL,
id_user INT REFERENCES users(id_user)
);
