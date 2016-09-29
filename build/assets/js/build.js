$( document ).ready(function() {

    var tmax_opts = {
        delay: 0.25, // init pause time
        repeat: -0, // make it repeat
        repeatDelay: 0.25, // delay this amount on repeat
        yoyo: true // also play sequence in reverse
    };

    var tmax_tl           = new TimelineMax(tmax_opts),
        herosvg_shapes   = $('svg.herosvg > polygon'),
        herosvg_stagger  = 0.00475,
        herosvg_duration = 1.5;

    var herosvg_staggerFrom = {
        scale: 0,
        opacity: 0,
        transformOrigin: 'center center',
    };

    var herosvg_staggerTo = {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeInOut
    };

    tmax_tl.staggerFromTo(herosvg_shapes, herosvg_duration, herosvg_staggerFrom, herosvg_staggerTo, herosvg_stagger, 0);

});