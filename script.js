function vytvorAsistenta() {
  const jmeno = document.getElementById("jmeno").value;

  const vysledek = document.getElementById("vysledek");

  if (jmeno === "") {
    vysledek.innerHTML = "<p>Zadej jméno asistenta.</p>";
    return;
  }

  vysledek.innerHTML = `
    <h2>✅ Asistent vytvořen</h2>
    <p><strong>Jméno:</strong> ${jmeno}</p>
    <p>Tvůj AI asistent je připraven.</p>
  `;
}
