function hover(selector, rev){
    if(!rev){
        anime({
            targets : `.${selector} path`,
            fill: ['rgba(255,255,255,0)', 'rgba(255,255,255,1)'],
            duration: 200,
            easing: 'linear'
        })
        anime({
            targets : `body`,
            backgroundColor: colour(selector),
            duration: 200,
            easing: 'linear'
        });
    } else {
        anime({
            targets : `.${selector} path`,
            fill: ['rgba(255,255,255,1)', 'rgba(255,255,255,0)'],
            duration: 200,
            easing: 'linear'
        });
        anime({
            targets : `body`,
            backgroundColor: '#a523be',
            duration: 200,
            easing: 'linear'
        });
    }
}

function colour(selector){
    switch(selector){
        case 'uavLink':
            return '#217e28';
        case 'gameLink':
            return '#972633';
        case 'tkdLink':
            return '#0fa195';
        case 'discLink':
            return '#1e3c72';
    }
}
    /* background-color: #1e3c72; */
    /* background-color: #f83232; */
    /* background-color: #1daa2f; */
    /* background-color: #e608a3; */
    /* background-color: #5fe2eb; */