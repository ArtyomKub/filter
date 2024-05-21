import React, {useState} from 'react';
import './App.css';

function App() {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState('ALL')

    let currentMoney = money;

    if (filter === 'DOLLARS') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLES') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'RUBLS')
    }


    const onClickFilterHandler = (nameButton: string) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((object, index) => {
                    return (
                        <li key={index}>
                            <span>{object.banknots} -</span>
                            <span>{object.value} -</span>
                            <span>{object.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler('ALL')}>ALL</button>
                <button onClick={() => onClickFilterHandler('DOLLARS')}>DOLLARS</button>
                <button onClick={() => onClickFilterHandler('RUBLES')}>RUBLES</button>
            </div>
        </>

    );
}

export default App;
