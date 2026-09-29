(function(){
  // Menú móvil
  var btnMenu = document.getElementById('btn-menu');
  var menu = document.getElementById('menu-principal');
  btnMenu.addEventListener('click', function(){
    var abierto = menu.classList.toggle('abierto');
    btnMenu.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  // Cerrar menú al hacer click en un enlace o con Escape
  var menuLinks = menu.querySelectorAll('a');
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function(){
      if (menu.classList.contains('abierto')) {
        menu.classList.remove('abierto');
        btnMenu.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && menu.classList.contains('abierto')) {
      menu.classList.remove('abierto');
      btnMenu.setAttribute('aria-expanded', 'false');
      btnMenu.focus();
    }
  });

  // Toolbar de accesibilidad: Selector de 3 tamaños de texto
  var btnTexto = document.getElementById('btn-texto');
  var menuTamanos = document.getElementById('menu-tamanos');
  var lblTamanoActual = document.getElementById('lbl-tamano-actual');
  var optsTamano = document.querySelectorAll('.opt-tamano');
  var btnContraste = document.getElementById('btn-contraste');

  var labelsTamano = {
    'normal': 'Normal',
    'grande': 'Grande',
    'muy-grande': 'Muy grande'
  };

  function aplicarTamano(tamano, guardar){
    if (!labelsTamano[tamano]) tamano = 'normal';

    document.documentElement.classList.remove('texto-normal', 'texto-grande', 'texto-muy-grande');
    document.body.classList.remove('texto-normal', 'texto-grande', 'texto-muy-grande');

    if (tamano !== 'normal') {
      document.documentElement.classList.add('texto-' + tamano);
      document.body.classList.add('texto-' + tamano);
    } else {
      document.documentElement.classList.add('texto-normal');
      document.body.classList.add('texto-normal');
    }

    if (lblTamanoActual) {
      lblTamanoActual.textContent = labelsTamano[tamano];
    }

    for (var i = 0; i < optsTamano.length; i++) {
      var coincide = optsTamano[i].getAttribute('data-size') === tamano;
      optsTamano[i].setAttribute('aria-checked', coincide ? 'true' : 'false');
    }

    if (guardar) {
      try { localStorage.setItem('budgeta-font-size', tamano); } catch(err){}
    }
  }

  function abrirMenuTamanos(){
    if (!menuTamanos) return;
    menuTamanos.removeAttribute('hidden');
    btnTexto.setAttribute('aria-expanded', 'true');
    var activo = menuTamanos.querySelector('[aria-checked="true"]') || optsTamano[0];
    if (activo && activo.focus) activo.focus();
  }

  function cerrarMenuTamanos(retornarFoco){
    if (!menuTamanos) return;
    menuTamanos.setAttribute('hidden', '');
    btnTexto.setAttribute('aria-expanded', 'false');
    if (retornarFoco && btnTexto && btnTexto.focus) {
      btnTexto.focus();
    }
  }

  if (btnTexto && menuTamanos) {
    btnTexto.addEventListener('click', function(e){
      e.stopPropagation();
      var estaAbierto = btnTexto.getAttribute('aria-expanded') === 'true';
      if (estaAbierto) {
        cerrarMenuTamanos(false);
      } else {
        abrirMenuTamanos();
      }
    });

    for (var j = 0; j < optsTamano.length; j++) {
      (function(opt){
        opt.addEventListener('click', function(e){
          e.stopPropagation();
          var size = opt.getAttribute('data-size');
          aplicarTamano(size, true);
          cerrarMenuTamanos(true);
        });

        opt.addEventListener('keydown', function(e){
          var list = Array.prototype.slice.call(optsTamano);
          var idx = list.indexOf(opt);

          if (e.key === 'ArrowDown') {
            e.preventDefault();
            var next = list[(idx + 1) % list.length];
            if (next) next.focus();
          } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            var prev = list[(idx - 1 + list.length) % list.length];
            if (prev) prev.focus();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            cerrarMenuTamanos(true);
          } else if (e.key === 'Tab') {
            cerrarMenuTamanos(false);
          }
        });
      })(optsTamano[j]);
    }

    document.addEventListener('click', function(e){
      if (!menuTamanos.hasAttribute('hidden') && !menuTamanos.contains(e.target) && !btnTexto.contains(e.target)) {
        cerrarMenuTamanos(false);
      }
    });
  }

  // Restaurar tamaño guardado
  try {
    var guardado = localStorage.getItem('budgeta-font-size');
    if (guardado && labelsTamano[guardado]) {
      aplicarTamano(guardado, false);
    }
  } catch(e){}

  // Control de alto contraste
  btnContraste.addEventListener('click', function(){
    var activo = document.body.classList.toggle('contraste-alto');
    document.body.classList.toggle('contrast-alto', activo);
    btnContraste.setAttribute('aria-pressed', activo ? 'true' : 'false');
    try { localStorage.setItem('budgeta-contraste', activo ? 'true' : 'false'); } catch(err){}
  });

  try {
    if (localStorage.getItem('budgeta-contraste') === 'true') {
      document.body.classList.add('contraste-alto', 'contrast-alto');
      btnContraste.setAttribute('aria-pressed', 'true');
    }
  } catch(e){}

  // Contador animado del balance de ejemplo (respeta reduced motion)
  var balanceEl = document.getElementById('balance-demo');
  var target = 165500;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function formatear(n){
    return '$ ' + Math.round(n).toLocaleString('es-AR');
  }

  if (reduce) {
    balanceEl.textContent = formatear(target);
  } else {
    var start = null;
    var duracion = 1100;

    function paso(ts){
      if (!start) start = ts;
      var progreso = Math.min((ts - start) / duracion, 1);
      var valor = target * (1 - Math.pow(1 - progreso, 3));
      balanceEl.textContent = formatear(valor);

      if (progreso < 1) requestAnimationFrame(paso);
    }

    requestAnimationFrame(paso);
  }

  // Validación accesible del formulario
  var form = document.getElementById('form-contacto');
  var status = document.getElementById('form-status');

  function setError(id, msg){
    document.getElementById(id).textContent = msg || '';
  }

  // Limpiar errores en tiempo real mientras el usuario escribe
  var camposForm = [document.getElementById('nombre'), document.getElementById('email'), document.getElementById('mensaje')];
  for (var c = 0; c < camposForm.length; c++) {
    (function(campo){
      if (!campo) return;
      campo.addEventListener('input', function(){
        if (campo.getAttribute('aria-invalid') === 'true') {
          campo.setAttribute('aria-invalid', 'false');
          setError(campo.id + '-error', '');
        }
      });
    })(camposForm[c]);
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var mensaje = document.getElementById('mensaje');
    var valido = true;

    setError('nombre-error', '');
    setError('email-error', '');
    setError('mensaje-error', '');

    nombre.setAttribute('aria-invalid', 'false');
    email.setAttribute('aria-invalid', 'false');
    mensaje.setAttribute('aria-invalid', 'false');

    if (!nombre.value.trim()) {
      setError('nombre-error', 'Ingresá tu nombre.');
      nombre.setAttribute('aria-invalid', 'true');
      valido = false;
    }

    var emailOk = /\S+@\S+\.\S+/.test(email.value);

    if (!emailOk) {
      setError('email-error', 'Ingresá un correo electrónico válido.');
      email.setAttribute('aria-invalid', 'true');
      valido = false;
    }

    if (!mensaje.value.trim()) {
      setError('mensaje-error', 'Escribí tu mensaje.');
      mensaje.setAttribute('aria-invalid', 'true');
      valido = false;
    }

    if (!valido) {
      status.textContent = '';

      var primerError = form.querySelector('[role="alert"]:not(:empty)');

      if (primerError) {
        var campo = primerError.previousElementSibling;
        if (campo && campo.focus) campo.focus();
      }

      return;
    }

    status.textContent = '¡Gracias, ' + nombre.value.trim() + '! Recibimos tu mensaje y te vamos a responder a la brevedad.';
    form.reset();
  });
})();