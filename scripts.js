
for (let i = 0; i < document.getElementsByClassName('navButton').length; i++) {
    document.getElementsByClassName('navButton')[i].addEventListener('mouseover', function() {
        document.getElementsByClassName('navButton')[i].style.backgroundColor = 'white';
        document.getElementsByClassName('navButton')[i].style.color = 'black';
    });
    document.getElementsByClassName('navButton')[i].addEventListener('mouseout', function() {
        document.getElementsByClassName('navButton')[i].style.backgroundColor = 'blue';
        document.getElementsByClassName('navButton')[i].style.color = 'white';
    });
    document.getElementsByClassName('navButton')[i].addEventListener('click', function() {
        let link = document.getElementsByClassName('navButton')[i].id;
        if (link === 'homeButton') {
            link = 'index.html';
        } else {
            for (let j = 0; j < link.length; j++) {
                if (link[j] === 'B') {
                    link = link.substring(0, j) + '.html';
                    break;
                }
            }
        }
        window.open(link, '_self');
    });
}
