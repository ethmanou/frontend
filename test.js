const colyseus = require('colyseus.js');

// Create a new Colyseus client
const client = new colyseus.Client('ws://13.48.138.37:2567');

async function f()
{
// Join a room
room = await client.joinOrCreate('Belote');

  // Listen for changes to the room state
  room.onStateChange((changes) => {
    // Process state changes
    console.log('State changes:', room.state.deck);

  });
}
f()