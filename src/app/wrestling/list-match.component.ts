import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Match } from './match';
import { Router } from '@angular/router';
import { MatchsService } from './matchs.service'

@Component({
  selector: 'list-match',
  templateUrl: `./app/wrestling/list-match.component.html`,
})
export class ListMatchComponent {

  matchs: Match[] = null;

  constructor(private router: Router, private matchsService : MatchsService) { }

   ngOnInit() : void {
    this.getMatchs();
  }

  getMatchs() : void {
    this.matchsService.getMatchs()
    .subscribe(matchs => this.matchs = matchs);
  }

  selectMatch(match: Match) {
    console.log("Vous avez cliqué sur " + match.name);
    let link =['/match', match.name];
    this.router.navigate(link);
  }


}