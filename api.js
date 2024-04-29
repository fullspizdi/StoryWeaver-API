// api.js

// This file will contain the main API logic for the StoryWeaver API

// Import necessary modules
const plotGenerator = require('./plotGenerator');
const characterDevelopment = require('./characterDevelopment');
const dialogueCrafting = require('./dialogueCrafting');
const sceneSetting = require('./sceneSetting');
const narrativeStyleEmulation = require('./narrativeStyleEmulation');

// Define the main API functions

// Generate plot points or twists within a given genre
function generatePlotPoints(genre, setting, characters) {
    return plotGenerator.generatePlotPoints(genre, setting, characters);
}

// Develop character details based on archetype or backstory
function developCharacter(characterOutline) {
    return characterDevelopment.developCharacter(characterOutline);
}

// Create dialogue between characters based on personalities and context
function craftDialogue(characters, sceneContext) {
    return dialogueCrafting.craftDialogue(characters, sceneContext);
}

// Generate vivid scene descriptions based on mood or theme
function generateSceneDescription(mood, keywords) {
    return sceneSetting.generateSceneDescription(mood, keywords);
}

// Emulate writing styles of authors or genres for unique projects
function emulateNarrativeStyle(style) {
    return narrativeStyleEmulation.emulateNarrativeStyle(style);
}

// Export the API functions for external use
module.exports = {
    generatePlotPoints,
    developCharacter,
    craftDialogue,
    generateSceneDescription,
    emulateNarrativeStyle
};
