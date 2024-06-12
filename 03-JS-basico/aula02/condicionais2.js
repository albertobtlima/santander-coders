// Muito útil quando sua variável possuí valores específicos

const permissoes = "admin"; // "aluno" || "professor" || "admin"

switch(permissoes) {
    case "aluno":
        console.log("Você só pode visualizar as aulas.");
        break;
    case "professor":
        console.log("Você pode alterar as aulas.");
        break;
    case "admin":
        console.log("Você pode fazer o que quiser no sistema.");
        break;
    default:
        console.log("Usuário inválido.");
}
