import { Component, OnInit } from '@angular/core';
import { CallerService } from '../services/caller.service';
import { Label } from '../model/label';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.sass']
})
export class LabelsComponent implements OnInit {

  constructor(private caller: CallerService) { }

  currentSong: Label;
  lastFollow: Label;
  limit = 24;
  interval: any;
  intervalTick: any;
  musicIcon = '../../assets/images/music_flammes.gif';
  heartIcon = '../../assets/images/heart.gif';

  ngOnInit() {
    this.currentSong = new Label('azertyuiopqsdfghjklmwxcvbnazertyuiop', this.limit);
    this.lastFollow = new Label('Mist0_', this.limit);
    this.interval = setInterval(() => {
      this.checkUpdate();
    }, 1000);
    this.intervalTick = setInterval(() => {
      this.tickLabels();
    }, 500);
 }

  ngOnDestroy(): void {
  if (this.interval) {
      clearInterval(this.interval);
  }
  if (this.intervalTick) {
      clearInterval(this.intervalTick);
  }
 }

 checkUpdate() {
    this.caller.getLastFollow().subscribe(
      v => {
        if (v && v.value && this.lastFollow.text !== v.value) {
          this.lastFollow = new Label(v.value, this.limit);
        }
      }
    )
    this.caller.getMusicNow().subscribe(
      v => {
        if (v && v.value && this.currentSong.text !== v.value) {
          this.currentSong = new Label(v.value, this.limit);
        }
      }
    )
  }

  tickLabels() {
      this.lastFollow.next();
      this.currentSong.next();
  }

}
