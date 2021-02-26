import React, { useEffect, useState } from 'react';

import './RecentCals.css';


const RecentCals = (props) => {
    const [reversed, setReversed] = useState([[]]);
    console.log("State is here " + reversed)
    console.log("Hello")
    console.log(props.messages)

    useEffect(() => {
        if (reversed.length >= 10) {
            const items = reversed;
            items.pop();
            setReversed(items);
        }
        if (props.messages && props.messages.length > 0) {
            let test = props.messages[props.messages.length - 1];
            console.log("Here ");
            const items = reversed;
            items.unshift([test.user, test.text]);
            setReversed(items);
        }
    }, [props.messages])
    return (

        < div className="recent" >
            <div>
                <h3>Calculate the result and share it with your team!</h3>
                <h4>Recent 10 calculations of the team!</h4>

            </div>
            {

                reversed
                    ? (
                        <div>
                            {/* <h1>Recent 10!:</h1> */}
                            <div className="activeContainer">
                                <h4>
                                    {/* {reversed.map(({ user, text }) => (
                                        <div key={user, text} className="activeItem">
                                            {user}: {text}

                                        </div>
                                    ))} */
                                        // <div className="activeItem">
                                        //     {items}

                                        // </div>
                                        reversed.map((value, index) => {
                                            return <li key={index}> {value[0]} : {value[1]} </li>
                                        })
                                    }
                                </h4>
                            </div>
                        </div>
                    )
                    : null
            }
        </div >
    )
}

export default RecentCals;