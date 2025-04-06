
    let interval;

    $('#startBtn').click(function () {
      clearInterval(interval); 
      let seconds = parseInt($('#countdownInput').val());

      if (isNaN(seconds) || seconds <= 0 ) {
        alert('Please enter a valid number....');
        return;
      }

      $('#countdownDisplay').text(seconds);

      interval = setInterval(function () {
        seconds--;
        $('#countdownDisplay').text(seconds);

        if (seconds <= 0) {
          clearInterval(interval);
          $('#countdownDisplay').text(" Time's up!");
        }
      }, 1000);
    });
