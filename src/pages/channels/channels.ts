import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChannelsProvider } from '../../providers/channels/channels';
import { Channel } from '../../models/channel';

/**
 * Generated class for the ChannelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {

  myChannels: Channel[] = [];
  channelStates: Set<string> = new Set();
  channelResume: Channel = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public channels: ChannelsProvider) { }

  channelsByState(state: string): Channel[] {
    return this.myChannels.filter(c => c.state === state)
  }

  ionViewDidLoad() {
    this.channels.getChannels()
      .subscribe(channels => {
        this.myChannels = channels;
        this.channelStates = new Set(channels.map(c => c.state));
        this.channelResume = channels.reduce((a, b) => new Channel('channelresume', 'MIXED', a.toLocalMsat + b.toLocalMsat, a.toRemoteMsat + b.toRemoteMsat))
      })
  }

  funderBalance(): number {
    return this.myChannels
      .filter(c => c.isFunder)
      .map(c => c.toLocalMsat + c.toRemoteMsat)
      .reduce((a, b) => a + b)
  }

}
