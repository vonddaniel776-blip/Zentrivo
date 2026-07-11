function vytvorAsistenta() {
  const jmeno = document.getElementById("jmeno").value.trim();
  const vysledek = document.getElementById("vysledek");

  if (jmeno === "") {
    vysledek.innerHTML = `
      <div class="card">
        <h2>⚠️ Chyba</h2>
        <p>Zadej jméno asistenta.</p>
      </div>
    `;
    return;
  }

  const schopnosti = [];

  const checkboxy = document.querySelectorAll('input[type="checkbox"]');

  checkboxy.forEach((checkbox) => {
    if (checkbox.checked) {
      schopnosti.push(checkbox.parentNode.textContent.trim());
    }
  });

  let seznam = "";

  if (schopnosti.length > 0) {
    seznam = "<ul>";
    schopnosti.forEach((schopnost) => {
      seznam += `<li>${schopnost}</li>`;
    });
    seznam += "</ul>";
  } else {
    seznam = "<p>Nebyla vybrána žádná schopnost.</p>";
  }

  vysledek.innerHTML = `
    <div class="card">
      <h2>🤖 Asistent vytvořen!</h2>

      <p><strong>Jméno:</strong> ${jmeno}</p>

      <p><strong>Vybrané schopnosti:</strong></p>

      ${seznam}

      <p><strong>Stav:</strong> Připraven k napojení na AI.</p>
    </div>
  `;
}
