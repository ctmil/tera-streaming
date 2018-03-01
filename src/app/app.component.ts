import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Socket } from 'ng-socket-io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/**
<script>


function getHttpHost(base,cgiUrl)
{
  return (base+cgiUrl+"?loginuse=admin&loginpas=moldeoneo";
}

//framerate;
//param=12
//value=fps
//http://192.168.1.13:19915/camera_control.cgi?loginuse=admin&loginpas=moldeoneo&param=12&value=10&15199072020890.9226592526586539&_=1519907202090
function camera_control(base,param,value)
{
var url = getHttpHost(base,"camera_control.cgi");
url+='&param='+param+'&value='+value;
url+='&' + new Date().getTime() + Math.random();
console.log(url);
window.open(url,"_blank");

}

function framerate( event ) {
  cam = event.target.getAttribute("camera");
  base = ips[cam]['ip'];
  console.log(cam,base);
  return camera_control( base, event.target.options[event.target.selectedIndex].value );
}
</script>*/
export class AppComponent {

  title = 'app';
  ips : any = {
    'cam1': {
      'ip': 'http://192.168.1.13:19915/'
    }
  }

  constructor(private socket: Socket) { }

  sendMessage(msg: string){
      console.log("emitting",msg);
      this.socket.emit("message", msg);
  }

  getMessage() {
      return this.socket.fromEvent<any>("message").map( data => data.msg );
  }

  close() {
      this.socket.disconnect()
  }

  framerate( event ) {
    console.log(event);
    var cam : any  = event.target.getAttribute("camera");
    var base : any = this.ips[cam]['ip'];
    console.log( cam, base );
    return this.camera_control( base, 12, event.target.options[event.target.selectedIndex].value );
  }

  getHttpHost(base,cgiUrl) : string
  {
    return (base+cgiUrl+"?loginuse=admin&loginpas=moldeoneo");
  }

  //framerate;
  //param=12
  //value=fps
  //http://192.168.1.13:19915/camera_control.cgi?loginuse=admin&loginpas=moldeoneo&param=12&value=10&15199072020890.9226592526586539&_=1519907202090
  camera_control(base,param,value)
  {
  var url : any = this.getHttpHost(base,"camera_control.cgi");
  url+='&param='+param+'&value='+value;
  url+='&' + new Date().getTime() + Math.random();
  console.log(url);
  window.open(url,"_blank");

  }
}
