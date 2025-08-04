# Etudizen - Edumapper

Plateforme proposant aux étudiants d’estimer leurs chances d’accéder à une formation.
Développée par Karen Azoulay.

## Prérequis

Pour lancer le projet, vous devez avoir :
- [Node](https://nodejs.org/fr/) >= 20.0.0

### Installation

- **Nuxt**
    - Lancer un `yarn install` ou un `npm install`, qui devrait créer un dossier "node_modules"
    - Lancer un `yarn dev` ou un `npm run dev` pour lancer le serveur

## Explication du projet

### Côté WebApp
J'ai découpé le projet en Atomique design pour structurer mes composants et faciliter la réutilisation de code.
Dans les atomes, on retrouve le TagAnswers qui représente une réponse parmis le choix de proposition.
Dans les molécules, il y a la CardInformative pour afficher la question avec ses multiples réponses.
Dans les organismes, il y a le ContainerForm qui contient toutes ses cartes ainsi que le Wrapper qui encapsule nos différents élements de la page.
Dans les templates, c'est le TplForm qui représente notre page.
Dans les bases, nous avons le BaseHeader qui est le composant qui s'affiche en haut de la page.

### Côté API
J'ai configuré l'api dans le dossier server pour récupéré les valeurs de l'api de façon aléatoire.
J'ai également défini son contenu dans le dossier utils.