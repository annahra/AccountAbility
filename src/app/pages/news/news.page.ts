import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  selected = 'general';
  news = [];

  constructor(private data: DataService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    let loading = await this.loadingCtrl.create();
    await loading.present();

    this.data.getTopNews(this.selected).subscribe(res => {
      loading.dismiss();
      this.news = res;
    });
  }

  segmentChanged(e) {
    this.loadData();
  }

  open(n) {
    let navigationExtras: NavigationExtras = {
      state: {
        news: n
      }
    };
    this.router.navigate(['app/news/details'], navigationExtras)
  }

}
