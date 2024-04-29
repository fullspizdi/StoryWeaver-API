// characterDevelopment.js

// This file contains the logic for expanding on a basic character outline, suggesting motivations, quirks, and conflicts

// Define the characterDevelopment object
const characterDevelopment = {
    // Function to develop character details based on archetype or backstory
    developCharacter: function(characterOutline) {
        let developedCharacter = {
            name: characterOutline.name,
            archetype: characterOutline.archetype,
            motivations: [],
            quirks: [],
            conflicts: []
        };

        // Logic to suggest motivations based on archetype
        switch (characterOutline.archetype) {
            case 'hero':
                developedCharacter.motivations.push("To protect the innocent and uphold justice.");
                developedCharacter.quirks.push("Has a tendency to rush into danger without thinking.");
                developedCharacter.conflicts.push("Struggles with the burden of responsibility and self-doubt.");
                break;
            case 'villain':
                developedCharacter.motivations.push("To seek revenge for past injustices.");
                developedCharacter.quirks.push("Enjoys manipulating others for personal gain.");
                developedCharacter.conflicts.push("Battles with inner demons and a desire for power.");
                break;
            case 'sidekick':
                developedCharacter.motivations.push("To support the hero and provide comic relief.");
                developedCharacter.quirks.push("Always has a witty remark ready in any situation.");
                developedCharacter.conflicts.push("Feels overshadowed by the hero and seeks recognition.");
                break;
            default:
                developedCharacter.motivations.push("Motivations based on character archetype could not be determined.");
                developedCharacter.quirks.push("Quirks based on character archetype could not be determined.");
                developedCharacter.conflicts.push("Conflicts based on character archetype could not be determined.");
        }

        return developedCharacter;
    }
};

module.exports = characterDevelopment;
