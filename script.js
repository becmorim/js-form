const usuarios = [];

function adicionarUsuario(nome, idade, email) {

    if (!nome || !idade || !email) {
        console.error('Todos os campos devem ser preenchidos.');
        return;
    }

    if (idade <= 0) {
        console.error('A idade deve ser maior que 0.');
        return;
    }

    const usuario = { nome, idade, email };
    usuarios.push(usuario);
    console.log('Usuário adicionado com sucesso!');
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado.');
        return;
    }

    console.log('Usuários cadastrados:');
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}
