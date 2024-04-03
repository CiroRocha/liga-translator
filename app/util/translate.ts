import { translationsArray } from "./translationsArray"

export const translateDeckList = (deckList: string): string => {
    let translatedDeckList = baseAdjustments(deckList)
    translatedDeckList = adjustEditions(translatedDeckList)
    translatedDeckList = adjustFoilEtched(translatedDeckList)
    return translatedDeckList
}

const baseAdjustments = (deckList: string): string => {
    let baseDeckList = deckList
    const cardFlipSide = /\/\/(.*?)\(/g
    const foil = "*F*"
    const archidektCategory = /\[.*?\]/g
    const collectionInParentheses = /\(([a-z0-9]*)\)/g
    const amountWithX = /(\d)x\s/g

    baseDeckList = baseDeckList
                    .replaceAll(cardFlipSide, '(')
                    .replaceAll(foil, '')
                    .replaceAll(archidektCategory, '')
                    .replaceAll(collectionInParentheses, '[$1]')
                    .replaceAll(amountWithX, '$1 ')

    return baseDeckList
}

const adjustEditions = (deckList: string) => {
    let ligaFriendlyDeckList = deckList

    for (const edition of translationsArray) {
        ligaFriendlyDeckList = ligaFriendlyDeckList.replaceAll(edition.regex, edition.replacement)
    }

    return ligaFriendlyDeckList
}

const adjustFoilEtched = (deckList: string) => {
    return deckList.replaceAll(/\[(.*?)\]\s\*E\*/g, '[fe$1]')
}