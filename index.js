var headerTags = document.getElementsByClassName('header-tags');
for (let i = 0; i < headerTags.length; i++) {
    headerTags[i].addEventListener('click', function () {
        let target = document.getElementById(headerTags[i].getAttribute('data-target'))
        let targetPos = target.offsetTop;

        let currPos = 0;

        var scroll = setInterval(() => {
            if (currPos >= targetPos) {
                clearInterval(scroll)
            }
            currPos += 50;
            window.scrollBy(0, 50);
        }, 50)

    })

}


// when window screen --> skill section 

// start increasing width of bar 


var skillBar = document.querySelectorAll('.skill-bar');
var skillSection = document.getElementById('skills');

window.addEventListener('scroll', function () {
    if (this.window.scrollY >= 600) {
        let currWidth = 10;

        var skilll = setInterval(() => {
            if (currWidth >= 380) {
                clearInterval(skilll)
            }
            currWidth += 10;
            for (let j = 0; j < skillBar.length; j++) {
                skillBar[j].style.setProperty('width', currWidth + 'px')
            }

        }, 20)
    }
})

