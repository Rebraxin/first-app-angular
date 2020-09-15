import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-bird-detail',
  templateUrl: './bird-detail.component.html',
  styleUrls: ['./bird-detail.component.scss'],
})
export class BirdDetailComponent implements OnInit {
  bird$;
  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.bird$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const slug = params.get('slug');
        const req = this.afs.collection('birds', (ref) => ref.where('slug', '==', slug)).valueChanges();
        return req;
      })
    );
  }
}
