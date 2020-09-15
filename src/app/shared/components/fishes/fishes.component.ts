import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'

@Component({
  selector: 'app-fishes',
  templateUrl: './fishes.component.html',
  styleUrls: ['./fishes.component.scss']
})
export class FishesComponent implements OnInit {
  birds$;
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.birds$ = this.afs.collection('birds', (ref) => ref.orderBy('position')).valueChanges();
  }

}
