const rock = 'rock'
const paper = 'paper'
const scissors = 'scissors'
const draw = 'draw'

/**
 * Plays a game of rock-paper-scissors.
 * @param {string} arg1 - The choice of player 1 (rock, paper, or scissors).
 * @param {string} arg2 - The choice of player 2 (rock, paper, or scissors).
 * @returns {string|undefined} - The result of the game (rock, paper, scissors, or undefined if invalid arguments).
 */
export function play(arg1, arg2) {
	const validArgs = [rock, paper, scissors]

	if (!validArgs.includes(arg1) || !validArgs.includes(arg2)) {
		return undefined
	}

	if (arg1 == arg2) {
		return draw
	}

	if (arg1 == rock) {
		if (arg2 == paper) {
			return paper
		}
		if (arg2 == scissors) {
			return rock
		}
	}

	if (arg1 == paper) {
		if (arg2 == rock) {
			return paper
		}
		if (arg2 == scissors) {
			return scissors
		}
	}

	if (arg1 == scissors) {
		if (arg2 == rock) {
			return rock
		}
		if (arg2 == paper) {
			return scissors
		}
	}
}
