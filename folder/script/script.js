document.addEventListener("DOMContentLoaded", function() {
 
    
    function determineColorLuminance() {
        let bgColor = getComputedStyle(document.querySelector('.parallax-item:nth-child(4)')).backgroundColor;
        let contactColor = getComputedStyle(document.querySelector('.contact__wrapper--icon')).backgroundColor;
        
        function isLight(color) {
            let rgb = color.match(/\d+/g).map(Number);
            let luminance = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
            return luminance > 0.5;
        }
        
        if (isLight(bgColor)) {
            document.querySelectorAll('.header__blocker, .team-box__item, .latest--news').forEach(el => {
                el.style.background = 'rgba(255,255,255,0.8)';
                el.style.color = '#333';
            });
            document.querySelectorAll('.team-box__item img, .testom-bloсk--item img').forEach(el => {
                el.style.borderColor = 'rgb(215 212 212)';
            });
        } else {
            document.querySelectorAll('.header__blocker, .team-box__item, .latest--news').forEach(el => {
                el.style.background = 'rgba(0,0,0,0.8)';
                el.style.color = '#fff';
            });
            document.querySelectorAll('.team-box__item img, .testom-bloсk--item img').forEach(el => {
                el.style.borderColor = '#ffffff';
            });
        }
        
        document.querySelector('.contact__wrapper--icon').style.color = isLight(contactColor) ? '#333' : '#fff';
        
        let padfs = document.querySelector('.padfs');
        if (padfs && padfs.classList.contains('flex-column')) {
            padfs.style.gap = '40px';
            document.querySelector('.contact__wrapper').style.flexDirection = 'row';
            document.querySelector('.contact__wrapper').style.flexWrap = 'wrap';
        }
    }
    
    determineColorLuminance();
    
    let headerBlockerContent = document.querySelector('.header__blocker--content');
    if (headerBlockerContent && getComputedStyle(headerBlockerContent).textAlign === 'center') {
        document.querySelector('.header__blocker--logo').style.justifyContent = 'center';
        document.querySelector('.header__blocker--logo').style.flexDirection = 'column';
        document.querySelector('.header__blocker--content form button').style.justifyContent = 'center';
    }
    

    let ourteamBox = document.querySelector('.team-box');
    if (ourteamBox && getComputedStyle(ourteamBox).flexDirection === 'column') {
        document.querySelectorAll('.team-box__item').forEach(el => {
            el.style.flexDirection = 'row';
            el.style.width = '100%';
        });
        document.querySelectorAll('.latest--news__item:nth-child(3), .latest--news__item:nth-child(4)').forEach(el => {
            el.style.display = 'flex';
        });
    }
    
    let ourteamBoxItem = document.querySelector('.team-box__item');
    if (ourteamBoxItem) {
        if (getComputedStyle(ourteamBoxItem).flexDirection === 'column') {
            ourteamBoxItem.style.textAlign = 'center';
        } else {
            ourteamBoxItem.style.justifyContent = 'start';
        }
    }
    
    let testomBlockItem = document.querySelector('.testom-bloсk--item');
    if (testomBlockItem && getComputedStyle(testomBlockItem).flexDirection === 'column-reverse') {
        testomBlockItem.style.alignItems = 'center';
        testomBlockItem.style.textAlign = 'center';
    }
});