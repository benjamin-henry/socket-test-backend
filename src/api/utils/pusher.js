const Pusher = require('pusher');
const AlertSchema = require('../schemas/AlertSchema');
const Channelschema = require('../schemas/ChannelSchema');

const pusher = new Pusher({
  appId: '1078248',
  key: '22aee0c786849506b15e',
  secret: '0e1240f4e23d0c55723e',
  cluster: 'eu',
  encrypted: true
});

module.exports = pusher;


//////// REACT
// Pusher.logToConsole = true;
// pusher.trigger('my-channel', 'my-event', {
//   'message': 'hello world'
//   });

// useEffect(()=> {
//   var pusher = new Pusher('22aee0c786849506b15e', {
//     cluster: 'eu'
//   });

//   var channel = pusher.subscribe('my-channel');
//   channel.bind('my-event', function(data) {
//     alert(JSON.stringify(data));
//     setMessages([...messages, data])
//   });

//   return () => {
//     channel.unbind_all()
//     ;channel.unsubscribe()
//   }
// },[messages])



