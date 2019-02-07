#gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.132:10554/udp/av0_1 ! decodebin ! videocrop top=0 left=0 right=0 bottom=0 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! jpegenc quality=50 ! multipartmux boundary=spionisto ! tcpclientsink port=10001

#ffmpeg -v info -rtsp_transport tcp -i rtsp://admin:moldeoneo@192.168.0.148:10544/udp/av0_1 -c:v copy -c:a copy -maxrate 400k -bufsize 1835k -pix_fmt yuv420p -flags -global_header -hls_time 10 -hls_list_size 6 -hls_wrap 10 -start_number 1 /var/www/testhls.m3u8

#gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.148:10544/udp/av0_1 ! decodebin ! videocrop top=0 left=0 right=0 bottom=0 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! x264enc ! mp4mux ! filesink location=/var/www/cam148.mp4

#gst-launch-1.0 -e rtspsrc location=rtsp://admin:moldeoneo@192.168.0.148:10544/udp/av0_0 ! decodebin ! videocrop top=0 left=0 right=0 bottom=0 ! videoconvert ! capsfilter caps=video/x-raw,format=GRAY8 ! videoconvert ! autovideosink

gst-launch-1.0 videotestsrc is-live=true ! x264enc ! mpegtsmux ! hlssink playlist-root=http://192.168.0.125/hls location=/var/www/hls/hls.%05d.ts playlist-location=/var/www/hls/playlist.m3u8
