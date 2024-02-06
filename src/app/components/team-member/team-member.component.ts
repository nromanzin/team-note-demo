import { Component } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-team-member',
  standalone: true,
  imports: [MatCardModule, MatIconModule, DatePipe],
  templateUrl: './team-member.component.html',
  styleUrl: './team-member.component.css',
})
export class TeamMemberComponent {
  selectedTeamMember = this.teamService.getSelectedTeamMember();
  constructor(private readonly teamService: TeamService) {}
}
