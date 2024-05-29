export interface Movie {
    identifiant: string;
    titre: string;
    type: 'film' | 'série' | 'épisode';
    anneeDeSortie: number;
    fiche: 'complète' | 'courte';
  }
  