import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
listPost = [
  {
    poste:
        {
          title: 'MU-Barça : le groupe catalan avec Ousmane Dembélé',
          content: 'Cette semaine européenne nous réserve de belles affiches. Parmi elles, ce quart de finale aller entre Manchester United, bourreau du PSG, et le FC Barcelone, qui a de son côté sorti l’OL. ' +
            'Une rencontre qui se disputera à Old Trafford et que vous pourrez suivre sur Foot Mercato.',
          loveIts: 0,
           created_at: new Date
         }
  },
  {
    poste: {
          title: 'Premier League : Liverpool arrache une victoire miraculeuse contre Tottenham',
           content: 'Grâce à un but contre son camp d\'Alderweireld dans les derniers instants du match, Liverpool obtient une victoire très précieuse (2-1) dans la course au titre. ' +
             'Les Reds reprennent deux points d\'avance sur Manchester City.',
           loveIts: 0,
           created_at: new Date()
    }},
  {
      poste: {
      title: 'Thomas Meunier dans le viseur de Manchester United',
      content: 'Alors que son contrat au Paris Saint-Germain expire en juin 2020, Thomas Meunier fait partie de ces joueurs du PSG susceptibles de partir dès cet été, malgré le fait qu’il ait démenti récemment ces rumeurs via son compte Twitter.\n' +
        '\n' +
        'Et The Sun indique que Manchester United, que Thomas Meunier a affronté en 8e de finale de C1, est très intéressé par le profil du Belge. Le quotidien anglais révèle même qu’il est observé depuis le début de la saison par les recruteurs mancuniens, qui espèrent l’attirer l’été prochain. Pour l’instant, aucun montant de transfert n’a été avancé, mais la valeur du latéral droit est estimée à 35 M€ par le site spécialisé Transfermarkt.',
      loveIts: 0,
      created_at: new Date()
    }
  }

];
}
