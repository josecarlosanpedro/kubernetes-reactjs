
import React, {useState} from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId } from './event-utils'
import { Modal, Button, DatePicker, TimePicker  } from 'antd';
// import DashboardForm from './components/DashboardForm'
    
const Dashboard = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  const handleDateSelect = (date) => {
      console.log(date)
  }
  const handleEventClick = (data) => {
      console.log("data", data)
  }
  return (
    <section className="Dashboard-section">
         <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            initialEvents={INITIAL_EVENTS}
            selectMirror={true}
            dayMaxEvents={true}
            // weekends={this.state.weekendsVisible}
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            select={handleDateSelect}
            // eventContent={renderEventContent} // custom render function
            eventClick={handleEventClick}
            // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
          <button className="minimizetest" onClick={() => setIsModalVisible(true)}>Create event</button>
    {/* <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />, */}
    <Modal title="Basic Modal" visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
        <DatePicker />
        <TimePicker use12Hours format="h:mm a" />
        <p>Details about the event</p>
      </Modal>
    </section>
  )
}

export default Dashboard




// import React from 'react'
// import { Calendar, Badge  } from 'antd';
// // import DashboardForm from './components/DashboardForm'
// function getListData(value) {
//     let listData;
//     switch (value.date()) {
//       case 8:
//         listData = [
//           { type: 'warning', content: 'This is warning event.' },
//           { type: 'success', content: 'This is usual event.' },
//         ];
//         break;
//       case 10:
//         listData = [
//           { type: 'warning', content: 'This is warning event.' },
//           { type: 'success', content: 'This is usual event.' },
//           { type: 'error', content: 'This is error event.' },
//         ];
//         break;
//       case 15:
//         listData = [
//           { type: 'warning', content: 'This is warning event' },
//           { type: 'success', content: 'This is very long usual event。。....' },
//           { type: 'error', content: 'This is error event 1.' },
//           { type: 'error', content: 'This is error event 2.' },
//           { type: 'error', content: 'This is error event 3.' },
//           { type: 'error', content: 'This is error event 4.' },
//         ];
//         break;
//       default:
//     }
//     return listData || [];
//   }
  
//   function dateCellRender(value) {
//     const listData = getListData(value);
//     return (
//       <ul className="events">
//         {listData.map(item => (
//           <li key={item.content}>
//             <Badge status={item.type} text={item.content} />
//           </li>
//         ))}
//       </ul>
//     );
//   }
  
//   function getMonthData(value) {
//     if (value.month() === 8) {
//       return 1394;
//     }
//   }
  
//   function monthCellRender(value) {
//     const num = getMonthData(value);
//     return num ? (
//       <div className="notes-month">
//         <section>{num}</section>
//         <span>Backlog number</span>
//       </div>
//     ) : null;
//   }
// const Dashboard = () => {
//   return (
//     <section className="Dashboard-section">
//     <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />,
//     </section>
//   )
// }

// export default Dashboard
