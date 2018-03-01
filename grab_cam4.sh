gst-launch-1.0 -mve rtspsrc location=rtsp://admin:moldeoneo@192.168.0.151:10554/udp/av0_0 ! decodebin ! jpegenc quality=50 ! multifilesink location=lastframe4.jpg

