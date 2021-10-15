// Приложение должно быть адаптивным и доступно для использования на мобильных устройствах.
// фильтры стиль и менять цвет кнопки
// форма регистрации
// форма входа

const initialState = {
    filters: [
    ],
    data: [
        { "id": 1, 
        "physicalLargeSkills": "Raises the shoulders and head, lying on the bait. Straightens the legs when resting on a hard surface.",
        "physicalSmallSkills": "Short-term capture of an object. Strikes and swings the object. The same movement of the arms in the supine position.",
        "socialBehavior": "Screaming with discomfort. Humming when satisfied or excited. Smiles.",
        "socialSmallSkills": "Tracks an object moving vertically, horizontally or in a circle. Crying when the mother leaves. Some people's preference.",
        "speech": "Reacts to mother's voice. Buzzing, whining, squealing, chuckling.",
        "cognitiveSphere": "Behavior change in response to external stimuli. Smiles in response to his own image in the mirror. Stops sucking at the voice of the parents." },
        { "id": 2, 
        "physicalLargeSkills": "Turns over. Supported to maintain balance. Coordinates movements better. Sits with support. It can sway. She lifts her legs up and puts them in her mouth while lying on her back.",
        "physicalSmallSkills": "Reaches out with his hands to objects, squeezes them in his hand. Puts into the mouth.",
        "socialBehavior": "Laughs when playing and cries when it stops. Shows persistence in reaching for the subject.",
        "socialSmallSkills": "Seeks attention from parents by rattle blows or crying.",
        "speech": "He babbles to himself or to others. Begins to pronounce consonants.",
        "cognitiveSphere": "Can react to unusual surroundings. May drop an object so that parents can pick it up. Distinguishes who is who." },
        { "id": 3, 
        "physicalLargeSkills": "Sits on his own. Begins to crawl. Moves along the room on the buttocks.",
        "physicalSmallSkills": "Sitting, he grabs toys to himself. Interlaces the hands. Grabbing an object with one hand. Throws and picks up objects.",
        "socialBehavior": "Afraid and turns away from strangers. Reacts positively to other children.",
        "socialSmallSkills": "Refuses to comply with the requirements of the parents. Stretches into arms. Hugs and kisses loved ones. Doesn't like to be alone. Plays hide and seek, okay.",
        "speech": "Recognizes different tone of speech. The syllables 'ma ma', 'ba ba' are out of place. Simulation of sounds.",
        "cognitiveSphere": "Distinguishes between himself and his image. He can arrange toys according to size. Rejoices and laughs at jokes and games." },
        { "id": 4, 
        "physicalLargeSkills": "Crawls. He walks with support. Stands alone. Can walk independently.",
        "physicalSmallSkills": "Interest in small subjects. Grip with two fingers. Can hold crayon and draw. Flips pages. Likes to open or close something.",
        "socialBehavior": "Becomes jealous. Can use the blanket for comfort in unusual situations.",
        "socialSmallSkills": "Understands the approval or disapproval of others. Defends himself among close children.",
        "speech": "He waves his hand in response to 'goodbye'. Shakes his head when he says 'no'. Understands the meaning of words by hearing them in different situations.",
        "cognitiveSphere": "Simulates sounds and gestures." },
        { "id": 5, 
        "physicalLargeSkills": "He walks on his own. Leans over to pick up the item. Crawls up the stairs and goes down on all fours or sliding off.",
        "physicalSmallSkills": "Pulls and pushes objects, balls, stroller. Shows with a finger. Holds two or three objects with one hand. Can build and connect items. Uses a cup and spoon.",
        "socialBehavior": "Shows persistence and demands attention. Can throw objects or strike in anger. Instead of the word 'no', uses a yanking of the hands.",
        "socialSmallSkills": "Prefers to play in someone's company. Shares toys. When they scold, cry, when praise, smile. Can respond correctly to parental speech.",
        "speech": "Uses rhymes. Knows the name of body parts. Pronounces six or seven words. Plays word games, sings simple songs. She understands words more than she speaks. Likes to show pictures.",
        "cognitiveSphere": "Understands that some events are a consequence of his actions." },
        { "id": 6, 
        "physicalLargeSkills": "He walks more confidently. Climbs the steps, climbs into a chair and sits at the table. Good coordination of movements. Sees obstacles. Moves and bounces on the floor at the tempo of the music.",
        "physicalSmallSkills": "Unzips clothes, removes, puts on socks and shoes. Throws, picks up and puts down toys at the same time. In games: constructor, plasticine. Draws a circle, turns pages one at a time.",
        "socialBehavior": "Impulsive behavior. Doesn't understand the rules of behavior and dangers. Depicts what's going on inside. Deals with business, commands. Acquires skill through luck and error. Afraid of rejection.",
        "socialSmallSkills": "Can play alone. Remains the owner of the toys. Plays with older children. Imitates others. Trusts adults.",
        "speech": "Concentrating on words and objects that are fundamental in his life. Speaks simple phrases. Likes to listen to simple stories. Uses words to express feelings. by 24 months vocabulary up to 200 words. Mimicking adults.",
        "cognitiveSphere": "Understands what 'now' means. Can understand the cause and effect, but not the possible danger (opens and closes the door, but does not understand that he can pinch his hands). May be afraid of thunder, darkness, large animals. Memory improves. Can make the right associations. Fulfills simple requests, scattered attention." }
    ]
}

function reducer (state = initialState, action) {
    switch(action.type) {
        case 'FIND_DATA':
            const findId = [...state.data.filter((item)=> item.id === action.payload.filter)];
            return {...state,filters: findId};
        default:
          return state;
      }
}

export default reducer;