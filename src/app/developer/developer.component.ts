import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  developer: Developer = new Developer(
    'Aurelie',
    'Ziegler',
    40,
    'femme',
    'je suis étudiante à la WildSchool',
    [
      { name: 'HTML', logo: 'logo', Site: 'HTML.fr' },
      { name: 'CSS', logo: 'logo', Site: 'CSS.fr' },
    ]
  );
}