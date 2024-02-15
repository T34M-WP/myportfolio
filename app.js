
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= (window.innerHeight || document.documentElement.clientHeight) / 2 - 350 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) - 10 &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function addAnimation() {
        const elements = document.querySelectorAll('.text-animate');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate__animated', 'animate__fadeInUp', 'delay-1s');
                element.style.visibility = 'visible';
            }
        });
    }

    function addAnimation2() {
        const elements = document.querySelectorAll('.text-animate2');
        elements.forEach(element => {
            if (isInViewport(element)) {
                element.classList.add('animate__animated', 'animate__flipInX', 'delay-1s');
                element.style.visibility = 'visible';
            }
        });
    }

    window.addEventListener('scroll', addAnimation);
    addAnimation();
    window.addEventListener('scroll', addAnimation2);
    addAnimation2();



