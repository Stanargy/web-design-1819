




        //Change layout when user gives note of disability by checking the checkbox
        document.addEventListener('DOMContentLoaded', () => {

            const myNav = document.querySelector('#mynav');
            const checkbox = document.querySelector('input[type=checkbox]');





            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    console.log('checked');
                    styleDisable();
                } else {
                    console.log('unchecked');
                    styleAble();
                };

            });



            function styleDisable() {
                console.log('styleDisabled')

                myNav.style.background = 'green'
                myNav.style.position = 'absolute'
                myNav.style.bottom = '0'

            }

            function styleAble() {
               
                console.log('styleAble')
                myNav.style.position = 'bottom'
                myNav.style.marginLeft = "0px"
            
                myNav.style.position = 'inherit'
                myNav.style.bottom = 'inherit'

            


            }




            // Speech to text

            window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

            // feature detection
            if ('SpeechRecognition' in window) {
                // speech recognition API supported


                const recognition = new window.SpeechRecognition();


                recognition.onaudiostart = function() {
  console.log('Audio capturing started');
}

                recognition.onresult = (event) => {
                    const speechToText = event.results[0][0].transcript;
                    console.log(speechToText);
                    if (speechToText === 'ja') {
                        console.log('speech to text worked')
                    }
                }
                recognition.start();
            } else {
                // speech recognition API not supported
                console.log('speech recognition is not supported')
            }
        });