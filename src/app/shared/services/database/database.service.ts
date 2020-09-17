import { Injectable } from '@angular/core';
import { IBirds } from '../../models/birds';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ITools } from '../../models/tools';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private database: AngularFirestore) {}

  getBirds$(): Observable<IBirds[]> {
    return this.database
      .collection<IBirds>('birds', (ref) => ref.orderBy('position'))
      .valueChanges();
  }

  getTools$(): Observable<ITools[]>  {
    return this.database.collection<ITools>('tools').valueChanges();
  }
}
