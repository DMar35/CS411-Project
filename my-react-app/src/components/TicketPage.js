import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';

const TicketPage = () => {

  const [data,setData]=useState([])

  useEffect(()=>{
    GetTickets()

},[])

  function GetTickets() {
    const url = "http://127.0.0.1:8000/api/tickets";
    axios.get(url).then((res)=>{
      console.log(res)
      setData(res.data)
    }).catch((err)=>{
        console.log(err)
    })
  }


  return (
    <div>
        {data.map((item)=>(
          
          <div>
             <a href={item.ticketDetails.tickets.url}>{item.ticketDetails.tickets.ticketPrice}</a>
         </div>


        ))}
       
      </div>
  )
}

export default TicketPage