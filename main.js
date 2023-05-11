// const Peer = require('skyway-js');
const Peer = window.Peer;
const peer = (window.peer = new Peer({
    key: '2068d263-89a7-4ce1-adc0-03972db9b30b',
    debug: 3,
  }));


//PeerID取得
peer.on('open', () => {
    document.getElementById('my-id').textContent = peer.id;
});