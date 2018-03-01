#gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.113:10544/udp/av0_1 ! decodebin ! videocrop top=0 left=100 right=100 bottom=0 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! videoflip method=clockwise ! jpegenc quality=50 ! multifilesink location=lastframe.jpg

gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.113:10544/udp/av0_1 ! decodebin ! videocrop top=0 left=0 right=0 bottom=0 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! jpegenc quality=50 ! multifilesink location=lastframe.jpg

#gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.113:10544/udp/av0_0 ! decodebin ! videocrop top=40 left=240 right=240 bottom=100 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! jpegenc quality=50 ! multifilesink location=lastframe.jpg
