import {useState,useEffect} from "react";

function Footer({contacts, setContacts, situation, setSituation}) {
    const [activeSize, setActiveSize] = useState(0)
  // all, active, completed ve clear butonlarını ayağa kaldırma
    const activeButton = () => {
        const array = contacts.filter(item => item.isActive)
        setContacts(array)
    }
    const onClickAvailable = (e) => {
        setSituation(e.target.name)
      
    }
    useEffect(() =>{
        setActiveSize(0)
        contacts.map((item)=>{
            if(item.isActive){
                setActiveSize(n=> n+1)
            }
        })
    },[contacts])
    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{activeSize}</strong> &nbsp;items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" name="All" className={situation ==="All" ? "selected":""} onClick={onClickAvailable}>All</a>
                </li>
                <li>
                    <a href="#/" name="Active" className={situation ==="Active" ? "selected":""}  onClick={onClickAvailable}>Active</a>
                </li>
                <li>
                    <a href="#/" name="Completed" className={situation ==="Completed" ? "selected":""}  onClick={onClickAvailable}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={activeButton}>
                Clear completed
            </button>
            <footer className="info">
                <p>Click to edit a todo</p>
                <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
            </footer>
        </footer>
    )
}
export default Footer;