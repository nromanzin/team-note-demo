import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TeamSummaryComponent } from './components/team-summary/team-summary.component';
import { TeamMemberComponent } from './components/team-member/team-member.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamSummaryComponent, TeamMemberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'team-note-demo';
  userName = 'Ned';
}
