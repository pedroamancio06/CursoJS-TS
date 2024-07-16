function Senha(usuario,senha) {
    this.usuario = usuario;
    this.senha = senha;
}

Senha.prototype.validaSenha = function() {
    const senhaArray = Array.from(this.senha);
    console.log(senhaArray);
    if (this.senha.length >= 8) return true;
    return false;
}

const senha1 = new Senha('pedro', 'pedro1234');
console.log(senha1.validaSenha());