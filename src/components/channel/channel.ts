import { Component, Input } from '@angular/core';
import { Channel } from '../../models/channel';

@Component({
  selector: 'channel',
  templateUrl: 'channel.html'
})
export class ChannelComponent {

  @Input()
  channel: Channel;

  constructor() { }

  getRange(): { min: number, max: number, toLocal: number, left: number, right: number } {
    const ch = this.channel;
    const toLocal = ch.toLocalMsat;
    const min = 0;
    const max = (ch.toRemoteMsat + ch.toLocalMsat);

    let left = this.mSat2mB(ch.toLocalMsat);
    let right = this.mSat2mB(ch.toRemoteMsat);

    return { min, max, toLocal, left, right }
  }

  private mSat2mB(mSat: number): number {
    //msat to sat to mB
    const mB = mSat / 1000 / 100000;
    return Math.round(mB * 100) / 100;
  }

}
