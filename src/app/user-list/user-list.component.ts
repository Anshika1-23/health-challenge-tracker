import { Component, Input } from '@angular/core';

interface Workout {
  type: string;
  minutes: number;
}

interface User {
  name: string;
  workouts: Workout[];
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input() users: User[] = [];
  searchTerm: string = '';
  filterType: string = '';

  get filteredUsers(): User[] {
    return this.users
      .filter(user => user.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .filter(user => !this.filterType || user.workouts.some(w => w.type.toLowerCase() === this.filterType.toLowerCase()));
  }

  get workouts(): { type: string }[] {
    const workoutTypes = new Set(this.users.flatMap(user => user.workouts.map(workout => workout.type)));
    return Array.from(workoutTypes).map(type => ({ type }));
  }
}
