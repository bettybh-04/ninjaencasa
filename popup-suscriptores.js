// ============================================
// POPUP DE SUSCRIPCIÓN - NINJA EN CASA
// Aparece al llegar al 50% de scroll de la página
// Ofrece avisos de ofertas/descuentos de Ninja
// Usa Netlify Forms (gratis, sin cuentas externas)
// ============================================

(function () {
  // No mostrar si ya se suscribió o si cerró el popup hace menos de 7 días
  const yaSuscrito = localStorage.getItem('nec_suscrito');
  const cerradoEn = localStorage.getItem('nec_popup_cerrado');
  const sieteDiasMs = 7 * 24 * 60 * 60 * 1000;

  if (yaSuscrito === 'true') return;
  if (cerradoEn && Date.now() - parseInt(cerradoEn, 10) < sieteDiasMs) return;

  let yaMostrado = false;

  // --- Estilos del popup (tema oscuro / dorado, igual que el sitio) ---
  const estilos = document.createElement('style');
  estilos.textContent = `
    #nec-popup-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.6);
      z-index: 9998;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      padding: 20px;
    }
    #nec-popup-overlay.nec-visible {
      opacity: 1;
    }
    #nec-popup-box {
      background: #1a1a1a;
      border: 1px solid #d9a441;
      border-radius: 16px;
      max-width: 420px;
      width: 100%;
      padding: 32px 28px;
      position: relative;
      text-align: center;
      transform: translateY(20px);
      transition: transform 0.3s ease;
      font-family: inherit;
    }
    #nec-popup-overlay.nec-visible #nec-popup-box {
      transform: translateY(0);
    }
    #nec-popup-close {
      position: absolute;
      top: 12px;
      right: 14px;
      background: none;
      border: none;
      color: #999;
      font-size: 22px;
      cursor: pointer;
      line-height: 1;
      padding: 4px;
    }
    #nec-popup-close:hover { color: #fff; }
    #nec-popup-box h3 {
      color: #d9a441;
      font-size: 22px;
      margin: 0 0 10px;
      letter-spacing: 0.5px;
    }
    #nec-popup-box p {
      color: #e8e8e8;
      font-size: 15px;
      line-height: 1.5;
      margin: 0 0 20px;
    }
    #nec-popup-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    #nec-popup-form input[type="email"] {
      padding: 12px 14px;
      border-radius: 8px;
      border: 1px solid #444;
      background: #262626;
      color: #fff;
      font-size: 15px;
    }
    #nec-popup-form input[type="email"]:focus {
      outline: none;
      border-color: #d9a441;
    }
    #nec-popup-form button {
      background: #d9a441;
      color: #1a1a1a;
      border: none;
      padding: 12px 14px;
      border-radius: 8px;
      font-weight: bold;
      font-size: 15px;
      cursor: pointer;
      transition: background 0.2s;
    }
    #nec-popup-form button:hover { background: #c99530; }
    #nec-popup-nota {
      color: #888;
      font-size: 12px;
      margin-top: 14px;
    }
    #nec-popup-exito {
      color: #d9a441;
      font-size: 16px;
      display: none;
    }
  `;
  document.head.appendChild(estilos);

  // --- HTML del popup ---
  const overlay = document.createElement('div');
  overlay.id = 'nec-popup-overlay';
  overlay.innerHTML = `
    <div id="nec-popup-box">
      <button id="nec-popup-close" aria-label="Cerrar">&times;</button>
      <div id="nec-popup-contenido">
        <h3>¡No te pierdas las ofertas!</h3>
        <p>Recibe avisos cuando los electrodomésticos Ninja bajen de precio en Amazon.</p>
        <form id="nec-popup-form" name="suscriptores" method="POST" data-netlify="true" netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="suscriptores" />
          <input type="text" name="bot-field" style="display:none" />
          <input type="email" name="email" placeholder="Tu correo electrónico" required />
          <button type="submit">Quiero recibir avisos</button>
        </form>
        <p id="nec-popup-nota">Sin spam. Cancelas cuando quieras.</p>
      </div>
      <p id="nec-popup-exito">¡Listo! Ya estás suscrita. Gracias 🙌</p>
    </div>
  `;
  document.body.appendChild(overlay);

  const cerrar = () => {
    overlay.classList.remove('nec-visible');
    localStorage.setItem('nec_popup_cerrado', Date.now().toString());
    setTimeout(() => overlay.remove(), 300);
  };

  overlay.querySelector('#nec-popup-close').addEventListener('click', cerrar);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) cerrar();
  });

  const form = overlay.querySelector('#nec-popup-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const datos = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(datos).toString(),
    })
      .then(() => {
        localStorage.setItem('nec_suscrito', 'true');
        overlay.querySelector('#nec-popup-contenido').style.display = 'none';
        overlay.querySelector('#nec-popup-exito').style.display = 'block';
        setTimeout(cerrar, 2500);
      })
      .catch(() => {
        alert('Hubo un problema. Intenta de nuevo en un momento.');
      });
  });

  // --- Disparo al 50% de scroll ---
  function revisarScroll() {
    if (yaMostrado) return;
    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollActual = window.scrollY;
    if (alturaTotal > 0 && scrollActual / alturaTotal >= 0.5) {
      yaMostrado = true;
      requestAnimationFrame(() => overlay.classList.add('nec-visible'));
      window.removeEventListener('scroll', revisarScroll);
    }
  }

  window.addEventListener('scroll', revisarScroll, { passive: true });
})();
