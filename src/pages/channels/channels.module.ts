import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChannelsPage } from './channels';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ChannelsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ChannelsPage)
  ],
  exports: [ChannelsPage]
})
export class ChannelsPageModule { }
