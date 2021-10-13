// Приложение должно быть доступно для использования на мобильных устройствах.
// фильтры стиль и менять цвет кнопки
// форма регистрации
// форма входа
// преза

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
        {}
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