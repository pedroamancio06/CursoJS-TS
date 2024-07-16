// Fetch API (GET)
// Documentação: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Basic_concepts

document.addEventListener('click', (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');
        const response = await fetch(href);

        if (response.status !== 200) throw new Error('Erro 404!');
        const html = await response.text(); 
        carregaResultado(html);
    } catch (error) {
        console.log(error)
    }
}

function carregaResultado(html) {
    const resultado = document.querySelector('[date-resultado]');
    resultado.innerHTML = html;
}

// async function carregaPagina(el) {
//     try {
//         const href = el.getAttribute('href');
//         const response = await fetch(href);
        
//         if (response.status !== 200) throw new Error('404!');
        
//         const html = await response.text();
//         carregaResultado(html);
//     } catch (error) {
//         console.log(error);
//     }
// }

// function carregaResultado(response) {
//     const resultado = document.querySelector('.resultado');
//     resultado.innerHTML = response;
// }

