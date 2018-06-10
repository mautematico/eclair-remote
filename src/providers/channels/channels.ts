import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Channel } from '../../models/channel';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChannelsProvider {

  private path = 'channels'

  constructor(public http: HttpClient) { }

  getChannels(): Observable<Channel[]> {
    return this.http.get<Channel[]>(`https://ln.mautematico.com/api/${this.path}`)
  }

}
