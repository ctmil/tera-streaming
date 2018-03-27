gst-launch-1.0 -mv rtspsrc location=rtsp://admin:moldeoneo@192.168.1.11:10554/udp/av0_0 ! decodebin ! videocrop top=160 left=420 right=420 bottom=160 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! videoflip method=clockwise ! jpegenc quality=25 ! multifilesink location=/home/fabricio/teravision/tera-streaming/ramdisk/lastframeg.jpg

#gst-launch-1.0 -mv rtspsrc location=rtsp://admin:moldeoneo@192.168.1.11:10554/udp/av0_1 ! decodebin ! jpegenc quality=40 ! multifilesink location=lastframeg.jpg
