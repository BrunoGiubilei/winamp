const Winamp = window.Webamp;

// Check if Winamp is supported in this browser
if(!Webamp.browserIsSupported()) {
    alert("Oh no! Webamp does not work!")
    throw new Error("What's the point of anything?")
}

// All configuration options are optional.
const webamp = new Webamp({
  // Optional.
  initialTracks: [
    {
      metaData: {
        artist: "Radio Paradise",
        title: "Main Mix"
      },
      url: "https://stream.radioparadise.com/aac-320"
    }
  ],
  zIndex: 1,
});
// Render after the skin has loaded.
webamp.renderWhenReady(document.getElementById('winamp-container'));