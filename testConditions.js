export function BloodResult (bloodMom, bloodDad) {
    if (bloodMom.equals("1") && bloodDad.isEqual("1")) {
        return "TIPO SANGUÍNEO: A" + "DOADOR PARA: A e AB";
    } else if (bloodMom.equals("1") && bloodDad.equals("2")) {
        return "TIPO SANGUÍNEO: AB" + "DOADOR PARA: AB";
    } else if (bloodMom.equals("1") && bloodDad.equals("3")) {
        return "TIPO SANGUÍNEO: A" + "DOADOR PARA: A e AB";
    } else if (bloodMom.equals("2") && bloodDad.equals("1")) {
        return "TIPO SANGUÍNEO: AB" + "DOADOR PARA: AB";
    } else if (bloodMom.equals("2") && bloodDad.equals("2")) {
        return "TIPO SANGUÍNEO: B" + "DOADOR PARA: B e AB";
    } else if (bloodMom.equals("2") && bloodDad.equals("3")) {
        return "TIPO SANGUÍNEO: B" + "DOADOR PARA: B e AB";
    } else if (bloodMom.equals("3") && bloodDad.equals("1")) {
        return "TIPO SANGUÍNEO: A" + "DOADOR PARA: A e AB";
    } else if (bloodMom.equals("3") && bloodDad.equals("2")) {
        return "TIPO SANGUÍNEO: B" + "DOADOR PARA: B e AB";
    } else if (bloodMom.equals("3") && bloodDad.equals("3")) {
        return "TIPO SANGUÍNEO: O" + "DOADOR PARA: doador universal";
    } else if (bloodMom.equals("4") && bloodDad.equals("1")) {
        return "TIPO SANGUÍNEO: AB" + "DOADOR PARA: AB";
    } else if (bloodMom.equals("4") && bloodDad.equals("2")) {
        return "TIPO SANGUÍNEO: AB" + "DOADOR PARA: AB";
    } else if (bloodMom.equals("4") && bloodDad.equals("3")) {
        return "TIPO SANGUÍNEO: AB" + "DOADOR PARA: AB";
    } else if (bloodMom.equals("4") && bloodDad.equals("4")) {
        return "TIPO SANGUÍNEO: AB" + "DOADOR PARA: AB";
    }
}

export function RHResult (RHMom, RHDad) {
    if (RHMom.equals("1") && RHDad.equals("1")) {
        return "RH: Positivo";
    } else if (RHMom.equals("1") && RHDad.equals("2")) {
        return "RH: Positivo";
    } else if (RHMom.equals("2") && RHDad.equals("1")) {
        return "RH: Positivo";
    } else if (RHMom.equals("2") && RHDad.equals("2")) {
        return "RH: Negativo";
    }
}

export function DaltonismResult (GeneMom, GeneDad) {
    if (GeneMom.equals("1") && GeneDad.equals("1")) {
        return "O embrião não nascerá com Daltonismo";
    } else if (GeneMom.equals("2") && GeneDad.equals("2")) {
        return "O embrião nascerá com Daltonismo";
    } else if (GeneMom.equals("3") && GeneDad.equals("1")) {
        return "Se o embrião for do sexo feminino: 25% de chances de nascer sem daltonismo, mas portando o gene do daltonismo; 50% de chances de nascer sem daltonismo." 
        + "Se o embrião for do sexo masculino: 25% de chances de nascer com daltonismo; 50% de chance de nascer sem daltonismo";
    } else if (GeneMom.equals("3") && GeneDad.equals("2")) {
        return "Se o embrião for do sexo feminino: 25% de chances de nascer sem daltonismo, mas portando o gene do daltonismo; 50% de chances de nascer com daltonismo."
        + "Se o embrião for do sexo masculino: 25% de chances de nascer sem daltonismo; 50% de chance de nascer com daltonismo";
    } else if (GeneMom.equals("1") && GeneDad.equals("2")) {
        return "Se o embrião for do sexo feminino: 50% de chances de nascer sem daltonismo, mas portando o gene do daltonismo."
        + "Se o embrião for do sexo masculino: 50% de chance de nascer sem daltonismo";
    } else if (GeneMom.equals("2") && GeneDad.equals("1")) {
        return "Se o embrião for do sexo feminino: 50% de chances de nascer com daltonismo, mas portando o gene do daltonismo."
        + "Se o embrião for do sexo masculino: 50% de chance de nascer com daltonismo";
    }
}

export function AlbinismResult (GeneMom, GeneDad) {
    if (GeneMom.equals("1") && GeneDad.equals("1")) {
        return "O embrião não nascerá com Albinismo";
    } else if (GeneMom.equals("2") && GeneDad.equals("2")) {
        return "O embrião nascerá com Albinismo";
    } else if (GeneMom.equals("3") && GeneDad.equals("1")) {
        return "Se o embrião for do sexo feminino: 25% de chances de nascer sem Albinismo, mas portando o gene do Albinismo; 50% de chances de nascer sem Albinismo." 
        + "Se o embrião for do sexo masculino: 25% de chances de nascer com Albinismo; 50% de chance de nascer sem Albinismo";
    } else if (GeneMom.equals("3") && GeneDad.equals("2")) {
        return "Se o embrião for do sexo feminino: 25% de chances de nascer sem Albinismo, mas portando o gene do Albinismo; 50% de chances de nascer com Albinismo."
        + "Se o embrião for do sexo masculino: 25% de chances de nascer sem daltonismo; 50% de chance de nascer com daltonismo";
    } else if (GeneMom.equals("1") && GeneDad.equals("2")) {
        return "Se o embrião for do sexo feminino: 50% de chances de nascer sem Albinismo, mas portando o gene do Albinismo."
        + "Se o embrião for do sexo masculino: 50% de chance de nascer sem Albinismo";
    } else if (GeneMom.equals("2") && GeneDad.equals("1")) {
        return "Se o embrião for do sexo feminino: 50% de chances de nascer com Albinismo, mas portando o gene do Albinismo."
        + "Se o embrião for do sexo masculino: 50% de chance de nascer com Albinismo";
    }
}

export function HemofilicResult (GeneMom, GeneDad) {
    if (GeneMom.equals("1") && GeneDad.equals("1")) {
        return "O embrião não nascerá com Hemofilia";
    } else if (GeneMom.equals("2") && GeneDad.equals("2")) {
        return "O embrião nascerá com Hemofilia";
    } else if (GeneMom.equals("3") && GeneDad.equals("1")) {
        return "Se o embrião for do sexo feminino: 25% de chances de nascer sem Hemofilia, mas portando o gene do Hemofilia; 50% de chances de nascer sem Hemofilia." 
        + "Se o embrião for do sexo masculino: 25% de chances de nascer com Hemofilia; 50% de chance de nascer sem Hemofilia";
    } else if (GeneMom.equals("3") && GeneDad.equals("2")) {
        return "Se o embrião for do sexo feminino: 25% de chances de nascer sem Hemofilia, mas portando o gene do Hemofilia; 50% de chances de nascer com Hemofilia."
        + "Se o embrião for do sexo masculino: 25% de chances de nascer sem daltonismo; 50% de chance de nascer com daltonismo";
    } else if (GeneMom.equals("1") && GeneDad.equals("2")) {
        return "Se o embrião for do sexo feminino: 50% de chances de nascer sem Hemofilia, mas portando o gene do Hemofilia."
        + "Se o embrião for do sexo masculino: 50% de chance de nascer sem Hemofilia";
    } else if (GeneMom.equals("2") && GeneDad.equals("1")) {
        return "Se o embrião for do sexo feminino: 50% de chances de nascer com Hemofilia, mas portando o gene do Hemofilia."
        + "Se o embrião for do sexo masculino: 50% de chance de nascer com Hemofilia";
    }
}