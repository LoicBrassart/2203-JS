## Plan

## Installer Redux

`npm i redux react-redux`

## Initialiser Redux

### src/main.jsx

- `import { Provider } from 'react-redux'`
- `import { store } from "@services/reducers";`
- Encadrer l'App avec le provider (~similaire au contexte) : `<Provider store={store}><App /></Provider>`

### src/services/reducers/index.js

```
import { combineReducers, createStore } from 'redux';
import { unicorn } from "./unicorn"; // Ici on utilise un reducer nommé "unicorn" mais il dépend du besoin

const mainReducer = combineReducers({ unicorn });
export const store = createStore(mainReducer);
```

### src/services/reducers/unicorn.js

```
const initialState = {
    availables: [],
    favorite: null
}

export default function  (state = initialState, action) {
    switch (action.type) {
        case "UNICORN_RESET":
            return initialState;
        case "UNICORN_SETAVAILABLES":
            return { ...state, availables: action.payload.unicorns };
        case "UNICORN_SETFAV":
            const newFav = action.payload.name;
            if(state.availables.includes(newFav))
                return { ...state, favorite: newFav };
            else
                return state;
        default:
            return state;
    }
}
```

## Utiliser Redux

### Un composant veut lire dans le store

```
import { useSelector } from 'react-redux'

export default function Reader() {
  const { availables, favorite } = useSelector(state => state.unicorn);

  return (
    <ul>{availables.map( (oneUnicorn)=>{
        return <li key={oneUnicorn}>{oneUnicorn}</li>
    } )}
    </ul>)
}
```

### Un composant veut écrire dans le store

```
import { useDispatch } from 'react-redux'

const mockUnicorns = ["Cherry Treats", "Lucky Star", "Love Melody", "Daisy Sweet", "Sunshine Blue"]

export default function Writer() {
    const [tmpFavUnicorn, setTmpFavUnicorn] = useState("");
  const dispatch =useDispatch();

  const hLoad = ()=>{
    dispatch({
        type: "UNICORN_SETAVAILABLES",
        payload: mockUnicorns
    })
  }
  const hReset = ()=>{
    dispatch({
        type: "UNICORN_RESET",
    })
  }
  const hFluke = ()=>{
    dispatch({
        type: "UNICORN_HACK",
        payload: [mockUnicorns, "Blue Berry", "Rasp Berry", "Huckle Berry"]
    })
  }
  const hChange = (evt)=>{
    setTmpFavUnicorn(evt.target.value)
  }
  const hSubmit = ()=>{
    dispatch({
        type: "UNICORN_SETFAV",
        payload: tmpFavUnicorn
    })
  }

  return (
    <>
        <button onClick={hLoad}>Load some unicorns</button>
        <button onClick={hReset}>Reset everything</button>
        <button onClick={hFluke}>Try to sneak in some corrupted data ☠️</button>
        <form onSubmit={hSubmit}>
          <input type="text" value={tmpFavUnicorn} onChange={hChange}>
          <input type="submit" value="THIS IS MY FAV!!!"/>
        </form>
    </>
  )
}

```
