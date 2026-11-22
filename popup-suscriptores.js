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


// ============================================
// PESTAÑA "REGALOS" + AVISO EN INICIO (temporada)
// Se muestra sola hasta el 6 de enero de 2027 y luego desaparece.
// Para quitarla antes: borra este bloque completo (desde esta línea hasta el final).
// ============================================
(function () {
  if (new Date() >= new Date('2027-01-07T00:00:00')) return;

  function listo(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  listo(function () {
    // Estilos
    var st = document.createElement('style');
    st.textContent =
      '.nav-regalos a{color:#E2A33D !important;font-weight:700 !important;}' +
      '@media (min-width:821px) and (max-width:1500px){.nav-links{gap:15px !important;}.nav-links a{font-size:13.5px !important;}.brand span{font-size:20px !important;}}' +
      '@media (max-width:820px){.nav-links{gap:0 !important;}.nav-links a{font-size:14.5px !important;}}' +
      '';
    document.head.appendChild(st);

    // Pestaña "Regalos" en el menú (todas las páginas que tienen menú)
    var ul = document.getElementById('navLinks');
    if (ul && !ul.querySelector('a[href="regalos-ninja-navidad.html"]')) {
      var li = document.createElement('li');
      li.className = 'nav-regalos';
      li.innerHTML = '<a href="regalos-ninja-navidad.html">🎁 Regalos</a>';
      // Se coloca antes de "Guías" si existe; si no, al final
      var guias = Array.prototype.find.call(ul.querySelectorAll('li'), function (el) {
        return /gu[ií]as/i.test(el.textContent);
      });
      if (guias) ul.insertBefore(li, guias);
      else ul.appendChild(li);
    }
  });
})();



// ============================================
// TARJETA NARANJA "REGALOS" EN LA PÁGINA DE INICIO (temporada)
// Va dentro de la página de inicio, justo debajo del menú. No flota ni tapa nada.
// Se apaga sola el 7 de enero de 2027.
// Para quitarla antes: borra este bloque completo (hasta la próxima línea de ====).
// ============================================
(function () {
  if (new Date() >= new Date('2027-01-07T00:00:00')) return;

  function listo(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  listo(function () {
    var hero = document.getElementById('inicio');
    var navWrap = document.querySelector('.nav-wrap');
    if (!hero || !navWrap || document.querySelector('.nec-home-card')) return;

    var st = document.createElement('style');
    st.textContent =
      '.nec-home-wrap{background:#201D1A;padding:14px 18px 0;}' +
      '.nec-home-card{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:18px;' +
      'background:linear-gradient(135deg,#FFB02E,#F57C0B);color:#201D1A;border-radius:16px;padding:16px 22px;' +
      'text-decoration:none;box-shadow:0 8px 24px rgba(0,0,0,.3);font-family:"Work Sans",system-ui,sans-serif;}' +
      '.nec-home-card .nec-tag{display:inline-block;background:#201D1A;color:#FFB02E;font-size:11.5px;font-weight:800;' +
      'letter-spacing:1.2px;padding:4px 9px;border-radius:999px;margin-bottom:6px;}' +
      '.nec-home-card .nec-tit{font-size:22px;font-weight:800;line-height:1.2;margin:0 0 3px;}' +
      '.nec-home-card .nec-sub{font-size:14.5px;line-height:1.35;margin:0;}' +
      '.nec-home-card .nec-btn{flex:none;background:#201D1A;color:#fff;font-weight:700;font-size:15px;' +
      'padding:12px 20px;border-radius:10px;white-space:nowrap;}' +
      '.nec-home-card:hover .nec-btn{background:#000;}' +
      '@media (max-width:640px){.nec-home-card{flex-direction:column;align-items:flex-start;gap:12px;padding:14px 16px;}' +
      '.nec-home-card .nec-tit{font-size:19px;}.nec-home-card .nec-btn{width:100%;text-align:center;box-sizing:border-box;}}';
    document.head.appendChild(st);

    var w = document.createElement('div');
    w.className = 'nec-home-wrap';
    w.innerHTML =
      '<a class="nec-home-card" href="regalos-ninja-navidad.html">' +
      '<div><span class="nec-tag">🎁 BLACK FRIDAY Y NAVIDAD</span>' +
      '<p class="nec-tit">Regalos Ninja según quién lo recibe</p>' +
      '<p class="nec-sub">Postres, café, familia y fiestas. Mira el precio de hoy en Amazon.</p></div>' +
      '<span class="nec-btn">Ver regalos →</span></a>';
    navWrap.insertAdjacentElement('afterend', w);
  });
})();


// ============================================
// ENLACES LEGALES EN EL PIE DE PÁGINA (permanente)
// Agrega "Política de privacidad · Contacto" en todas las páginas.
// ============================================
(function () {
  function listo(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }
  listo(function () {
    if (document.querySelector('.nec-legal-links')) return;
    var cont = document.querySelector('footer .container') || document.querySelector('footer');
    if (!cont) return;
    var p = document.createElement('p');
    p.className = 'nec-legal-links';
    p.style.cssText = 'font-size:13px;margin:14px 0 0;color:rgba(245,239,228,0.7);';
    p.innerHTML =
      '<a href="privacidad.html" style="color:inherit;text-decoration:underline;">Política de privacidad</a>' +
      ' &nbsp;·&nbsp; ' +
      '<a href="contacto.html" style="color:inherit;text-decoration:underline;">Contacto</a>';
    var nota = cont.querySelector('.legal-note');
    if (nota) cont.insertBefore(p, nota);
    else cont.appendChild(p);
  });
})();


