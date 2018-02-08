(function smoothScroll() {
    $('a[href*="#"]:not([href="#"])').click(function (event) {
       
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);

            $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');

            if ($target.length) {
                event.preventDefault();
                var baseMinScrollTime = 800,
                    baseMaxScrollTime = 800;

                var docHeight = $(document).height(),
                    triggerTop = $(this).offset().top,
                    targetTop = $target.offset().top;

                var scrollProportion = (targetTop - triggerTop) / docHeight,
                    relativeTime = ((baseMaxScrollTime - baseMinScrollTime) * scrollProportion) + baseMinScrollTime,
                    // Create inverse relationship (quicker the further we scroll)
                    scrollTime = -1 * (1 - relativeTime);

                $('html, body').animate({
                    scrollTop: targetTop - 30
                }, scrollTime);
            }
        }
    });
})();
