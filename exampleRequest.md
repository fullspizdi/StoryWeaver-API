# Example Request

To generate a scene description using the StoryWeaver API, you can make a POST request to the following endpoint:

**Endpoint:** `/generate/scene`

**Method:** POST

**Parameters:**
* `apiKey`: Your unique API key obtained after registration.
* `genre`: Specify the genre of the scene, e.g., "mystery", "fantasy", "romance".
* `mood`: Define the mood of the scene, such as "eerie", "mysterious", "uplifting".
* `keywords`: Provide specific keywords related to the scene, like "abandoned mansion", "flickering candle", "secret passage".

**Sample Request:**
```json
{
  "apiKey": "your_api_key_here",
  "genre": "mystery",
  "mood": "eerie",
  "keywords": "abandoned mansion, flickering candle, secret passage"
}
```

**Sample Response:**
```json
{
  "description": "The dust motes danced in the solitary beam of light filtering through a cracked windowpane. The scent of damp wood and forgotten time hung heavy in the air. A lone candle flickered on a mahogany table, its flame casting long, dancing shadows on the peeling wallpaper. Suddenly, a creak echoed from behind a bookcase, revealing a hidden passageway shrouded in darkness..."
}
```
