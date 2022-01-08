function infoDiv(selector){
    anime.remove(`.${selector}`);
    anime({
        targets: `.${selector}`,
        left: [-1000,0],
        duration: 250,
        easing: 'easeOutQuad'
    });
    
    document.querySelector('.projects').style.display = 'none';
    document.querySelector(`.${selector}`).style.display = 'flex';
    document.getElementById('GitHub').style.color = 'black';
    document.getElementById('LinkedIn').style.color = 'black';
}

function closeWindow(selector){
    anime.remove('.projects');
    anime({
        targets: '.projects',
        opacity: [0,1],
        duration: 500,
        easing: 'linear'
    });

    document.querySelector(`.${selector}`).style.display = 'none';
    document.querySelector('.projects').style.display = 'flex';
    document.getElementById('GitHub').style.color = 'white';
    document.getElementById('LinkedIn').style.color = 'white';
}

function colour(selector){
    switch(selector){
        case 'uavLink':
            return '#217e28';
        case 'gameLink':
            return '#972633';
        case 'graphLink':
            return '#0fa195';
        case 'physLink':
            return '#1e3c72';
        case 'picrossLink':
            return '#000000';
    }
}