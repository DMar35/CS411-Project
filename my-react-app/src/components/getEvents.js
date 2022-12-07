// import React from 'react'

// const getEvents = () => {
//   return (
//     <div>getEvents</div>
//   )
// }

// export default getEvents

$.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=rO5NTqIFXjBktCjoh6i76wFYr6QdLe9u",
    async:true,
    dataType: "json",
    success: function(json) {
                console.log(json);
                // Parse the response.
                // Do other things.
             },
    error: function(xhr, status, err) {
                // This time, we do not end up here!
             }
  });