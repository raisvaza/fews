import Head from 'next/head';
// import styles from '../styles/Home.module.css';
import styles from '../styles/Dashboard.module.css';
import SideNav from '../components/SideNav';
import Diagram from '../components/Diagram';

export default function Dashboard() {
    const data = [
        { timestamp: '2023-10-01', waterLevel: 5.2 },
        { timestamp: '2023-10-02', waterLevel: 5.5 },
        { timestamp: '2023-10-03', waterLevel: 4.8 },
        // Add more data here
      ];

    return (
        <div className={styles.dashboard}>
            <SideNav />
            <Diagram data={data} title={"River Water Levels"}/>
            <Diagram data={data} title={"Rainfall"}/>
        </div>
        
        
    )
}