gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.199:10544/udp/av0_1 ! decodebin ! videocrop top=0 left=0 right=0 bottom=0 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! jpegenc quality=50 ! multipartmux boundary=spionisto ! tcpclientsink port=11007

