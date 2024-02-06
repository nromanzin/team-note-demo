import { Injectable } from '@angular/core';

export enum Weather {
  SUNNY = 'sunny',
  CLOUDY = 'cloud',
  STORMY = 'thunderstorm',
}

interface Meeting {
  report: string;
  date: Date;
  weather: Weather;
}

export interface TeamMember {
  name: string;
  meetings?: Meeting[];
}

const MOCK_DATA: TeamMember[] = [
  {
    name: 'Bran',
    meetings: [
      {
        report: 'north of the wall',
        date: new Date('2023/11/20'),
        weather: Weather.CLOUDY,
      },
      {
        report: 'at winterfell',
        date: new Date('2023/07/02'),
        weather: Weather.SUNNY,
      },
    ],
  },
  {
    name: 'Jon',
    meetings: [
      {
        report: 'at the wall',
        date: new Date('2023/12/25'),
        weather: Weather.SUNNY,
      },
      {
        report: 'at winterfell',
        date: new Date('2023/07/03'),
        weather: Weather.SUNNY,
      },
    ],
  },
  {
    name: 'Rob',
    meetings: [
      {
        report: 'dead',
        date: new Date('2024/01/12'),
        weather: Weather.STORMY,
      },
      {
        report: 'at winterfell',
        date: new Date('2023/07/01'),
        weather: Weather.SUNNY,
      },
    ],
  },
];

@Injectable({ providedIn: 'root' })
export class TeamService {
  team: TeamMember[] = MOCK_DATA;
  selectedTeamMember?: TeamMember;
  getTeam(): TeamMember[] {
    return this.team;
  }
  selectTeamMember(name: string) {
    this.selectedTeamMember = this.team.find(
      (teamMember: TeamMember) => teamMember.name === name
    );
  }
  getSelectedTeamMember(): TeamMember | undefined {
    return this.selectedTeamMember;
  }
}
