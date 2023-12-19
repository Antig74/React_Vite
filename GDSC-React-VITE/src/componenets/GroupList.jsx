import React, { useState } from "react";
import "./Grouplist.css"; 

export default function Grouplist() {
    const [name, setName] = useState("");
    const [memberList, setMemberList] = useState(['Anteneh Getnet', 'Afomia Dugassa', 'Agumas Desalew', 'Alem Ayalew Yimer', 'Amanuel Addisu Belay', 'Amanuel firew',
        'Amanuel Mandefrow Reta', 'AMMAR MOHAMMED YASIN ', 'Andinet Dereje', 'Anteneh Addisu', 'Ariyam Yilma Eshete']);

    const handleAdd = (event) => {
        event.preventDefault();
        setMemberList(currentMembers => [...currentMembers, name]);
        setName('');
    }

    return (
        <div>
            <form onSubmit={handleAdd}>
                <div>Do you want to add a member?</div>
                <input id="inputname" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="submit" value="Add" />
            </form>

            <h2>All Group 8 Members</h2>
            <ul>
                {
                    memberList.map((member, index) => <li key={index}>{member}</li>)
                }
            </ul>
        </div>
    );
}
