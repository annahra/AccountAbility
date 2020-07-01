import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  dummyResponses = [
    {
      username: 'Mac DeMarco',
      handle: 'macattack',
      likeCount: '34',
      shareCount: '15',
      text: 'A well thought out response',
      date: '1485601506000',
      img: 'twitter-max.jpg'
    },
    {
      username: 'Ava Trilling',
      handle: 'avatrilling',
      likeCount: '41',
      shareCount: '20',
      text: 'Something that kindly challenges someone elses response',
      date: '1485701506000',
      img: 'profile-img.jpg'
    },
    {
      username: 'Tom Delonge',
      handle: 'tomdelonge',
      likeCount: '55',
      shareCount: '40',
      text: 'Probably some reports validating the existence of aliens',
      date: '1485801506000',
      img: 'twitter-ionic.jpg'
    },
    {
      username: 'Ben Howard',
      handle: 'benhoward',
      likeCount: '60',
      shareCount: '10',
      text: 'Something backing up someone elses response',
      date: '1485901506000',
      img: 'twitter-ben.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
