document.querySelector('.lead-form').addEventListener('submit', function(event) {
      event.preventDefault();
      const data = Object.fromEntries(new FormData(event.currentTarget).entries());
      const message = `Olá, quero solicitar um diagnóstico estratégico.%0A%0ANome: ${data.nome}%0AEmpresa: ${data.empresa}%0AE-mail: ${data.email}%0ATelefone: ${data.telefone}%0AFaturamento: ${data.faturamento}%0ASolução: ${data.solucao}%0AObjetivo: ${data.objetivo}%0AUrgência: ${data.urgencia}`;
      window.open(`https://wa.me/551192230809?text=${message}`, '_blank');
    });
