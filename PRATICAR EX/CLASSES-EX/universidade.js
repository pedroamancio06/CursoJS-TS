class University {
    constructor(name) {
        this.name = name;
        this.departaments = [];
    }

    get allDepartaments() {
        console.log(`Departaments: ${this.departaments}`);
    }

    addDepartament(departament) {
        return this.departaments.push(departament);
    }

    removeDepartament(departament) {
        const index = this.departaments.indexOf(departament);
        if (index > -1) {
            this.departaments.splice(index, 1);
            return;
        } else {
            return `${departament} não existe em ${this.departaments}`;
        }
    }
}

const university = new University('FIAP');
university.addDepartament('Matemática');
university.addDepartament('Algorítimos');
university.addDepartament('Modelagem de dados');
university.allDepartaments;

university.removeDepartament()
