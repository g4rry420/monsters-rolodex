import React from 'react'
import "./card-list.styles.css"
import { Card } from '../card/card.component'

export const CardList = (props) => {
   
    return(
        <div className="card-list">
            {props.monsters.length ? (
                props.monsters.map(monster => (
                    <Card key={monster.id} monster={monster} />
                ))
            ) : (
                <div>You don't have monsters related to your search.</div>
            )}
        </div>
    )
}