body {
    font-family: Arial, sans-serif;
    background-color: #e0f7fa;
    margin: 0;
    padding: 20px;
}

.form-container {
    max-width: 800px;
    margin: auto;
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.logo {
    text-align: center;
    margin-bottom: 20px;
}

.logo img {
    max-width: 450px;
    height: auto;
}

.footer-logo {
    text-align: center;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    margin-top: 20px;
}

.footer-logo img {
    max-width: 450px;
    height: auto;
}

.footer {
    background: #007BFF;
    color: #fff;
    text-align: center;
    padding: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
}

.footer p {
    margin: 10px 0;
}

.footer a {
    color: #fff;
    text-decoration: none;
}

.footer a:hover {
    text-decoration: underline;
}

.step-indicators {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.step {
    width: 100%;
    text-align: center;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f0f0f0;
    font-weight: bold;
}

.active-step {
    background: #28a745;
    color: #fff;
    border-color: #28a745;
}

.step-content {
    display: none;
}

.step-content.active {
    display: block;
}

.conditional {
    display: none;
}

.conditional.active {
    display: block;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
}

.form-group input, .form-group select, .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.form-group input[type="radio"], .form-group input[type="checkbox"] {
    display: none; /* Verberg de standaard radio/checkbox */
}

.form-group .radio-group {
    display: flex;
    gap: 15px;
}

.navigation-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.switch {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.switch-label {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: #f0f0f0;
    margin-right: 10px;
    display: flex;
    align-items: center;
}

.switch input[type="radio"]:checked + .switch-label,
.switch input[type="checkbox"]:checked + .switch-label {
    background-color: #28a745;
    color: white;
}

.coverage-switch .switch-label {
    padding: 8px 15px; /* Compacter voor dekkingen */
    font-size: 14px;
}

.confirmation-switch .switch-label {
    padding: 10px 15px; /* Iets meer padding voor langere labels */
    font-size: 14px;
    width: 100%; /* Volle breedte voor consistentie */
    box-sizing: border-box;
    margin-right: 0; /* Geen marge rechts, want elke switch staat apart */
    margin-bottom: 10px; /* Afstand tussen de switches */
}

.always-selected {
    background-color: #28a745; /* Altijd groen */
    color: white;
    cursor: default; /* Geen pointer om aan te geven dat het niet klikbaar is */
}

.coverage-options {
    margin-top: 10px;
}

.main-coverage, .extra-options {
    margin-bottom: 20px;
}

.main-coverage h4, .extra-options h4 {
    font-size: 16px;
    margin-bottom: 10px;
}

.radio-label {
    margin-left: 5px;
}

.signature-pad {
    border: 1px solid #000;
    width: 90vw;
    max-width: 400px;
    height: 200px;
    background-color: #fff;
    touch-action: none;
}

.navigation-buttons button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
}

.prev-button {
    background-color: #6c757d;
}

.next-button {
    background-color: #007BFF;
}

.submit-button {
    background-color: #28a745;
}

.text-center {
    text-align: center;
}

canvas {
    border: 1px solid #000;
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.submit-button {
    background-color: #006400;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    display: block;
    margin: 20px auto;
    border-radius: 5px;
}

.button-group {
    display: flex;
    gap: 10px;
    margin-top: 20px;
}

.button-group button {
    padding: 10px 20px;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}

.button-group .submit-button {
    background-color: darkgreen;
}

.download-button-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.download-button {
    padding: 10px 20px;
    background-color: blue;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
}

.page {
    width: 100%;
    padding: 20px;
    border: 1px solid #ddd;
    margin-bottom: 20px;
}

.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
    padding-top: 60px;
}

.modal-content {
    background-color: #fefefe;
    margin: 5% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 500px;
}

.modal-buttons {
    text-align: center;
    margin-top: 20px;
}

.modal-buttons button {
    padding: 10px 20px;
    margin: 0 10px;
    font-size: 16px;
}

.form-confirm {
    font-family: Tahoma, sans-serif;
    font-size: 14px;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
}

.form-confirm label {
    display: block;
    margin-bottom: 10px;
}

.form-confirm ul {
    margin: 0;
    padding: 0 0 0 20px;
    list-style-type: disc;
}

.form-confirm input[type="checkbox"] {
    margin-top: 10px;
}

.additional-info {
    display: none;
    margin-top: 10px;
}

textarea {
    width: 100%;
    height: 100px;
}

button:hover {
    background-color: #0056b3;
}

.belanghebbende-container {
    margin-bottom: 15px;
}

.promo {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #ffcc00;
    color: #333;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    font-size: 14px;
}

.promo img {
    max-width: 30px;
    margin-right: 10px;
    vertical-align: middle;
}

.promo strong {
    font-size: 16px;
    display: block;
    margin-bottom: 5px;
}

.content {
    min-height: 150vh;
}

/* Mobiele aanpassingen */
@media (max-width: 600px) {
    body {
        padding: 10px;
    }

    .form-container {
        max-width: 100%;
        padding: 15px;
    }

    .logo img {
        max-width: 100%;
    }

    .step-indicators {
        flex-direction: column;
    }

    .step {
        width: 100%;
        padding: 10px;
        font-size: 14px;
        margin-bottom: 5px;
    }

    .form-group label {
        font-size: 14px;
    }

    .switch {
        flex-wrap: wrap;
        gap: 10px;
    }

    .switch-label {
        width: 100%;
        padding: 8px 15px;
        font-size: 14px;
        text-align: center;
    }

    .confirmation-switch .switch-label {
        padding: 8px 10px; /* Iets compacter op mobiel */
        font-size: 12px; /* Kleiner lettertype voor lange labels */
    }

    .navigation-buttons {
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .navigation-buttons button {
        width: 100%;
        padding: 8px 15px;
        font-size: 14px;
        margin-bottom: 10px;
    }

    .terug-button {
        order: 2;
    }

    .prev-button {
        order: 1;
    }

    .next-button {
        order: 3;
    }

    .signature-pad {
        width: 100%;
        max-width: 300px;
        height: 150px;
    }

    .submit-button {
        width: 100%;
        padding: 10px;
    }

    .modal-content {
        width: 90%;
        max-width: 400px;
        padding: 15px;
    }

    .loading-screen {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .loader {
        border: 8px solid #f3f3f3; /* Lichtgrijs */
        border-top: 8px solid #3498db; /* Blauw */
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .loading-screen p {
        margin-top: 20px;
        font-size: 18px;
        color: #333;
    }

    .hidden {
        display: none;
    }
}
