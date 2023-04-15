const curso = document.querySelector(".cursor");
      var timeout;

      // curser movement
      document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;

        curso.style.top = y + "px";
        curso.style.left = x + "px";
        curso.style.display = "block";

        //stop animation
        function mouseStopped() {
          curso.style.display = "none";
        }

        //hide animation
        clearTimeout(timeout);
        timeout = setTimeout(mouseStopped, 1000);
 });