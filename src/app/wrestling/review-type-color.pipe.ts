import { Pipe, PipeTransform } from '@angular/core';

/*
 * Affiche la couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ review.type | reviewTypeColor }}
*/
@Pipe({name: 'reviewTypeColor'})
export class ReviewTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'NJPW':
        color = 'red lighten-1';
        break;
      case 'WWE':
        color = 'blue lighten-1';
        break;
      case 'PWG':
        color = 'green lighten-1';
        break;
      case 'ROH':
        color = 'brown lighten-1';
        break;
      case '4starslist':
        color = 'grey lighten-3';
        break;
      case 'INDE':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'Fée':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'Electrik':
        color = 'lime accent-1';
        break;
      case 'Combat':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return 'chip ' + color;

  }
}