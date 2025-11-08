'use strict';

document.fonts.ready.then(() => {

    // Canvas for matrix rain
    const canvas = document.getElementById('matrix-rain');

    // Logo container
    const logo = document.getElementById('logo');

    // Logo
    const logoIcon = document.getElementById('logo-icon');

    // Credits (header) and footer
    const credits = document.getElementById('credits');
    const footer = document.getElementById('footer');

    // Terminal
    const terminal = document.getElementById('terminal');
    const typewriter = new Typewriter(terminal, {
        loop: false
    });

    // Logo Terminal
    let logoTerminalActive = false;
    const logoTerminal = document.getElementById('logo-terminal');
    const logoTypewriter = new Typewriter(logoTerminal, {
        loop: false,
        delay: 100
    });

    // Footer Terminal
    const footerTerminal = document.getElementById('footer-terminal');
    const footerTypewriter = new Typewriter(footerTerminal, {
        loop: false,
        delay: 50
    });

    // Credits terminal
    let creditsShowing = false;
    const creditsTerminal = document.getElementById('credits-terminal');
    const btnCredits = document.getElementById('btn-credits');
    const creditsTypewriter = new Typewriter(creditsTerminal, {
        loop: false,
        delay: 50
    });

    // Starting console text
    typewriter.pauseFor(2000)
        .typeString('Null the Noise.')
        .pauseFor(1500)
        .typeString('<br>Simplicity Scales.')
        .pauseFor(1000)
        .typeString('<br>')
        .typeString('<br>')
        .pauseFor(2000)
        .typeString('Return Real.')
        .pauseFor(3000)
        .callFunction(() => {
            //Start Matrix Rain
            matrixRain();
            // Fade out terminal
            terminal.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, easing: 'ease-in', fill: 'forwards' }).onfinish = () => {

                // Fade in Matrix Rain
                canvas.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000, easing: 'ease-in', fill: 'forwards', delay: 500 }).onfinish = () => {

                    // Fade in logo
                    logo.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000, easing: 'ease-in', fill: 'forwards', delay: 500 }).onfinish = () => {
                        
                        // Writing logo
                        logoTypewriter.pauseFor(2000)
                            .typeString('Red')
                            .pauseFor(333)
                            .typeString('Pill')
                            .start()
                            .callFunction(() => {

                                /** Easter egg, activating logo terminal writing
                                 * when the pill is clicked
                                 */
                                logoIcon.addEventListener('click', function (e) {
                                    if(!logoTerminalActive)
                                        console.log('You chose the red pill!');
                                    logoTerminalActive = true;
                                },{ once: true });

                                // Fadin in header and footer
                                credits.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000, easing: 'ease-in', fill: 'forwards', delay: 333 });
                                footer.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1000, easing: 'ease-in', fill: 'forwards', delay: 333 }).onfinish = () => {
                                    // Write footer
                                    footerTypewriter.typeString('di Granito Alessandro – ')
                                        .pauseFor(333)
                                        .typeString('P. IVA 04183090044 – ')
                                        .pauseFor(333)
                                        .typeString('<a href="mailto:redpill.granito.alessandro@gmail.com" target="blank">E-mail</a> – ')
                                        .pauseFor(333)
                                        .typeString('<a href="https://www.linkedin.com/in/granitoale/" target="blank">LinkedIn</a>')
                                        /*.pauseFor(333)
                                        .typeString('<a href="assets/pdf/cv-red-pill-en.pdf" target="blank">CV</a>')*/
                                        .start()
                                }

                            });

                    }

                };

            };
        })
        .start();

    // Show Credits
    btnCredits.addEventListener('click', function (e) {
        e.preventDefault();
        if(!creditsShowing){
            creditsShowing = true
            creditsTypewriter.typeString('<br>Matrix <a href="https://github.com/Rezmason/matrix" target="_blank">web-based green code rain</a> by <a href="in/jeremysachs" target="_blank">Jeremy Sachs</a>, also known as <a href="https://www.rezmason.net" target="_blank">Rezmason</a>')
            .pauseFor(333)
            .typeString('<br><a href="https://safi.me.uk/typewriterjs/" target="_blank">Typewriter</a> javascript plugin by <a href="https://safi.me.uk/">Tameem Safi</a>')
            .pauseFor(333)
            .typeString('<br>Vectors and icons by <a href="https://www.figma.com/community/file/1166831539721848736?ref=svgrepo.com" target="_blank">Solar Icons</a> (CC Attribution) via <a href="https://www.svgrepo.com/" target="_blank">SVG Repo</a>')
            .pauseFor(5000)
            .deleteAll()
            .start()
            .callFunction(() => {
                creditsShowing = false;
            })
        }
    });

    // Writing on logo trminal if easter egg has been found
    document.addEventListener('keydown', function (e) {
        if(logoTerminalActive){
            if(e.key.length === 1)
                logoTypewriter.typeString(e.key).start();
            else if(e.key === "Backspace")
                logoTypewriter.deleteChars(1).start();
            else if(e.key === "Enter")
                logoTypewriter.typeString('<br>').start();
        }
    });

});