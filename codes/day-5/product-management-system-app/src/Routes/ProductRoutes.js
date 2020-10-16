import React from 'react'
import { Route } from 'react-router-dom'
import { productRoutes } from './productRoutesData';

export default function ProductRoutes() {
    return (
        <>
            {
                productRoutes.map((r) => {
                    return <Route path={r.route} key={r.routeId} component={r.title} exact />
                })
            }
        </>
    )
}

// export default function ProductRoutes() {
//     return (
//         <>
//             {
//                 productRoutes.map((r) => {
//                     return (<Route
//                         path={r.route}
//                         key={r.routeId}
//                         render={() => { return <DynamicComponent component={r.title} /> }}
//                         exact />)
//                 })
//             }
//         </>
//     )
// }
