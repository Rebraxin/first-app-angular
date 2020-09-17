import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss'],
})
export class BirdsComponent implements OnInit {
  public birds: any = [];
  constructor(private _dbs: DatabaseService) { }

  ngOnInit(): void {
    this.birds = this._dbs.getBirds$();
  }
}
