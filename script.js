do {
    options = prompt(`
Escolha uma das opções abaixo:
1- Opção 1
2- Opção 2
3- Opção 3
4- Opção 4
5- Encerrar
    `)
    
switch (options) {
        case "1":
            alert("Você escolheu a Opção 1")
            break
        case "2":
            alert("Você escolheu a Opção 2")
            break
        case "3":
            alert("Você escolheu a Opção 3")
            break
        case "4":
            alert("Você escolheu a Opção 4")
            break
        case "5":
            alert("O sistema está sendo encerrado")
            break
        default:
            alert("Opção inválida. Por favor, escolha uma opção entre 1 e 5.")
            }

        } while (options !== "5")