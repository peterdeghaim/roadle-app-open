export const GAME_TITLE = 'roadle.breakfastroad.com'

export const WIN_MESSAGES = ['hell yeah', 'good shit', 'amazing brother']
export const GAME_COPIED_MESSAGE = 'copied to clipboard send it to ur friends or tweet it'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'put more letters'
export const WORD_NOT_FOUND_MESSAGE = 'street not valid'
export const HARD_MODE_ALERT_MESSAGE =
  'you can only do hard mode from the start'
export const HARD_MODE_DESCRIPTION =
  'any revealed hints must be used in subsequent guesses'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'for improved color vision'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `the street name was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `guess must contain ${letter}`
export const ENTER_TEXT = 'enter'
export const DELETE_TEXT = 'delete'
export const STATISTICS_TITLE = 'stats'
export const GUESS_DISTRIBUTION_TEXT = 'graph'
export const NEW_WORD_TEXT = 'next street in'
export const SHARE_TEXT = 'share'
export const TOTAL_TRIES_TEXT = 'total tries'
export const SUCCESS_RATE_TEXT = 'success rate'
export const CURRENT_STREAK_TEXT = 'current streak'
export const BEST_STREAK_TEXT = 'best streak'
