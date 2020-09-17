import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public tools: any = [];

  constructor(private _dbs: DatabaseService) { }

  ngOnInit(): void {
    this.tools = this._dbs.getTools$();
  }

}
