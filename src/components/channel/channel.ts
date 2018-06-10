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

  getRange(): { min: number, max: number, toLocal: number, left: string, right: string } {
    const ch = this.channel;
    const toLocal = ch.toLocalMsat;
    const min = 0;
    const max = (ch.toRemoteMsat + ch.toLocalMsat);

    const left = this.ntf(ch.toLocalMsat / 1000, '');
    const right = this.ntf(ch.toRemoteMsat / 1000, '');

    return { min, max, toLocal, left, right }
  }

  private ntf(n: number, pfx: string): string {
    if (n > 999) return this.ntf(n / 1000, `k${pfx}`)
    return `${Math.round(n * 100) / 100}${pfx}`
  }

}
