
export const initialState = {
  seed: Math.floor(Math.random() * 10000),
  currentPlayer: '',
  game: 1,
  round: 1,
  players: [
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
    game: gameReducer(state.game, action),
    seed: seedReducer(state.seed, action),
    currentPlayer: currentPlayerReducer(state.currentPlayer, action),
    players: playersReducer(state.players, action),
    rules: rulesReducer(state.rules, action)
  }
}

function gameReducer(game, action) {
  switch(action.type) {
    case 'SET_GAME':
      return action.payload.game;
    default:
      return game;
  }
}

function seedReducer(seed, action) {
  switch(action.type) {
    case 'NEW_GAME':
      return Math.floor(Math.random() * 10000);
    case 'SET_GAME':
      return action.payload.seed;
    default:
      return seed;
  }
}

function currentPlayerReducer(currentPlayer, action) {
  switch(action.type) {
    case 'SET_CURRENT_PLAYER':
      return action.payload;
    default:
      return currentPlayer;
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
    case 'SET_GAME':
      return action.payload.players.map(name => ({ name }))
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