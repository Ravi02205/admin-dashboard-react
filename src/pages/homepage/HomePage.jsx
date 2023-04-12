import React from 'react'
import FeaturedInfo from "../../componenets/featuredInfo/FeaturedInfo";
import Chart from '../../componenets/chart/Chart';
import { userData } from "../../constant";
import WidgetSm from '../../componenets/WidgetSm/WidgetSm';
import WidgetLg from '../../componenets/WidgetLg/WidgetLg';
const HomePage = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidget">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default HomePage
