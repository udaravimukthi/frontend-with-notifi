import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class NotificationService {

  constructor(private fb: AngularFireDatabase, private auth: AuthService) { }

  getNotifications() {
    const uid = this.auth.getUserData().user.id;
    console.log(uid);
    return this.fb.list('Server/notifications/' + uid,ref => ref.orderByPriority()).snapshotChanges();
  }

  setSeenTrue(oid) {
    const uid = this.auth.getUserData().user.id;
    this.fb.object(`Server/notifications/${uid}/${oid}`).update({isSeen:true});
  }
}
