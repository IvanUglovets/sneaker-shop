import React, {FC} from 'react';
import '../index.scss'
import CardList from "../components/CardList";



const Main: FC = () => {
    return (
        <div className='wrapper__main-page'>
            <CardList/>
        </div>
    );
}

export default Main;