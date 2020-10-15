import React from 'react'

export default function Person({ person, update }) {
    return (
        <div>
            Name:&nbsp;
            <input
                type='text'
                value={person.name}
                onChange={(e) => update('name', e.target.value, person.id)} />
            <br />
            Age:&nbsp;
            <input
                type='text'
                value={person.age}
                onChange={(e) => update('age', parseInt(e.target.value), person.id)}
            />
        </div>
    )
}
