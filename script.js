const WHATSAPP_NUMERO = "5511922320809";

function abrirWhatsApp() {
  const mensagem = encodeURIComponent("Olá, quero falar com um especialista da Aurez.");
  const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensagem}`;
  window.open(url, "_blank");
}

document.querySelector('.lead-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.currentTarget).entries());

  const message = encodeURIComponent(
    `Olá, quero solicitar um diagnóstico estratégico.

Nome: ${data.nome}
Empresa: ${data.empresa}
E-mail: ${data.email}
Telefone: ${data.telefone}
Faturamento: ${data.faturamento}
Solução: ${data.solucao}
Objetivo: ${data.objetivo}
Urgência: ${data.urgencia}`
  );

  window.open(`https://wa.me/${WHATSAPP_NUMERO}?text=${message}`, '_blank');
});
