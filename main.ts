input.onButtonPressed(Button.A, function () {
    if (QtdeColunasDefinidas < 4) {
        if (BotaoALiberado == 1) {
            if (Coluna0 == 0 || Coluna1 == 0) {
                if (Coluna0 == 0) {
                    basic.showString("C0")
                    Coluna0 = 1
                    QtdeColunasDefinidas += 1
                    BotaoBLiberado = 1
                } else {
                    if (Coluna1 == 0) {
                        basic.showString("C1")
                        Coluna1 = 1
                        QtdeColunasDefinidas += 1
                        BotaoBLiberado = 1
                    }
                }
            } else {
                if (Coluna0 == 1 && Coluna1 == 1) {
                    ColunaAnterior = Coluna
                    Coluna = randint(2, 5)
                    if (Coluna != ColunaAnterior) {
                        basic.showString("C" + convertToText(Coluna))
                        QtdeColunasDefinidas += 1
                        BotaoBLiberado = 1
                    }
                }
            }
        }
    } else {
        basic.showString("Ja foram defindas as 4 categorias")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Nova historia")
    item = 0
    Coluna = 0
    Coluna0 = 0
    Coluna1 = 0
    ColunaAnterior = 0
    BotaoALiberado = 1
    BotaoBLiberado = 0
    QtdeColunasDefinidas = 0
})
input.onButtonPressed(Button.B, function () {
    if (BotaoBLiberado == 1) {
        BotaoALiberado = 1
        basic.showString("I" + convertToText(randint(0, 9)))
    }
})
let QtdeColunasDefinidas = 0
let BotaoBLiberado = 0
let BotaoALiberado = 0
let ColunaAnterior = 0
let Coluna1 = 0
let Coluna0 = 0
let Coluna = 0
let item = 0
item = 0
Coluna = 0
Coluna0 = 0
Coluna1 = 0
ColunaAnterior = 0
BotaoALiberado = 1
BotaoBLiberado = 0
QtdeColunasDefinidas = 0
