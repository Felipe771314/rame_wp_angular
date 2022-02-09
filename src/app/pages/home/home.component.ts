import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeFacade } from './home.facade';
import { HomepageService } from 'src/app/services/homepage.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [HomepageService, { provide: HomeFacade, deps: [HttpClient] }],
})
export class HomeComponent {
  public title: string = '';
  public description: string = '';
  public cardTitles: string[] = [];
  public isSocialMedia: boolean = false;
  constructor(public facade: HomeFacade) {}
}

