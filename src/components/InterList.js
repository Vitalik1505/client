import React, { useContext } from 'react';
import {observer} from 'mobx-react-lite'
import {Context} from '../index'
import {Row} from 'react-bootstrap'
import InterItem from './InterItem'

const InterList = observer(() => {
    const {inter} = useContext(Context)
    return (
        <Row className="d-flex">
            {inter.inters.map((inter) => 
                    <InterItem key={inter.id} inter={inter}/>
             )}
        </Row>
    )

})

export default InterList