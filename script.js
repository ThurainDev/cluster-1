document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const envelopeWrapper = document.getElementById('envelope-wrapper');
    const christmasMusic = document.getElementById('christmasMusic');
    const eventModalElement = document.getElementById('eventModal');
    
    // Initialize the Bootstrap Modal
    const eventModal = new bootstrap.Modal(eventModalElement);

    // 📩 Envelope Opening and Music Playback Logic
    openBtn.addEventListener('click', function() {
        // 1. **Fade out the envelope wrapper**
        envelopeWrapper.style.opacity = '0';

        // 2. **Play Music**
        // Browsers require a user action (like this button click) to play media.
        const playPromise = christmasMusic.play();
        
        // Handle play success/failure (optional, but good practice)
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Autoplay started successfully
                console.log("Christmas music started playing.");
            })
            .catch(error => {
                // Autoplay was prevented
                console.log("Music play was blocked by the browser. User can manually control it.");
            });
        }

        // 3. **Show the Modal after the fade-out transition (1 second)**
        setTimeout(() => {
            // Hide the envelope completely
            envelopeWrapper.style.display = 'none'; 
            
            // Allow page scrolling
            document.body.classList.add('event-open');

            // Show the modal with the event details
            eventModal.show();
        }, 1000); // Matches the CSS transition time
    });

    // 🔊 Stop music when modal is closed (optional)
    eventModalElement.addEventListener('hidden.bs.modal', function () {
        // You can choose to keep playing or pause the music here
        // christmasMusic.pause();
        // christmasMusic.currentTime = 0; // Rewind
    });
});