let imoveis = []
let opcao = ""

do {
    opcao = prompt("Bem vindo(a) ao cadastro de imóveis!\nImóveis Cadastrados: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Cadastrar imóvel\n2. Consultar imóveis salvos\n3. Sair")

    switch (opcao) {
        case "1":
           let imovel = {}
            imovel.proprietario = prompt("Nome do proprietário:")
            imovel.quartos = prompt("Quantidade de quartos que o imóvel possui:")
            imovel.banheiros = prompt("Quantidade de banheiros que o imóvel possui:")
            imovel.garagem = prompt("O imóvel possui garagem? Sim/Não")

            const confirmacao = confirm("Deseja salvar esse imóvel?\n\nProprietário: " + imovel.proprietario + "\nQuantidade de quartos: " + imovel.quartos + "\nQuantidade de banheiros: " + imovel.banheiros + "\nPossui garagem: " + imovel.garagem)

            if(confirmacao){
                alert("Imóvel salvo com sucesso!")
                imoveis.push(imovel)
            }
            else(
                alert("O imóvel não foi salvo.\nVoltando ao menu...")
            )
            break
        case "2":
                for (let i = 0; i < imoveis.length; i++) {
                    alert("Imóvel: " + (i +1) + "\nProprietário: " + imoveis[i].proprietario + "\nQuantidade de quartos: "
                    + imoveis[i].quartos + "\nQuantidade de banheiros: " + imoveis[i].banheiros + "\nPossui garagem: " + imoveis[i].garagem )                    
                }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")

    }

} while (opcao !== "3");