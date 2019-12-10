import { Pipe, PipeTransform } from '@angular/core';

/*
 *   {{ review.type | reviewTypeColor }}
*/
@Pipe({ name: 'reviewTypeColor' })
export class ReviewTypeColorPipe implements PipeTransform {
  transform(type: string): string {

    let color: string;

    switch (type) {
      case 'NJPW':
        color = '#d50000';
        break;
      case 'BOSJ':
      case 'G1':
        color = '#FFD810';
        break;
      case 'AEW':
        color = "#B89F45";
        break;
      case 'WWE':
      case 'WWE PPV':
        color = '#90caf9';
        break;
      case 'PWG':
        color = '#cd9a00';
        break;
      case 'JAP':
        color = "#FF0505";
        break;
      case 'ROH':
        color = '#949494';
        break;
      case 'LISTE 4*+':
        color = '#FAC759';
        break;
      case 'IMPACT':
        color = '#039be5';
        break;
      case 'JOSHI':
        color = '#FFB6C1';
        break;
      case 'INDÉ':
        color = '#AA93D1';
        break;
      case 'NXT':
      case 'WWE NXT':
      case 'NXT UK':
        color = '#F19507';
        break;
      case 'PROGRESS':
        color = '#f7e900';
        break;
      case 'MEX':
        color = '#EF7707';
        break;
      case 'GCW':
        color = '#9A9A9C';
        break;
      case 'USA':
        color = "#039be5";
        break;
      case 'EUROPE':
        color = "#00bfa5";
        break;
      default:
        color = '#e0f2f1';
        break;
    }

    return color;

  }
}