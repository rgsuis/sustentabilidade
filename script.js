// ===== MENU HAMBURGUER PARA MOBILE =====
// Seleciona os elementos
const menuHamburguer = document.getElementById('menu-hamburguer');
const menuLista = document.getElementById('menu-lista');

// Adiciona evento de clique no ícone do menu
menuHamburguer.addEventListener('click', () => {
    // Alterna a classe 'ativo' no menu (mostra/esconde)
    menuLista.classList.toggle('ativo');
    
    // Anima os traços do hamburguer (opcional)
    const spans = menuHamburguer.querySelectorAll('span');
    spans.forEach(span => span.classList.toggle('ativo'));
});

// Fecha o menu ao clicar em um link (melhora experiência)
const links = document.querySelectorAll('.menu-lista a');
links.forEach(link => {
    link.addEventListener('click', () => {
        menuLista.classList.remove('ativo');
    });
});

// ===== EFEITO INTERATIVO: BOTÃO "SAIBA MAIS" =====
// Seleciona o botão e a mensagem
const botao = document.getElementById('botao-saiba-mais');
const mensagem = document.getElementById('mensagem-parana');

// Texto que vai aparecer
const textoParana = "🌿 O Paraná é destaque nacional em sustentabilidade! Líder em produção agrícola, o estado investe em biogás, energia solar e agricultura de precisão. Mais de 90% das embalagens de agrotóxicos são recicladas - um modelo para o Brasil!";

// Adiciona evento de clique
botao.addEventListener('click', () => {
    // Coloca o texto na mensagem
    mensagem.textContent = textoParana;
    
    // Mostra a mensagem (adiciona classe 'visivel')
    mensagem.classList.add('visivel');
    
    // Muda a cor do botão temporariamente (feedback visual)
    botao.style.backgroundColor = '#2e7d32';
    
    // Volta à cor original depois de 0.3 segundos
    setTimeout(() => {
        botao.style.backgroundColor = '#4caf50';
    }, 300);
});

// ===== SCROLL SUAVE AO CLICAR NOS LINKS DO MENU =====
links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Previne o comportamento padrão do link
        
        // Pega o atributo href do link (ex: #inicio)
        const href = link.getAttribute('href');
        
        // Seleciona a seção com esse ID
        const secao = document.querySelector(href);
        
        // Faz a rolagem suave até a seção
        secao.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// ===== DESTACAR ITEM DO MENU AO ROLAR (OPCIONAL) =====
// Adiciona evento de scroll
window.addEventListener('scroll', () => {
    // Pega a posição atual do scroll
    let current = '';
    
    // Para cada seção, verifica se está visível
    document.querySelectorAll('section').forEach(secao => {
        const secaoTop = secao.offsetTop;
        const secaoHeight = secao.clientHeight;
        
        if (scrollY >= (secaoTop - 200)) {
            current = secao.getAttribute('id');
        }
    });
    
    // Remove a classe 'active' de todos os links
    links.forEach(link => {
        link.classList.remove('active');
        // Se o href do link corresponde à seção atual, adiciona 'active'
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== EFEITO EXTRA: CARD DESTAQUE AO PASSAR MOUSE =====
// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    // Quando mouse entra no card
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 10px 20px rgba(46, 125, 50, 0.3)';
    });
    
    // Quando mouse sai do card
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
    });
});