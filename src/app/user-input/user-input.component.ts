import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent {
  userName: string = '';
  workoutType: string = '';
  workoutMinutes: number | null = null;

  @Output() addUserEvent = new EventEmitter<any>();

  addUser() {
    if (this.userName && this.workoutType && this.workoutMinutes) {
      const newUser = {
        name: this.userName,
        workouts: [
          {
            type: this.workoutType,
            minutes: this.workoutMinutes
          }
        ]
      };
      this.addUserEvent.emit(newUser);
      this.resetForm();
    }
  }

  resetForm() {
    this.userName = '';
    this.workoutType = '';
    this.workoutMinutes = null;
  }
}
