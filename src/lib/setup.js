import shuffleSeed from "shuffle-seed";

export default class Setup {
  constructor() {
    this.spread = {
      '5':  { good: 3, evil: 2 },
      '6':  { good: 4, evil: 2 },
      '7':  { good: 4, evil: 3 },
      '8':  { good: 5, evil: 3 },
      '9':  { good: 6, evil: 3 },
      '10': { good: 6, evil: 4 }
    }
  }

  sort(players, charactersInfo, includedCharacters, seed) {
    const { good, evil } = this.spread[players.length.toString()]
    const basicCharacters = new Array(good).fill('soldier').concat(new Array(evil).fill('minion'))

    const roster = this.validCharacters(basicCharacters, charactersInfo, includedCharacters)

    return shuffleSeed.shuffle(players, seed).map((player, index) => ({ ...player, character: roster[index] }));
  }

  includedCharacters(characters) {
    return Object.keys(characters).filter(character => characters[character])
  }

  character(characters, slug) {
    return characters.find((char) => char.slug === slug)
  }

  validCharacters(basicCharacters, charactersInfo, includedCharacters) {
    return this.includedCharacters(includedCharacters).reduce((acc, char) => {
      const team = this.character(charactersInfo, char).team
      const index = acc.indexOf(team === 'good' ? 'soldier' : 'minion')

      if (index !== -1) acc[index] = char;

      return acc;
    }, basicCharacters)
  }
}