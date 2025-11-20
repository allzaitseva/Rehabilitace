export function ObjednatTermin() {
  return `
    <div class="page objednat-page">
      <h1>Objednat termín</h1>
      <p>Zde si můžete objednat termín na rehabilitaci.</p>
      <form class="booking-form">
        <input type="text" placeholder="Vaše jméno" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Telefon" required />
        <input type="date" required />
        <button type="submit">Odeslat</button>
      </form>
    </div>
  `;
}
