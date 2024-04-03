import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import {translateDeckList} from '../util/translate'

export const meta: MetaFunction = () => {
  return [
    { title: "Liga Converter" },
    { name: "description", content: "Converta as decklist com edições de padrão global para as do alecrim dourado que é a Liga" },
  ];
};

export const Index = () => {
  const listRef = useRef<HTMLTextAreaElement>(null)
  const resultRef = useRef<HTMLTextAreaElement>(null)

  const translate = () => {
    if (!listRef.current || !resultRef.current) return null

    const deckList = listRef.current.value
    const translatedDeckList = translateDeckList(deckList)
    resultRef.current.value = translatedDeckList
  }

  return (
    <div>
      <h1>Liga Converter</h1>
      <h2>Insira a decklist no formato exportado pelo <a href="https://archidekt.com/">Archidekt</a> ou similiar (1 Nome da Carta [Sigla da Edição]) e o conversor vai jogar as edições para o padrão da Liga que por algum motivo achou uma boa ideia ser diferente do resto do mundo.</h2>
      <textarea placeholder="Insira a decklist aqui" ref={listRef}/>
      <button onClick={translate}>Traduzir</button>
      <textarea ref={resultRef}></textarea>
    </div>
  );
}

export default Index
