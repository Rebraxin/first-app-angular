import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.component.html',
  styleUrls: ['./birds.component.scss'],
})
export class BirdsComponent implements OnInit {
  birds$;
  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
    this.birds$ = this.afs.collection('birds', (ref) => ref.orderBy('position')).valueChanges();
  }
}
