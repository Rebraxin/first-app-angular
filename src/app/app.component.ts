import { Component } from '@angular/core';
import { DatabaseService } from './shared/services/database/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'first-angular';
  public id: any;

  constructor(private _dbs: DatabaseService) {}

  public userIdGen = () => {
    return new Date().getTime().toString();
  };

  public localCheck = () => {
    const uid = localStorage.getItem('user');
    if (uid === null) {
      this.id = localStorage.setItem('user', this.userIdGen());
      this.id = this._dbs.addUser$();
    }
  };

  ngOnInit(): void {
    this.localCheck();
    localStorage.getItem('user');
    console.log(localStorage.getItem('user'));
  }
}
