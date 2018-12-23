let getId = function (x) {
    return document.getElementById(x);
};

for (let i=1; i < getId('container_frame').children.length+1; i++){
    getId(`c${i}`).addEventListener('click', function () {
        getId('bg_blur').classList.add('visible');
        getId(`frame${i}`).classList.add('visible');
        getId('bg_blur').classList.remove('hide');
        getId(`frame${i}`).classList.remove('hide');
        getId(`c${i}`).style.backgroundColor = 'white';
        getId(`c${i}`).style.opacity = '0.1';
    });
}

for (let i=1; i < getId('container_frame').children.length+1; i++){
    getId('bg_blur').addEventListener('click', function () {
        if(getId('bg_blur').classList.contains('visible')) {
            getId('bg_blur').classList.remove('visible');
            getId(`frame${i}`).classList.remove('visible');
        }
        getId('bg_blur').classList.add('hide');
        getId(`frame${i}`).classList.add('hide');
    });
}

for (let i=1; i < getId('container_frame').children.length+1; i++) {
    getId(`frame${i}`).addEventListener('click', function () {
        if(getId('bg_blur').classList.contains('visible')){
            getId('bg_blur').classList.remove('visible');
            getId(`frame${i}`).classList.remove('visible');
        }
        getId('bg_blur').classList.add('hide');
        getId(`frame${i}`).classList.add('hide');
    });
}



