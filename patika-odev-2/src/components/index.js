import Header from "./Header/Header"
import List from "./List/List"
import Footer from "./Footer/Footer";
import { useState } from "react";


function Contacts (){
    const [contacts, setContacts] = useState([]);
    const [situation, setSituation]=useState("All")
    
    //header, list ve footerdaki işlemleri set edip tanımlıyoruz
    return (
        <div>
           <Header  setContacts={setContacts} contacts={contacts}/>
           <List contacts={contacts} setContacts={setContacts} situation={situation}/>
           <Footer contacts={contacts} setContacts={setContacts} situation={situation} setSituation={setSituation}/>
        </div>
        
    )
}
export default Contacts;
