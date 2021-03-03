
import React from 'react'
import { Calendar } from 'antd';

// import DashboardForm from './components/DashboardForm'

const Schedule = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
      }
  return (
    <section className="Scheduler-section">
        <Calendar  />
    </section>
  )
}

export default Schedule
