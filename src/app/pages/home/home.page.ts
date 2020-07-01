import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  sources = [];
  users = [];

  slidesOpts = {
    slidesPerView: 4.5,
    freeMode: true
  }

  constructor(private data: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.data.getSources().subscribe(res => {
      this.sources = res;
    });

    this.data.getRandomUser().subscribe(res => {
      this.users = res;
      console.log('res: ',res);
    });
  }

  openSource(s) {
    console.log('open: ', s)
  }

  getBlockColor(source) {
    return this.sanitizer.bypassSecurityTrustStyle(`--myvar: #${this.intToRGB(this.hashCode(source['name']))}`);
  }

  //create hexadecimal colour based on a string
  hashCode(str) {
    var hash = 0;
    for(var i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  intToRGB(i) {
    var c = (i & 0x00ffffff).toString(16).toUpperCase();
    return "00000".substring(0,6 - c.length) + c + "80";
  }

}
