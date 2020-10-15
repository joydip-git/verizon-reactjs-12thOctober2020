import React from 'react'
import withError from './withError';

// export default function Hero(props) {
//     const { heroName } = props;
//     try {
//         if (heroName === 'Joker') {
//             throw new Error('Not a hero');
//         } else {
//             return (
//                 <span>
//                     Hero Name: &nbsp; {heroName}
//                 </span>
//             )
//         }
//     } catch (e) {
//         return <span>Error: Joker is not a hero</span>
//     }
// }

// export default function Hero(props) {
//     console.log('[Hero] rendered')
//     const { heroName } = props;
//     if (heroName === 'Joker') {
//         throw new Error('Not a hero');
//     }    
//     return (
//         <span>
//             Hero Name: &nbsp; {heroName}
//         </span>
//     );
// }

function Hero(props) {
    console.log('[Hero] rendered')
    const { heroName } = props;
    if (heroName === 'Joker') {
        throw new Error('Not a hero');
    }
    return (
        <span>
            Hero Name: &nbsp; {heroName}
        </span>
    );
}

export default withError(Hero);