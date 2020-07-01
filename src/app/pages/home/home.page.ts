import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sources = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getHealthSources().subscribe(res => {
      this.sources = res;
      console.log('res: ',res);
    });
  }

}
