import React from 'react'
import Single from './Single'

export default function Grid(props) {

    const renderList = () => {
        return props.item.map((item, index) => (
            <Single item={item} key={index+1}/>
        ))
    }
    return (
        <>
            <div className="row">
                <ul>
                    {renderList()}
                </ul>
            </div>
        </>
    )
}
