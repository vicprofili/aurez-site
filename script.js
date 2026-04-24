function sendLead(event){
  event.preventDefault();
  const form = event.target;
  const data = Object.fromEntries(new FormData(form).entries());
  const phone = "5511922320809";
  const msg = `Olá, Aurez! Quero um diagnóstico financeiro.%0A%0ANome: ${data.nome}%0AEmpresa: ${data.empresa}%0AWhatsApp: ${data.whatsapp}%0ADesafio: ${data.desafio}`;
  window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
}
