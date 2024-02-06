import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

enum Weather {
  SUNNY = 'sunny',
  CLOUDY = 'cloud',
  STORMY = 'thunderstorm',
}

interface TeamMember {
  name: string;
  lastMeeting?: Date;
  weather?: Weather;
}

const ELEMENT_DATA: TeamMember[] = [
  { name: 'Bran', lastMeeting: new Date('2023/11/20'), weather: Weather.CLOUDY },
  { name: 'Jon', lastMeeting: new Date('2023/12/25'), weather: Weather.STORMY },
  { name: 'Rob', lastMeeting: new Date('2024/01/12'), weather: Weather.SUNNY  },
];

@Component({
  selector: 'app-team-summary',
  standalone: true,
  imports: [MatTableModule, MatIconModule, DatePipe],
  templateUrl: './team-summary.component.html',
  styleUrl: './team-summary.component.css',
})
export class TeamSummaryComponent {
  displayedColumns: string[] = ['name', 'lastMeeting', 'weather'];
  dataSource = ELEMENT_DATA;
}
