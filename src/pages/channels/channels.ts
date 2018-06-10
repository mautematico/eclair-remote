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

  constructor(public navCtrl: NavController, public navParams: NavParams, public channels: ChannelsProvider) { }

  ionViewDidLoad() {

    this.channels.getChannels()
      .subscribe(channels => { this.myChannels = channels })

  }

}
