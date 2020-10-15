import React, { memo, useEffect } from 'react'

function Demo({ name, val, handler }) {

    useEffect(() => {
        console.log('This gets called every time')
        return () => {
            console.log('this gets called evrytime except first time but for clean up...')
        }
    });

    useEffect(() => {
        console.log('This gets called when name changes')
        return () => {
            console.log('this gets called when val changes from 2nd time onward but for clean up...')
        }
    }, [name]);

    useEffect(() => {
        console.log('This gets called when val changes')
        return () => {
            console.log('this gets called when val changes from 2nd time but for clean up...')
        }
    }, [val]);

    //componentDidMount and componentWillUnmount
    useEffect(() => {
        console.log('This gets called only one time..when mounted')
        return () => {
            console.log('this gets called demo is destroyed...')
        }
    }, []);

    //componentWillUnmount
    // useEffect(() => {
    //     return () => {
    //         console.log('this gets called demo is destroyed...')
    //     }
    // }, []);

    console.log('Demo rendered')
    return (
        <div>
            Name:&nbsp;<input type='text' value={name} onChange={(e) => handler(e.target.value)} />
        </div>
    )
}
export default memo(Demo);

//core - react
//useReducer()
//useMemo()
//useRef()

//redux (react-redux)
//useSelector()
//useDispatch()

//routing (react-router-dom)
//useHistory()
//useParams()
//useLocation()