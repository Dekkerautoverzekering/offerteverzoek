let currentStep = 0;
showStep(currentStep);

function showStep(n) {
    let steps = document.getElementsByClassName("step-content");
    for (let i = 0; i < steps.length; i++) {
        steps[i].style.display = 'none';
    }
    steps[n].style.display = 'block';
    
    if (n == 0) {
        document.getElementById("prevBtn").style.display = 'none';
    } else {
        document.getElementById("prevBtn").style.display = 'inline';
    }
    if (n == (steps.length - 1)) {
        document.getElementById("nextBtn").style.display = 'none';
    } else {
        document.getElementById("nextBtn").style.display = 'inline';
    }
    updateStepIndicator(n);
}

function nextPrev(n) {
    let steps = document.getElementsByClassName("step-content");
    steps[currentStep].style.display = 'none';
    currentStep = currentStep + n;
    if (currentStep >= steps.length) {
        return false;
    }
    showStep(currentStep);
}

function updateStepIndicator(n) {
    let indicators = document.getElementsByClassName("step");
    for (let i = 0; i < indicators.length; i++) {
        indicators[i].classList.remove("active-step");
    }
    indicators[n].classList.add("active-step");
}

// Functie om voertuiggegevens op te halen via RDW API
async function fetchVehicleData(kenteken) {
    const url = `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${kenteken.replace(/-/g, '')}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
            const vehicle = data[0];
            document.getElementById('merk').value = vehicle.merk || 'Onbekend';
            document.getElementById('model').value = vehicle.handelsbenaming || 'Onbekend';
        } else {
            document.getElementById('merk').value = 'Kenteken niet gevonden';
            document.getElementById('model').value = '';
        }
    } catch (error) {
        console.error("Fout bij ophalen voertuiggegevens:", error);
        document.getElementById('merk').value = 'Fout bij ophalen';
        document.getElementById('model').value = '';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    const kentekenInput = document.getElementById('kenteken');
    kentekenInput.addEventListener('input', function() {
        const kenteken = kentekenInput.value.trim();
        if (kenteken.length >= 6) {
            fetchVehicleData(kenteken);
        }
    });

    // Adres ophalen
    const postcodeInput = document.getElementById('postcode');
    const huisnummerInput = document.getElementById('huisnummer');
    postcodeInput.addEventListener('input', checkAddress);
    huisnummerInput.addEventListener('input', checkAddress);

    function checkAddress() {
        const postcode = postcodeInput.value.replace(/\s/g, '');
        const huisnummer = huisnummerInput.value;
        if (postcode.length === 6 && huisnummer) {
            fetchAddress(postcode, huisnummer);
        }
    }

    async function fetchAddress(postcode, huisnummer) {
        const url = `https://api.pdok.nl/bzk/locatieserver/search/v3_1/free?q=${postcode} ${huisnummer}&rows=1`;
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.response.numFound > 0) {
                const adres = data.response.docs[0];
                const volledigAdres = `${adres.straatnaam} ${adres.huisnummer}, ${adres.woonplaatsnaam}`;
                document.getElementById('volledig-adres').value = volledigAdres;
            } else {
                document.getElementById('volledig-adres').value = "Adres niet gevonden";
            }
        } catch (error) {
            console.error("Fout bij ophalen adres:", error);
            document.getElementById('volledig-adres').value = "Fout bij ophalen adres";
        }
    }

    // Zakelijk/particulier logica voor bedrijfsnaam
    const particulierRadio = document.getElementById('particulier');
    const zakelijkRadio = document.getElementById('zakelijk');
    const bedrijfsnaamContainer = document.getElementById('bedrijfsnaam-container');

    function toggleBedrijfsnaam() {
        if (zakelijkRadio.checked) {
            bedrijfsnaamContainer.classList.remove('hidden');
        } else {
            bedrijfsnaamContainer.classList.add('hidden');
        }
    }

    particulierRadio.addEventListener('change', toggleBedrijfsnaam);
    zakelijkRadio.addEventListener('change', toggleBedrijfsnaam);
    toggleBedrijfsnaam(); // Initialiseer de status

    // Stel standaarddatum in voor "datum-verzoek"
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('datum-verzoek').value = formattedDate;
});

// Modal en verzend logica
function showModal() {
    const form = document.getElementById('quote-form');
    const formData = new FormData(form);
    let summaryHtml = "<strong>Ingevulde gegevens:</strong><ul>";

    for (let [key, value] of formData.entries()) {
        if (value && value !== 'on') {
            summaryHtml += `<li>${key}: ${value}</li>`;
        } else if (key === 'ford-dekker' || key === 'waarheid') {
            summaryHtml += `<li>${key}: ${formData.has(key) ? 'Ja' : 'Nee'}</li>`;
        }
    }
    summaryHtml += "</ul>";

    document.getElementById('summary').innerHTML = summaryHtml;
    document.getElementById('confirmationModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('confirmationModal').style.display = 'none';
    document.getElementById('resultMessage').style.display = 'none';
}

function handleSubmit(isConfirmed) {
    document.getElementById('confirmationModal').style.display = 'none';
    const resultTextElement = document.getElementById('resultText');

    if (isConfirmed) {
        const form = document.getElementById('quote-form');
        const formData = new FormData(form);
        let emailBody = "Offerteverzoek Dekkerautoverzekering\n\n";
        const email = formData.get('email');

        for (let [key, value] of formData.entries()) {
            if (value && value !== 'on') {
                emailBody += `${key}: ${value}\n`;
            } else if (key === 'ford-dekker' || key === 'waarheid') {
                emailBody += `${key}: ${formData.has(key) ? 'Ja' : 'Nee'}\n`;
            }
        }

        console.log("Start verzending...");

        emailjs.send("service_wgkepp8", "template_lglwx6m", {
            message: emailBody,
            reply_to: email
        })
        .then(() => {
            console.log("Service e-mail succesvol verzonden");
            return emailjs.send("service_wgkepp8", "template_20jbe7c", {
                to_email: email,
                email: email,
                message: "Bedankt voor uw offerteverzoek!\n\nHieronder uw ingevulde gegevens:\n" + emailBody
            });
        })
        .then(() => {
            console.log("Klant e-mail succesvol verzonden");
            resultTextElement.innerHTML = `
                <strong>Uw offerteverzoek is verzonden!</strong><br><br>
                Wij danken u voor uw interesse.<br>
                Een bevestiging is gestuurd naar ${email}.<br>
                Binnen 2 werkdagen ontvangt u een offerte.
            `;
            document.getElementById('resultMessage').style.display = 'block';
            document.getElementById('quote-form').style.display = 'none';
            document.querySelector('.navigation-buttons').style.display = 'none';

            setTimeout(() => {
                document.getElementById('resultMessage').style.display = 'none';
                document.getElementById('loadingScreen').style.display = 'flex';
                
                setTimeout(() => {
                    window.location.href = 'https://www.klaasvis.nl';
                }, 3000);
            }, 2000);
        })
        .catch((error) => {
            console.error("Fout bij verzenden:", error);
            resultTextElement.innerHTML = `
                Er is een fout opgetreden: ${error.text}<br>
                Controleer de console (F12) voor meer info.
            `;
            document.getElementById('resultMessage').style.display = 'block';
        });
    } else {
        resultTextElement.innerHTML = `
            U wordt teruggeleid naar het formulier om uw antwoorden te controleren.
        `;
        document.getElementById('resultMessage').style.display = 'block';
    }
}

// Chatbase chatbot integratie
(function() {
    if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
        window.chatbase = (...args) => {
            if (!window.chatbase.q) {
                window.chatbase.q = [];
            }
            window.chatbase.q.push(args);
        };
        window.chatbase = new Proxy(window.chatbase, {
            get(target, prop) {
                if (prop === 'q') {
                    return target.q;
                }
                return (...args) => target(prop, ...args);
            }
        });
    }
    const onLoad = function() {
        const script = document.createElement('script');
        script.src = 'https://www.chatbase.co/embed.min.js';
        script.id = 'C60jEJW_QuVD7X3vE5rzE';
        script.setAttribute('domain', 'www.chatbase.co');
        document.body.appendChild(script);
    };
    if (document.readyState === 'complete') {
        onLoad();
    } else {
        window.addEventListener('load', onLoad);
    }
})();