var myTimeline = anime.timeline();

//Taylor
myTimeline
.add({                                          // Draw Taylor SVG
    targets: '.name path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1000,
    delay: function(el, i) { return i * 250 }
})
.add({                                          // Fill in white
    targets: '.name path',
    fill: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
    easing: 'easeInQuad',
}, "-=1000")
.add({                                          // Move to the left
    targets: '.name',
    left: ['50%', '0'],
    translateX: ['-50%','0%'],
    translateY: ['-50%', '-50%'],
    easing: 'easeOutQuart',
    duration: 500,
    delay: 200,
    position: 'static'
})

// Hetherington
.add({                                          // Make surname visible
    targets: '.surname path',
    opacity: '100%',
    easing: 'linear',
    duration: 600,
    delay: anime.stagger(50, {direction: 'reverse'})
})
.add({                                          // Move surname to the right
    targets: '.surname',
    left: ['-200px', '0px'],
    easing: 'linear',
    duration: 600
}, "-=1200")
.add({                                          // Move both names to top of page
    targets: '.nameContainer',
    top: ['50%', '0'],
    duration: 250,
    easing: 'easeOutSine'
})
.add({                                          // Reset name SVG transforms
    targets: '.name, .surname',
    translateY: ['-50%', '0'],
    duration: 250,
    easing: 'easeOutSine'
}, "-=250")

// Projects
.add({
    targets: '.projDiv',
    opacity: '100%',
    easing: 'linear',
    duration: 1000,
    delay: anime.stagger(500)
})
.add({
    targets: '.projects',
    pointerEvents: 'all'
});

setTimeout(function() {
    document.getElementsByClassName('projects')[0].style.pointerEvents = 'all';
}, 5000);