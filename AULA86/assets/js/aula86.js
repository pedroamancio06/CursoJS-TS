class ValidaFormulario {
    constructor() {
        this.form = document.querySelector('.form');
        this.eventos();
    }

    eventos() {
        this.form.addEventListener('submit', (e) => {
            this.handleSubmit(e);
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas  = this.senhasValidas();

        if (camposValidos && senhasValidas) {
            alert('Formulário enviado!');
            this.form.submit();
        }
    }

    camposValidos() { 
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        };
        
        for (let campo of this.form.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText;

            if (!campo.value) {
                this.criaErro(campo, `Campo ${label} está vazio!`)
                valid = false;
            };

            if (campo.classList.contains('cpf')) {
                if (!this.validaCpf(campo)) valid = false;
            };

            if (campo.classList.contains('user')) {
                if (!this.validaUsuario(campo)) valid = false;
            };

        };

        return valid;
    }

    senhasValidas() {
        let valid = true;

        const senha = this.form.querySelector('.password');
        const repetirSenha = this.form.querySelector('.confirm-password');;

        if (repetirSenha.value !== senha.value) {
            valid = false;
            this.criaErro(senha, 'Campos "senha" e "repetir senha" precisam ser iguais.!');
            this.criaErro(repetirSenha, 'Campos "senha" e "repetir senha" precisam ser iguais.!');
        }

        if (senha.length < 6 || senha.length > 12) {
            valid = false;
            this.criaErro(campo, 'Senha precisa ter entre 6 e 12 caracteres!')
        }

        return valid;
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }

        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario < 3 || usuario > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres!');
            valid = false;
        };

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Usuário precisa conter somente letras e/ou números!');
            valid = false;
        };

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaFormulario();