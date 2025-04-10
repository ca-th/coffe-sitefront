// Criação dos grãos de café flutuantes
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('coffee-beans');
  
    if (container) {
      for (let i = 0; i < 40; i++) {
        const bean = document.createElement('div');
        bean.className = 'bean';
        bean.style.left = Math.random() * 100 + 'vw';
        bean.style.animationDelay = Math.random() * 10 + 's';
        bean.style.width = (10 + Math.random() * 6) + 'px';
        bean.style.height = (6 + Math.random() * 4) + 'px';
        container.appendChild(bean);
      }
    }
  });
  
  // Função para exibir as descrições
  function mostrarDescricao(tipo) {
    const div = document.getElementById("descricao");
  
    if (div.dataset.active === tipo) {
      div.style.display = "none";
      delete div.dataset.active;
      return;
    }
  
    let texto = "";
    switch (tipo) {
      case 'cardapio':
        texto = `
  <p><strong>Bebidas Quentes:</strong><br>
  - Espresso Tradicional: Clássico e intenso.<br>
  - Cappuccino: Equilíbrio perfeito entre café, leite vaporizado e espuma.<br>
  - Chá Gourmet: Variedades selecionadas de chá preto, verde e camomila.</p>
  
  <p><strong>Bebidas Frias:</strong><br>
  - Iced Latte: Café gelado com leite, refrescante e suave.<br>
  - Frappuccino de Caramelo: Mistura gelada de café, leite e caramelo.<br>
  - Smoothie Tropical: Combinação de frutas frescas com iogurte natural.</p>
  
  <p><strong>Doces e Sobremesas:</strong><br>
  - Bolo de Cenoura com Cobertura de Chocolate: Caseiro e irresistível.<br>
  - Brownie de Chocolate: Rico e decadente, servido quente.<br>
  - Croissant: Tradicional ou outros sabores.</p>
  
  <p><strong>Salgados:</strong><br>
  - Pão de Queijo: Com muito queijo. Perfeito para acompanhar um café.<br>
  - Tapioca Recheada: Opções variadas como queijo e presunto ou frango com requeijão.<br>
  - Sanduíche Artesanal: Com recheios frescos e opções vegetarianas.</p>
        `;
        break;
  
      case 'sobre':
        texto = `
  A Coffee Shop Tia Rosa surgiu da paixão pelo café e do desejo de criar um ambiente acolhedor, pensado para promover encontros e momentos de convivência. Nosso objetivo é oferecer uma experiência única, onde o prazer de apreciar um café de qualidade se une a um espaço que convida ao relaxamento e à conexão.
        `;
        break;
  
      case 'reserva':
        texto = `
  <form id="form-reserva">
    <label for="nome">Nome:</label><br>
    <input type="text" id="nome" name="nome" required><br><br>
  
    <label for="email">E-mail:</label><br>
    <input type="email" id="email" name="email" required><br><br>
  
    <label for="data">Data da reserva:</label><br>
    <input type="date" id="data" name="data" required><br><br>
  
    <label for="hora">Hora:</label><br>
    <input type="time" id="hora" name="hora" required><br><br>
  
    <label for="quantidade">Quantidade de pessoas:</label><br>
    <input type="number" id="quantidade" name="quantidade" min="1" required><br><br>
  
    <button type="submit">Enviar Reserva</button>
  </form>
        `;
        break;
  
      case 'contato':
        texto = `
  Entre em contato conosco para reservas, sugestões ou mais informações.<br>
  Segue o e-mail: <strong>coffee@tiarosa.com</strong>.
        `;
        break;
  
      default:
        texto = "Opção inválida.";
    }
  
    div.innerHTML = texto.trim(); // para tag funcionar no js
    div.style.display = "block";
    div.dataset.active = tipo;
  
    if (tipo === 'reserva') {
      const form = document.getElementById('form-reserva');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
  
        const dados = {
          nome: form.nome.value,
          email: form.email.value,
          data: form.data.value,
          hora: form.hora.value,
          quantidade: form.quantidade.value,
        };
  
        console.log("Reserva enviada:", dados);
        alert("Sua reserva foi feita com sucesso!");
        form.reset();
      });
    }
  }
  