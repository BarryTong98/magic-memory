import './App.css';
import {useState} from "react";


const cardImages = [
    {"src": "/img/helmet-1.png"},
    {"src": "/img/potion-1.png"},
    {"src": "/img/ring-1.png"},
    {"src": "/img/scroll-1.png"},
    {"src": "/img/shield-1.png"},
    {"src": "/img/sword-1.png"},
]

function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);

    //shuffle cards
    const shuffleCards = () => {
        // 1. [...cardImages, ...cardImages]是为了复制两个重复的
        // 2. sort(() => Math.random() - 0.5)这个是为了随机赋值正负来进行排序 () => 是对里面的每一个item进行操作
        // 3. map((cards) => ({...cards, id: Math.random()})) 为了给每一个object {...cards, id: Math.random()}赋予一个id
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))
        setCards(shuffledCards)
        setTurns(0)
        console.log(shuffledCards)
    }


    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className={"card-grid"}>
                {cards.map((card)=>(
                    <div className={"card"} key={card.id}>
                        <div>
                            <img className={"front"} src={card.src} alt={"card front"}/>
                            <img className={"back"} src={"/img/cover.png"} alt={"card back"}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
