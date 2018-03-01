import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';

import { AppComponent } from './app.component';

/**

rtsp://admin:moldeoneo@192.168.1.180:10544/udp/av0_0
 gst-launch -e rtspsrc location=url ! decodebin ! x264enc ! mp4mux ! filesink location=file.mp4
 gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.1.180:10544/udp/av0_0 ! decodebin ! x264enc ! mp4mux ! filesink location=file.mp4

 gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.1.180:10544/udp/av0_0 ! decodebin ! jpegenc ! multifilesink location=lastframe.jpg
*/

const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
