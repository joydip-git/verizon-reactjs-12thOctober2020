import React, { useState } from 'react'
import { people } from './peopleModel';
import Person from './Person';
import PersonDetail from './PersonDetail';


export default function PersonList() {

    const [peopleState, setPeopleState] = useState({
        people: people
    });
    const [selectPersonIdState, setSelectPersonIdState] = useState(0);

    const updatePersonHandler = (propertyName, propertyValue, personId) => {
        let copyOfPeople = [...peopleState.people];
        const found = copyOfPeople.find(p => p.id === personId);
        const foundIndex = copyOfPeople.findIndex(p => p.id === personId)
        let copyOfFound = { ...found };
        copyOfFound[propertyName] = propertyValue;
        copyOfPeople[foundIndex] = copyOfFound;

        setPeopleState({
            people: copyOfPeople
        })
    }
    return (
        <div>
            {
                peopleState.people.map(p => {
                    return (
                        <div key={p.id} style={{ margin: '50px', border: '2px solid black', borderRadius: '5px' }} onClick={() => setSelectPersonIdState(p.id)}>
                            <Person
                                person={p}
                                update={updatePersonHandler}
                            />
                            <br />
                        </div>
                    )
                })
            }
            <div>
                {selectPersonIdState > 0 && <PersonDetail pid={selectPersonIdState} />}
            </div>
        </div>
    )
}
