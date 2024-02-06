import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { TeamMember, TeamService, Weather } from '../../services/team.service';

interface TeamMemberSummary {
  name: string,
  lastMeetingDate?: Date,
  lastMeetingWeather?: Weather
}

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [MatTableModule, MatIconModule, DatePipe],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.css',
})
export class TeamSummaryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastMeeting', 'weather'];
  dataSource: TeamMemberSummary[] = [];

  constructor(private readonly teamService: TeamService) {}
  ngOnInit(): void {
    this.dataSource = this.teamService.getTeam().map((teamMember: TeamMember) => {
      return {
        name: teamMember.name,
        lastMeetingDate: this.getLastMeeting(teamMember)?.date,
        lastMeetingWeather: this.getLastMeeting(teamMember)?.weather
      }
    });
  }
  selectTeamMember(name: string) {
    this.teamService.selectTeamMember(name);
  }
  private getLastMeeting(teamMember: TeamMember): { date: Date, weather: Weather } | undefined {
    return teamMember.meetings?.sort((a, b) => b.date.getTime() - a.date.getTime())[0];
  }

}
