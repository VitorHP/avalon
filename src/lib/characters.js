export default class Characters {
  constructor() {
    this.teamSizePerRound = {
      '5':  [2, 3, 2, 3, 3],
      '6':  [2, 3, 4, 3, 4],
      '7':  [2, 3, 3, 4, 4],
      '8':  [3, 4, 4, 5, 5],
      '9':  [3, 4, 4, 5, 5],
      '10': [3, 4, 4, 5, 5]
    }
    this.data = [
      {
        slug: 'merlin',
        name: 'Merlin',
        team: 'good',
        power: (sortedPlayers) => `${this.evilPlayers(sortedPlayers, false)} são os jogadores do mal`
      },
      {
        slug: 'soldier',
        name: 'Soldier',
        team: 'good',
        power: (_) => ''
      },
      {
        slug: 'percival',
        name: 'Percival',
        team: 'good',
        power: (sortedPlayers) => `${this.playersOf(['merlin', 'morgana'], sortedPlayers).join(' ou ')} podem ser o Merlin`
      },
      {
        slug: 'minion',
        name: 'Minion',
        team: 'evil',
        power: (sortedPlayers) => `${this.evilPlayers(sortedPlayers)} são os jogadores do mal`
      },
      {
        slug: 'oberon',
        name: 'Oberon',
        team: 'evil',
        power: (_) => `Você não sabe quem são os outros jogadores do mal`
      },
      {
        slug: 'morgana',
        name: 'Morgana',
        team: 'evil',
        power: (sortedPlayers) => `Você aparece como Merlin para o jogador do Percival.\n\n${this.evilPlayers(sortedPlayers)} são os jogadores do mal`
      },
      {
        slug: 'assassin',
        name: 'Assassino',
        team: 'evil',
        power: (sortedPlayers) => `No final da partida, se você adivinhar quem é o Merlin, o time do mal vence.\n\n${this.evilPlayers(sortedPlayers)} são os jogadores do mal`
      },
      {
        slug: 'mordred',
        name: 'Mordred',
        team: 'evil',
        power: (sortedPlayers) => `Merlin não sabe quem você é.\n\n${this.evilPlayers(sortedPlayers)} são os jogadores do mal`
      },
    ]
  }

  find(slug) {
    return this.data.find((c) => c.slug === slug)
  }

  all() {
    return this.data;
  }

  playersOf(characterSlugs, players) {
    return players
      .filter(player => characterSlugs.includes(player.character))
      .map(player => player.name)
  }

  evilPlayers(sortedPlayers, includeMordred = true) {
    return sortedPlayers
      .filter(player => this.evilCharacters().includes(player.character) && (includeMordred ? true : player.character !== 'mordred'))
      .map(player => player.name)
      .join(', ')
  }

  evilCharacters() {
    return this.data
      .filter((character) => character.team === 'evil')
      .map((character) => character.slug)
  }

  rounds(players) {
    return this.teamSizePerRound[players.length.toString()]
  }

}