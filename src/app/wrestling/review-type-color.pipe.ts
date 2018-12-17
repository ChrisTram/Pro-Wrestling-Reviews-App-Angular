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
        color = '#90caf9';
        break;
      case 'PWG':
        color = '#cd9a00';
        break;
      case 'ROH':
        color = '#7D2207';
        break;
      case '4starslist':
        color = 'grey lighten-3';
        break;
      case 'IMPACT':
        color = '#1b6dc1';
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
        color = '#F19507';
        break;
      case 'PROGRESS':
        color = '#f7e900';
        break;
      default:
        color = '#e0f2f1';
        break;
    }

    return color;

  }
}