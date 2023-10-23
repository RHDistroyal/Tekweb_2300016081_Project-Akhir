import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import './Home.css';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div className="home-container">
            <Popular />
            <Veggie />
        </div>
    )
}

export default Home;