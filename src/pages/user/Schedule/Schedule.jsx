import React, {useState, useEffect} from 'react'
import Navbar from '../../../components/Navbar'
import { Container } from '@mui/material'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"
import mainApi from '../../../services/mainApi'
import AppointmentModal from '../../../components/AppointmentModal'
import NewAppointmentModal from '../../../components/NewAppointmentModal'
import "./fullCalendar.scss"

const Schedule = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [events, setEvents] = useState()
  const [newAppointmentModalShow, setNewAppointmentModalShow] = useState(false)
  const [AppointmentModalShow, setAppointmentModalShow] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState()
  const [modalDate, setModalDate] = useState()
  const [calendarStartDate, setCalendarStartDate] = useState()
  const [calendarEndDate, setCalendarEndDate] = useState()

  useEffect(() => {
    getAppointments()
  }, [calendarStartDate])

  useEffect(() => {
    getNextBookings()
  }, [])

  const refreshBookings = () => {
    getAppointments()
    getNextBookings()
  }

  function renderEventContent(eventInfo) {
    return (
      <div className='d-flex align-items-center justify-content-between px-1'>
        <div className='text-truncate'>
          <b className='me-1'>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </div>
      </div>
    )
  }

  const handleDayClick = (info) => {
    setModalDate(info.date)
    setNewAppointmentModalShow(true)
  }

  const handleEventClick = (info) => {
    setSelectedEvent(info.event._def)
    setAppointmentModalShow(true)
  }

  const getAppointments = async () => {
    if (!calendarStartDate || !calendarEndDate) return
    // const response = await mainApi.getAppointments(calendarStartDate, calendarEndDate)
    // const bookingsData = response.content.map((i) => {
    //   return { id: i.id, title: i.contact ? i.contact.short_name : "", start: new Date(i.started_at), end: new Date(i.ended_at), color: "transparent", backgroundColor: i.resource.color, display: "block", service: i.service, status: i.status, note: i.note, contact: i.contact, resource: i.resource, start_date: dateFormatter.dateAndHour(i.started_at), durationTime: dateFormatter.millisecondsToHoursAndMinutes(Math.abs(new Date(i.ended_at) - new Date(i.started_at))) }
    // })
    // setEvents(bookingsData)
    // setIsLoading(false)
  }

  const getNextBookings = async () => {
    // const response = await mainApi.getAppointments(new Date().toISOString())
    // setNextBookings(response.content)
    // setIsLoading(false)
  }

  return (
    <>
      <Navbar />
      <Container>
        <FullCalendar
          datesSet={(info) => { setCalendarStartDate(info.startStr); setCalendarEndDate(info.endStr) }}
          dateClick={(info) => handleDayClick(info)}
          eventClick={(info) => handleEventClick(info)}
          editable
          selectable
          viewClassNames={"px-3 pb-5 w-100"}
          headerToolbar={{
            start: "dayGridDay,dayGridWeek,dayGridMonth",
            center: "title",
            end: "prev,next",
          }}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          events={events}
          eventContent={renderEventContent}
          locale={"pt-BR"}
          height={"100vh"}
          eventTimeFormat={{
            hour: "numeric",
            minute: "numeric",
            omitZeroMinute: false
          }}
          buttonText={{
            today: "hoje",
            day: "dia",
            week: "semana",
            month: "mês"
          }}
        />
      </Container>
      <AppointmentModal
        show={AppointmentModalShow}
        setShow={setAppointmentModalShow}
      />
      <NewAppointmentModal
        show={newAppointmentModalShow}
        setShow={setNewAppointmentModalShow}
        date={modalDate}
      />
    </>

  )
}

export default Schedule