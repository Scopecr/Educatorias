// ─── LOCATION DATA ───
const locations = {
  barceloneta: {
    name: 'Barceloneta',
    email: 'educatoriaspr@gmail.com',
    waNumber: '17874556128'
  },
  vegabaja: {
    name: 'Vega Baja',
    email: 'educatoriasvb@gmail.com',
    waNumber: '17876694069'
  }
};

let selectedLocation = null;
let currentMethod = 'email';

// ─── LOCATION SELECTOR ───
function selectLocation(key) {
  selectedLocation = key;
  document.getElementById('loc-warning').style.display = 'none';
  Object.keys(locations).forEach(k => {
    const card = document.getElementById('loc-' + k);
    if (k === key) {
      card.style.borderColor = 'var(--forest)';
      card.style.background = 'rgba(45,80,22,0.06)';
    } else {
      card.style.borderColor = 'var(--light-gray)';
      card.style.background = 'var(--cream)';
    }
  });
}

// ─── SEND METHOD TOGGLE ───
function setMethod(method) {
  currentMethod = method;
  document.getElementById('btn-email').className = 'method-btn' + (method === 'email' ? ' active' : '');
  document.getElementById('btn-wa').className = 'method-btn' + (method === 'whatsapp' ? ' active' : '');
  document.getElementById('panel-email').className = 'method-panel' + (method === 'email' ? ' visible' : '');
  document.getElementById('panel-whatsapp').className = 'method-panel' + (method === 'whatsapp' ? ' visible' : '');
}

// ─── SHARED FORM DATA ───
function getFormData() {
  return {
    parent: document.getElementById('parent-name').value.trim(),
    child:  document.getElementById('child-name').value.trim(),
    email:  document.getElementById('email').value.trim(),
    phone:  document.getElementById('phone').value.trim(),
    grade:  document.getElementById('grade').value,
    program: document.getElementById('program').value,
    message: document.getElementById('message').value.trim()
  };
}

function showSuccess(locationName) {
  document.getElementById('form-fields').style.display = 'none';
  const s = document.getElementById('form-success');
  s.querySelector('p').textContent = 'Thank you! The ' + locationName + ' team will be in touch within 24 hours to discuss the perfect program for your child.';
  s.style.display = 'block';
}

// ─── EMAIL SUBMIT ───
function submitForm() {
  if (!selectedLocation) {
    document.getElementById('loc-warning').style.display = 'block';
    document.getElementById('loc-barceloneta').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const d = getFormData();
  if (!d.parent || !d.email) {
    alert('Please fill in at least your name and email address.');
    return;
  }
  const loc = locations[selectedLocation];
  const subject = encodeURIComponent('[' + loc.name + '] New Inquiry: ' + (d.child || d.parent) + ' – ' + (d.program || 'General'));
  const body = encodeURIComponent(
    'Solicitud Educatorias Website\n' +
    'Location: ' + loc.name + '\n\n' +
    'Padre/Guardian: ' + d.parent + '\n' +
    'Nombre del Estudiante: ' + (d.child || 'Not provided') + '\n' +
    'Email: ' + d.email + '\n' +
    'Phone: ' + (d.phone || 'Not provided') + '\n' +
    'Grado/Nivel: ' + (d.grade || 'Not specified') + '\n' +
    'Programa Interest: ' + (d.program || 'Not specified') + '\n\n' +
    'Mensaje:\n' + (d.message || 'No additional message.')
  );
  window.location.href = 'mailto:' + loc.email + '?subject=' + subject + '&body=' + body;
  showSuccess(loc.name);
}

// ─── WHATSAPP SUBMIT ───
function sendWhatsApp(event) {
  if (event) event.preventDefault();
  if (!selectedLocation) {
    document.getElementById('loc-warning').style.display = 'block';
    document.getElementById('loc-barceloneta').scrollIntoView({ behavior: 'smooth', block: 'center' });
    return;
  }
  const d = getFormData();
  if (!d.parent) {
    alert('Por foavor diganos su nombre para enviar el mensaje por WhatsApp.');
    return;
  }
  const loc = locations[selectedLocation];
  const text = encodeURIComponent(
    '👋 Hola Educatorias ' + loc.name + '! Solicitud Online.\n\n' +
    '👤 Padre/Guardian: ' + d.parent + '\n' +
    '🧒 Nombre del Estudiante: ' + (d.child || 'N/A') + '\n' +
    '📧 Email: ' + (d.email || 'N/A') + '\n' +
    '📞 Phone: ' + (d.phone || 'N/A') + '\n' +
    '🎓 Grado/Nivel: ' + (d.grade || 'N/A') + '\n' +
    '📚 Programa Interest: ' + (d.program || 'N/A') + '\n\n' +
    (d.message ? '💬 ' + d.message : '')
  );
  window.open('https://wa.me/' + loc.waNumber + '?text=' + text, '_blank');
  showSuccess(loc.name);
}

// ─── SMOOTH NAV ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── HAMBURGER MENU ───
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  const open = navLinks.classList.toggle('mobile-open');
  hamburger.classList.toggle('open', open);
  hamburger.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav-mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('mobile-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', false);
  });
});
