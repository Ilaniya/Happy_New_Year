$(document).ready(function () {
    setInterval(function () {
        let r, g, b;
        $('.circle').each(function (index, elem) {
            r = Math.round(Math.random() * 255);
            g = Math.round(Math.random() * 255);
            b = Math.round(Math.random() * 255);
            $(elem).css({
                background: `rgb(${r},${g},${b}`
            })
        });
    },1500);
});


