gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.113:10544/udp/av0_0 ! decodebin ! jpegenc quality=50 ! multifilesink location=lastframe.jpg

