# Exercice autour de l’API de Magic: the Gathering

L’idée est d’utiliser l’API officielle du jeu et voir ce qu’on peut en tirer.

## Avant de commencer: Règles du jeu

- Hivemind : tout le monde peut parler. Le PC change quand même de mains !
- Oooooh, Shiny! : tout le monde regarde le même écran. Pas de téléphone/second laptop !
- Wait, what ? : en plus du site à rendre, chacun devra noter tous les sujets qu’il n’a pas compris / n’aurait pas su faire et en fournir la liste à Loïc (MP sur Slack)
- I’ll be back ! : tu démarres cet exo avec ton équipe, mais je conseille de le reprendre/recommencer/continuer en solo pour t’entrainer

## Initialisation

- Démarre un projet React (CRA, Vite, template-fullstack, …) sur ta machine
- Regarde l’endpoint /cards de l’API
  - De quoi ça parle ?
  - Quels champs semblent intéressants ?
  - As tu une idée de site faisable rapidement avec ce type de données ?

## Premières armes (“Obligatoire”)

- Crée un composant Gallery()
  - Il doit appeler l’endpoint étudié et afficher chaque carte de la réponse
  - Un peu de CSS, que diable ! Imagine que tu vas montrer cette page à tes parents, quelqu’un !
  - Point Cookie : Ce serait cool que les cartes soient triées par couleur (W/G/R/B/U/Colorless/Gold/Lands)
  - Point Cookie : Parfois une carte est sortie dans plusieurs sets. Comment pourrait on dédoublonner en ne gardant qu’un exemplaire de chaque carte (On considère que les noms des cartes sont “uniques”)
- Crée un composant Detail()
  - Il doit appeler l’API pour ne récupérer que les infos d’une carte (a037ae21-92f8-56cd-91c3-5575933b531f)
  - Il affiche en pleine page les infos principales de la carte choisie, séparées en trois composants :
    - Illustration(?) affichera l’image de la carte.
      - Points Cookie : Propose de changer la langue dans laquelle l’image s’affiche !
    - Content(?) affichera les mêmes infos que la carte elle-même (au format texte)
    - Meta(?) affichera les infos qui ne sont pas intimement liées à la carte (Disponibilité en tournoi, set, illustrateur, …)
- Crée deux routes pour ton site: - / t’amène à la Gallery - /cards/a037ae21-92f8-56cd-91c3-5575933b531f t’emmène au Detail de cette carte - … “Bien sûr”, maintenant ça devrait marcher avec n’importe quel id valide !
  Ce serait pas mal d’arrêter de trifouiller l’URL pour passer d’un page à l’autre ! - Ajoute un lien sur chaque item de ta Gallery vers le Detail correspondant

## Vers l’Infini et l’Au-Delà !

### Moteur de recherche

Sur toutes les pages du site, propose un header dans lequel il y a une SearchBar()

- N’appelle pas l’API au onChange ! Tu excéderais sans doute le rateLimit de l’API et serais bloqué pour la suite !
- Affiche un champ texte et une liste de résultats
- Si la liste de résultats est vide, elle ne s’affiche pas
- Quand on appuie sur Entrée ou qu’on quitte le champ, on appelle l’API et remplit les résultats
- Chaque résultat affiche
  - le nom de la carte
  - son coût de mana
  - son type
- Chaque résultat est un lien vers le Detail corespondant

### Pages spécifiques (Set, Illustrateur, Ouvre un booster)

Il est courant de rechercher des images ayant un point commun, plutôt que juste “des cartes” : faisant partie de la même collection, illustrées par le même artiste, partageant un même type, …

- Crée une page qui permet d’afficher toutes les cartes d’un set donné
- Cette page doit réutiliser Gallery(?). Il est peut-être temps de lui ajouter en props la liste des cartes à afficher ?
  - Attention, la page principale doit continuer à fonctionner !
- Dans le Detail des cartes, le nom du set devient un lien vers cette page
- Dans le header, affiche les noms des trois derniers sets sortis (avec liens)

### Filtres avancés

Dans notre Gallery(?), on a une masse de cartes et il peut être difficile de s’y retrouver.

- Ajoute un formulaire de filtres en tête de ce composant qui permet d’écrémer le contenu. Par exemple, on devrait pouvoir filtrer par
  - nom
  - type
  - coût contient une couleur
  - coût ne contient pas une couleur
  - set
