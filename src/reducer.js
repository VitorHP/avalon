
export const initialState = {
  currentPlayer: '',
  players: [],
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