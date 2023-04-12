import React from 'react'
import "./WidgetLg.css";

const Button = ({ type }) => {
  return (
    <button className={"widgetlgButton " + type}>{type}</button>
  )
}
const WidgetLg = () => {
  return (
    <div className="widgetlg">
      <h3 className="widgetlgTitle">Latest Transactions</h3>
      <table className="widgetlgTable">
        <tr className="widgetlgTr">
          <th className="widgetlgTh">Customer</th>
          <th className="widgetlgTh">Date</th>
          <th className="widgetlgTh">Amount</th>
          <th className="widgetlgTh">Status</th>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetlgImage" />
            <span className="widgetlgName">Susan Carol</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021 </td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus"><Button type="Approved" /></td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetlgImage" />
            <span className="widgetlgName">Susan Carol</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021 </td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus"><Button type="Declined" /></td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetlgImage" />
            <span className="widgetlgName">Susan Carol</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021 </td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus"><Button type="Pending" /></td>
        </tr>
        <tr className="widgetlgTr">
          <td className="widgetlgUser">
            <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="widgetlgImage" />
            <span className="widgetlgName">Susan Carol</span>
          </td>
          <td className="widgetlgDate">2 Jun 2021 </td>
          <td className="widgetlgAmount">$122.00</td>
          <td className="widgetlgStatus"><Button type="Approved" /></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
