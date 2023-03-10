import shuffleSeed from "shuffle-seed";

export default class GameLogic {
  constructor(playerData) {
    this.players = playerData
    this.spread = {
      '5':  { good: 3, evil: 2 },
      '6':  { good: 4, evil: 2 },
      '7':  { good: 4, evil: 3 },
      '8':  { good: 5, evil: 3 },
      '9':  { good: 6, evil: 3 },
      '10': { good: 6, evil: 4 }
    }
    this.teamSizePerRound = {
      '5':  [2, 3, 2, 3, 3],
      '6':  [2, 3, 4, 3, 4],
      '7':  [2, 3, 3, 4, 4],
      '8':  [3, 4, 4, 5, 5],
      '9':  [3, 4, 4, 5, 5],
      '10': [3, 4, 4, 5, 5]
    }
    this.characters = [
      {
        slug: 'merlin',
        name: 'Merlin',
        team: 'good',
        power: () => `${this.evilPlayers(false)} são os jogadores do mal`
      },
      {
        slug: 'soldier',
        name: 'Soldier',
        team: 'good',
        power: () => ''
      },
      {
        slug: 'percival',
        name: 'Percival',
        team: 'good',
        power: () => `${this.playersOf(['merlin', 'morgana']).join(' ou ')} podem ser o Merlin`
      },
      {
        slug: 'minion',
        name: 'Minion',
        team: 'evil',
        power: () => `${this.evilPlayers()} são os jogadores do mal`
      },
      {
        slug: 'oberon',
        name: 'Oberon',
        team: 'evil',
        power: () => `Você não sabe quem são os outros jogadores do mal`
      },
      {
        slug: 'morgana',
        name: 'Morgana',
        team: 'evil',
        power: () => `Você aparece como Merlin para o jogador do Percival.\n\n${this.evilPlayers()} são os jogadores do mal`
      },
      {
        slug: 'assassin',
        name: 'Assassino',
        team: 'evil',
        power: () => `No final da partida, se você adivinhar quem é o Merlin, o time do mal vence.\n\n${this.evilPlayers()} são os jogadores do mal`
      },
      {
        slug: 'mordred',
        name: 'Mordred',
        team: 'evil',
        power: () => `Merlin não sabe quem você é.\n\n${this.evilPlayers()} são os jogadores do mal`
      },
    ]
  }

  character(character) {
    return this.characters.find((char) => char.slug === character)
  }

  playersOf(characters) {
    return this.players
      .filter(player => characters.includes(player.character))
      .map(player => player.name)
  }

  evilPlayers(includeMordred = true) {
    return this.players
      .filter(player => this.evilCharacters().includes(player.character) && (includeMordred ? true : player.character !== 'mordred'))
      .map(player => player.name)
      .join(', ')
  }

  evilCharacters() {
    return this.characters
      .filter((character) => character.team === 'evil')
      .map((character) => character.slug)
  }

  includedCharacters(rules) {
    return Object.keys(rules).filter(rule => rules[rule])
  }

  sortCharacters(rules, seed) {
    const { good, evil } = this.spread[this.players.length.toString()]
    const basicCharacters = new Array(good).fill('soldier').concat(new Array(evil).fill('minion'))

    const roster = this.includedCharacters(rules).reduce((acc, char) => {
      const team = this.character(char).team
      const index = acc.indexOf(team === 'good' ? 'soldier' : 'minion')

      if (index !== -1) acc[index] = char;

      return acc;
    }, basicCharacters)

    return shuffleSeed.shuffle(this.players, seed).map((player, index) => ({ ...player, character: roster[index] }));
  }

  rounds() {
    return this.teamSizePerRound[this.players.length.toString()]
  }

}