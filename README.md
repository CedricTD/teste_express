# Test Express App

Un simple serveur Express.js pour tester les fonctionnalités de base.

## Installation

1. Assurez-vous d'avoir Node.js installé.
2. Clonez ou téléchargez ce projet.
3. Installez les dépendances :
   ```
   npm install
   ```

## Utilisation

1. Démarrez le serveur :
   ```
   npm start
   ```
   ou
   ```
   node index.js
   ```

2. Le serveur sera accessible sur `http://localhost:7000` (ou le port défini dans `.env`).

## Routes

- `GET /` : Retourne "hello world"
- `GET /health` : Vérification de santé du serveur

## Variables d'environnement

- `PORT` : Port du serveur (par défaut 7000)

## Technologies utilisées

- Express.js
- dotenv