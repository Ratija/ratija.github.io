
  // Funktio evästeiden hyväksymisen käsittelyyn
  function acceptCookies() {
    // Tallenna eväste, joka osoittaa evästeiden hyväksynnän
    document.cookie = "cookies_accepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/evasteet";
  }

  // Funktio evästeiden hylkäämisen käsittelyyn
  function rejectCookies() {
    // Poista eväste, joka osoittaa evästeiden hyväksynnän
    document.cookie = "cookies_accepted=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/evasteet";
  
  }

  // Lisää toiminnallisuus evästeiden hyväksymisnapille
  document.getElementById('accept-cookies').addEventListener('click', function() {
    acceptCookies();
    showPrivacyOptions(false); // Piilota yksityisyyshallintavaihtoehdot
  });

  // Lisää toiminnallisuus evästeiden hylkäämisnapille
  document.getElementById('reject-cookies').addEventListener('click', function() {
    rejectCookies();
    showPrivacyOptions(false); // Piilota yksityisyyshallintavaihtoehdot
  });

  // Tarkista, onko evästeiden hyväksyntä jo tallennettu
  function checkCookiesAccepted() {
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();

      if (cookie.indexOf('cookies_accepted=') === 0) {
        return cookie.substring('cookies_accepted='.length, cookie.length) === 'true';
      }
    }

    return false;
  }

  // Näytä tai piilota yksityisyyshallintavaihtoehdot
  function showPrivacyOptions(show) {
    var privacyOptions = document.getElementById('privacy-options');

    if (show) {
      privacyOptions.style.display = 'block';
    } else {
      privacyOptions.style.display = 'none';
    }
  }

  // Tarkista evästeiden hyväksyntä ja tee tarvittavat toimenpiteet
  window.onload = function() {
    var cookiesAccepted = checkCookiesAccepted();

    if (cookiesAccepted) {
      // Evästeiden hyväksyntä on tallennettu, tee tarvittavat toimenpiteet
      // Esim. lataa evästeiden avulla tallennettuja asetuksia tai käynnistä tiettyjä toiminnallisuuksia
    } else {
        // Evästeiden hyväksyntää ei ole tallennettu, näytä eväste- ja yksityisyyshallintavaihtoehdot
        showPrivacyOptions(true);
      }
    };