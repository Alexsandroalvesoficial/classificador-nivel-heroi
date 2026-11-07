const readline = require("node:readline/promises");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

function classificarNivel(xp) {
    if (xp <= 1000) return "Ferro";
    if (xp <= 2000) return "Bronze";
    if (xp <= 5000) return "Prata";
    if (xp <= 7000) return "Ouro";
    if (xp <= 8000) return "Platina";
    if (xp <= 9000) return "Ascendente";
    if (xp <= 10000) return "Imortal";
    return "Radiante";
}

async function iniciarClassificador() {
    console.log("====================================");
    console.log("       CLASSIFICADOR DE HEROI");
    console.log("====================================\n");

    let continuar = "s";

    while (continuar.toLowerCase() === "s") {
        const nome = (await rl.question("Digite o nome do heroi: ")).trim();
        const xpTexto = (await rl.question("Digite a quantidade de XP: ")).trim();
        const xp = Number(xpTexto);

        if (!nome || !xpTexto || !Number.isFinite(xp) || xp < 0) {
            console.log("\nEntrada invalida. Informe um nome e um XP numerico maior ou igual a zero.\n");
        } else {
            const nivel = classificarNivel(xp);

            console.log("\n------------------------------------");
            console.log(`O Heroi de nome ${nome} esta no nivel de ${nivel}`);
            console.log("------------------------------------\n");
        }

        continuar = (await rl.question("Deseja classificar outro heroi? (s/n): ")).trim();
        console.log("");
    }

    console.log("Programa encerrado. Ate a proxima!");
    rl.close();
}

iniciarClassificador().catch((erro) => {
    console.error("Ocorreu um erro ao executar o programa:", erro);
    rl.close();
});
