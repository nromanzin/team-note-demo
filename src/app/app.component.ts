import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamSummaryComponent } from './team-summary/team-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'team-note-demo';
  userName = 'Ned';
}
