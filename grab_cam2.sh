gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.115:10544/udp/av0_0 ! decodebin ! jpegenc quality=20 ! multifilesink location=lastframe2.jpg

