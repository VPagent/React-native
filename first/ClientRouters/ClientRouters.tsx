import HomePage from "../pages/HomePage"
import SingleItemPage from "../pages/SingleItemPage"
import { Route, Routes } from "react-router-native"


const ClientRouters:React.FC = () => {


    return(
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/:elemId' element={<SingleItemPage />} />
        </Routes>
    )
}



export default ClientRouters