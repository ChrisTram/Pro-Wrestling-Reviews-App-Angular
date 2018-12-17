import { Pipe, PipeTransform } from '@angular/core';

/*
 *   {{ review.type | reviewTypeColor }}
*/
@Pipe({name: 'reviewTypeColor'})
export class ReviewTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'NJPW':
        color = '#ff160b';
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
      case 'IMPACT':
        color = 'blue lighten-3';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        break;
      case 'JOSHI':
        color = 'pink lighten-4';
        break;
      case 'Psy':
        color = 'deep-purple darken-2';
        break;
      case 'NXT':
      case 'NXT UK':
        color = '#ffffff';
        break;
      case '':
        color = 'deep-orange';
        break;
      default:
        color = 'grey';
        break;
    }

    return color;

  }
}