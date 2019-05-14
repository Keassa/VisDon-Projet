J'ai décidé de créer un projet centré sur l'évolution de la répartition des hommes et des femmes dans le monde du travail, en Suisse, entre 1991 et 2018.
 
La source des données employées est l'office fédéral de la statistique. 
https://www.bfs.admin.ch/bfs/fr/home/statistiques/situation-economique-sociale-population/egalite-femmes-hommes.assetdetail.7606996.html
 
 
Je n'ai pas transformé les données en soit, je les ai simplement préparées pour qu'elles puissent être exploitables dans mon code. Pour cela, j'ai utilisé un document PrepareData.js et Prepare.js afin de transformer les données enregistrées en CSV en JSON.  Le document PrepareData.js m'a premièrement permis de transformer les données JSON puis Prepare de modifier mon JSON pour qu'il soit utilisable avec Billboard.
 
J'ai choisi d'utiliser billboard car il s'agit d'une librairie permettant de simplifier le travail, ce qui est particulièrement utile pour une personne qui ayant de la peine à coder comme moi. De plus, je pense que ce que billboard fourni permet de créer des graphs simples et efficaces.
 
J'ai choisi de créer deux graphiques en bâtons qui permettent de représenter la proportion de chaque domaine ainsi que de les comparer entre les hommes et les femmes. L'utilisateur peut également voir l'évolution des données dans le temps s'il le souhaite en changeant l'année concernée.
 
J'ai fait ce choix car il m'a semblé que c'était la meilleure manière de représenter toutes les données. 
 
Il est intéressant de voir qu'en un peu plus d'une quinzaine d'années les choses n'ont que légèrement évoluée dans ce domaine. Cette modélisation des données permet de prendre rapidement conscience des informations et de les comparer avec facilité.
 
Les personnes visées sont toutes les personnes pouvant s'intéresser au sujet  comme les personnes ayant des convictions féministes. Il peut également être intéressant pour les étudiants et professionnels de l'anthropologie. 
