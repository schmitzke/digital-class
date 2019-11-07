import React from 'react';

const catImageRect = 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1193,w_2121,x_0,y_64/f_auto,q_auto,w_1100/v1565279671/shape/mentalfloss/578211-gettyimages-542930526.jpg'
const catImageSquare = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRV-Ail3eC-RgnDJE-LuADvzjk064UJGMj-MjqWIVoDYtWsiOOh';

const style = {
    padding: '20px',
    background: '#ccc',
}

const rowStyle = {
    display: 'flex',
}

const leftColumnStyle = {
    flex: '30%',
    backgroundColor: '#f1f1f1',
    padding: '20px',
}

const rightColumnStyle = {
    flex: '70%',
    backgroundColor: 'white',
    padding: '20px',
}

const catStyle = {
    height: '200px',
    width: '100%',
    padding: '20px',
    objectFit: 'cover',
}

export const Content = () => {
    return(
        <div style={style} className="Content">
            <div style={rowStyle} className="Row">

                <div style={leftColumnStyle} className="leftColumn">
                    <h1>Hi there</h1>
                    <img style={catStyle} className="CatContainer" src={catImageSquare} />
                    <p>This is a text about cats</p>
                </div>

                <div style={rightColumnStyle} className="rightColumn">
                    <h1>Welcome to my cat empire</h1>
                    <img style={catStyle} className="CatContainer" src={catImageRect} />
                    <p>
                        A heartbeat later, the spear struck the deer’s breast with such force that the creature was knocked to the ground. Unable to rise, she thrashed her neck and flailed her long, slender legs. Po ran past Larth and Lara. When he reached the deer, he pulled the spear free and stabbed the creature again. The deer released a stifled noise, like a gasp, and stopped moving.
                        There was a cheer from the group. Instead of yet another dinner of fish from the river, tonight there would be venison.
                        The distance from the riverbank to the island was not great, but at this time of year—early summer—the river was too high to wade across. Lara’s people had long ago made simple rafts of branches lashed together with leather thongs, which they left on the riverbanks, repairing and replacing them as needed. When they last passed this way, there had been three rafts, all in good condition, left on the east bank. Two of the rafts were still
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Content;
