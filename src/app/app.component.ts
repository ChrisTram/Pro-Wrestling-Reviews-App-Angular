import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'reviews-app',
  templateUrl: `./app.component.html`
})
export class AppComponent {
public constructor(private titleService: Title) {}

public updateTitle(title: string) {
    this.titleService.setTitle(title);
}
}