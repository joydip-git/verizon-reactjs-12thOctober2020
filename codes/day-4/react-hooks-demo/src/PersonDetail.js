import React, { useEffect, useState } from 'react'
import { people } from './peopleModel';

export default function PersonDetail({ pid }) {
    const [personState, setPersonState] = useState(null);
    const findPerson = () => {
        let found = people.find(p => p.id === pid);
        if (found !== null) {
            setPersonState(found);
        }
    }
    useEffect(() => {
        //code to get person 
        findPerson();
    }, [pid])
    useEffect(() => {
        console.log('[PD] is called')
    });

    return <span>{pid}</span>;





    /*
        
        console.log(pid)
        
        let design = null;
        if (personState !== null) {
            design = (<div>
                Name:&nbsp;{personState.name}
                <br />
                Age:&nbsp;{personState.age}
            </div>
            )
        }
        return design;*/

}
