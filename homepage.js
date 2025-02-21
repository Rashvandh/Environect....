        // Optional: Add smooth scrolling behavior
        const productScrollContainer = document.querySelector('.product-scroll-container');

        scrollContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            scrollContainer.scrollBy({
                left: e.deltaY < 0 ? -300 : 300,
                behavior: 'smooth'
            });
        });

        const scrollContainer = document.getElementById('scrollContainer');
        const scrollLeftButton = document.getElementById('scrollLeft');
        const scrollRightButton = document.getElementById('scrollRight');

        // Scroll left
       // scrollLeftButton.addEventListener('click', () => {
           // scrollContainer.scrollBy({
              //  left: -300, // Adjust scroll distance
                //behavior: 'smooth'
           // });
        //});

        // Scroll right
       // scrollRightButton.addEventListener('click', () => {
        //    scrollContainer.scrollBy({
         //       left: 300, // Adjust scroll distance
          //      behavior: 'smooth'
          //  });
        //});

         //Optional: Hide buttons when at the start or end of the scroll
         scrollContainer.addEventListener('scroll', () => {
            if (scrollContainer.scrollLeft === 0) {
                scrollLeftButton.style.display = 'none';
            } else {
                scrollLeftButton.style.display = 'flex';
            }

            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                scrollRightButton.style.display = 'none';
            } else {
                scrollRightButton.style.display = 'flex';
            }
        });

        // Initial check for button visibility
        //scrollContainer.dispatchEvent(new Event('scroll'));