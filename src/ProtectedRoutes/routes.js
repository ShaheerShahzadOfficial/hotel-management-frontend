import React,{Fragment} from 'react'
import { useSelector } from "react-redux"
import { Navigate, Routes,Route } from 'react-router-dom'
const ProtectedRoutes = ({  isManager,component: Component, ...rest }) => {

    const { isAuthenticated,loading,user } = useSelector(state => state.Auth)

    return (

        // <Fragment>
        //     {
        //         loading === false && (
        //             <Route {...rest}
        //                 render={(props) => {
        //                     if (isAuthenticated === false) {
        //                         return   <Route path="*" render={() => <Navigate replace="/login" />} />

        //                         //   <Redirect to={"/Login"} />
        //                     }

        //                     if(isManager === true && user?.role !== "Manager"){
        //                         return   <Route path="*" render={() => <Navigate replace="/login" />} />
        //                     }

        //                     return <Component {...props} />
        //                 }} />
        //         )
        //     }
        // </Fragment>


<Fragment>
{
    loading === false && (
        <Route {...rest}
            render={(props) => {
                if (isAuthenticated === false) {
                    return <Route path="*" render={() => <Navigate replace="/login" />} />
                }
                if(isManager === true && user?.role !== "Manager"){
                                return   <Route path="*" render={() => <Navigate replace="/login" />} />
                            }

                return <Component {...props} />
            }} />
    )
}
</Fragment>

    )
}

export default ProtectedRoutes