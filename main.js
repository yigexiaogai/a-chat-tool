const Peer = window.Peer;
const peer = (window.Peer = new Peer({
    key: '2068d263-89a7-4ce1-adc0-03972db9b30b',
    debug: 3,
  }));

// PeerID取得
peer.on('open', (id) => {
    document.getElementById('my-id').textContent = peer.id;
});

// Transmission processing
document.getElementById('make-call').onclick = () => {
  const theirID = document.getElementById('their-id').value;
  const mediaConnection = peer.call(theirID, localStream);
  setEventListener(mediaConnection);
};

// Function to set an event listener
const setEventListener = mediaConnection => {
  mediaConnection.on('stream', stream => {
    // Set a camera image to the video element and play it
    const videoElm = document.getElementById('their-video')
    videoElm.srcObject = stream;
    videoElm.play();
  });
}

// Inbound processing
peer.on('call', mediaConnection => {
  mediaConnection.answer(localStream);
  setEventListener(mediaConnection);
});