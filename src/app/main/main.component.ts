import { Component, OnInit, OnDestroy } from '@angular/core';
import { CallerService } from '../services/caller.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit, OnDestroy {

  constructor(private caller: CallerService) { }

  currentSong = '';
  lastFollow = '';
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.checkUpdate();
  }, 1000);
 }

  ngOnDestroy(): void {
  if (this.interval) {
      clearInterval(this.interval);
  }
 }

 checkUpdate() {
    this.caller.getLastFollow().subscribe(
      v => {
        this.lastFollow = v.value;
      },
      err => console.error(err)
    )
    this.caller.getMusicNow().subscribe(
      v => {
        this.currentSong = v.value;
      },
      err => console.error(err)
    )
  }
}
