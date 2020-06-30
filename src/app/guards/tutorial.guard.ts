import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanActivate {
  

  constructor (private storage: Storage, private router: Router) {}

  async canActivate(): Promise<boolean> {
    //get key from storage, look to see if user has seen the tutorial before
    const hasSeen = await this.storage.get('tutorialSeen');

    if(!hasSeen){
      //is user hasn't seen tutorial, automatically route them to tutorial
      this.router.navigateByUrl('/tutorial');
    }

    return hasSeen;
  }
  
}
