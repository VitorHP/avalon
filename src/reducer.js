
export const initialState = {
  seed: Math.floor(Math.random() * 10000),
  currentPlayer: '',
  game: 1,
  round: 1,
  players: [
    { name: 'Player 1' },
    { name: 'Player 2' },
    { name: 'Player 3' },
    { name: 'Player 4' },
    { name: 'Player 5' },
  ],
  rounds: [
    null,
    null,
    null,
    null,
    null,
  ],
  rules: {
    merlin: false,
    assassin: false,
    percival: false,
    morgana: false,
    oberon: false,
    mordred: false,
  }
}

export function appReducer(state, action) {
  if (action.type === 'RESET') return initialState;

  return {
    ...state,
    currentPlayer: '',
    players: playersReducer(state.players, action),
    rules: rulesReducer(state.rules, action)
  }
}

function playersReducer(players, action) {
  switch(action.type) {
    case 'ADD_PLAYER':
      return [
        ...players,
        { name: action.payload }
      ];
    case 'REMOVE_PLAYER':
      return [
        ...players.slice(0, action.payload),
        ...players.slice(action.payload + 1),
      ];
    case 'SET_PLAYERS':
      return action.payload;
    default:
      return players;
  }
}

function rulesReducer(rules, action) {
  switch(action.type) {
    case 'SET_RULES':
      return {
        ...rules,
        [action.payload.rule]: action.payload.value
      };
    default:
      return rules;
  }
}