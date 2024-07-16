function Usuario(email, senha) {
    this.email = email;
    this.senha = senha;
}

Usuario.prototype.isAdmin = function() {
    if (this.admin === true) {
        return 'Usuário é administrador!';
    } else {
        return 'Usuário não é administrador!';
    } 
}

Admin.prototype = Object.create(Usuario.prototype)
Admin.prototype.constructor = Admin;

function Admin(email, senha) {
    Usuario.call(this, email, senha);
    this.admin = true;
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Admin1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
