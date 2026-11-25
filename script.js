// Script de interatividade do site Geração Z
document.addEventListener('DOMContentLoaded', () => {
    // Destaca o link do menu correspondente à seção visível na tela
    const linksNav = document.querySelectorAll('.cabeçalho nav a[href^="#"]');
    const secoes = document.querySelectorAll('main section[id]');

    function destacarLinkAtivo() {
        const posicaoScroll = window.scrollY || window.pageYOffset;

        secoes.forEach(secao => {
            const topoSecao = secao.offsetTop - 140;
            const alturaSecao = secao.offsetHeight;
            const secaoId = secao.getAttribute('id');

            if (posicaoScroll >= topoSecao && posicaoScroll < topoSecao + alturaSecao) {
                linksNav.forEach(link => {
                    link.classList.remove('link-ativo');
                    if (link.getAttribute('href') === `#${secaoId}`) {
                        link.classList.add('link-ativo');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', destacarLinkAtivo);
});
