import {play} from './rock-paper-scissors.js'
import {describe, test} from 'node:test'
import * as assert from 'node:assert'

describe('play', () => {
	test('returns undefined if either argument is invalid', () => {
		assert.strictEqual(play('rock', 'invalid'), undefined)
		assert.strictEqual(play('invalid', 'scissors'), undefined)
		assert.strictEqual(play('invalid', 'invalid'), undefined)
	})

	test('returns "draw" if both arguments are the same', () => {
		assert.strictEqual(play('rock', 'rock'), 'draw')
		assert.strictEqual(play('paper', 'paper'), 'draw')
		assert.strictEqual(play('scissors', 'scissors'), 'draw')
	})

	test('returns the correct winner based on the arguments', () => {
		assert.strictEqual(play('rock', 'paper'), 'paper')
		assert.strictEqual(play('rock', 'scissors'), 'rock')
		assert.strictEqual(play('paper', 'rock'), 'paper')
		assert.strictEqual(play('paper', 'scissors'), 'scissors')
		assert.strictEqual(play('scissors', 'rock'), 'rock')
		assert.strictEqual(play('scissors', 'paper'), 'scissors')
	})
})
