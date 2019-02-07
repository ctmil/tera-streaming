gst-launch-1.0 v4l2src device=/dev/video0 ! decodebin ! videocrop top=0 left=0 right=0 bottom=0 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! autovideosink
