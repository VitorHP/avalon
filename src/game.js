
export default class Game {
  constructor(playerData) {
    this.players = playerData
    this.data = [
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
    return this.data.find((char) => char.slug === character)
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
    return this.data
      .filter((character) => character.team === 'evil')
      .map((character) => character.slug)
  }

}