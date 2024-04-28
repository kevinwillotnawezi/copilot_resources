package com.barosanu;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

public class ExerciseTest {

    private Exercise exercise;

    @BeforeEach
    public void setUp() {
        exercise = new Exercise();
    }

    @Test
    public void testPlayRockVsPaper() {
        String result = exercise.play("rock", "paper");
        assertEquals("paper", result);
    }

    @Test
    public void testPlayRockVsScissors() {
        String result = exercise.play("rock", "scissors");
        assertEquals("rock", result);
    }

    @Test
    public void testPlayPaperVsRock() {
        String result = exercise.play("paper", "rock");
        assertEquals("paper", result);
    }

    @Test
    public void testPlayPaperVsScissors() {
        String result = exercise.play("paper", "scissors");
        assertEquals("scissors", result);
    }

    @Test
    public void testPlayScissorsVsRock() {
        String result = exercise.play("scissors", "rock");
        assertEquals("rock", result);
    }

    @Test
    public void testPlayScissorsVsPaper() {
        String result = exercise.play("scissors", "paper");
        assertEquals("scissors", result);
    }

    @Test
    public void testPlayRockVsRock() {
        String result = exercise.play("rock", "rock");
        assertEquals("draw", result);
    }

    @Test
    public void testPlayPaperVsPaper() {
        String result = exercise.play("paper", "paper");
        assertEquals("draw", result);
    }

    @Test
    public void testPlayScissorsVsScissors() {
        String result = exercise.play("scissors", "scissors");
        assertEquals("draw", result);
    }

    @Test
    public void testPlayInvalidArgs() {
        String result = exercise.play("invalid", "args");
        assertNull(result);
    }
}