import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function EmailForm() {
  const [provider, setProvider] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [emailContent, setEmailContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (provider === 'Lynne' || provider === 'lynne') {
      const formattedDate = date ? formatDate(date) : '';
      const newText = `
        <div class="border border-black p-4">
          <div style="font-size: 19px; font-family: Cambria;">
            <p>Hello,</p><br>

            <p>
              You have a Zoom appointment with <span style="color: #00457D; font-weight: bold;">NP Lynne Tavera</span> today <span style="color: #00457D; font-weight: bold;">(${formattedDate})</span> at <span style="color: #00457D; font-weight: bold;">${time}. </span>
            </p><br>

            <p>
              Please click the link below at <span style="color: #00457D; font-weight: bold;">${time}</span> (Please DO NOT click until your appointment time)
              and Lynne will connect with you within 45 minutes of your appointment time. Please have your
              medications ready to review with the provider.
            </p><br>

            <p>
              <span style="background-color: #D3D3D3;">It is important that you are in a location where you can apply your full attention to your telehealth
              appointment. If you are in a location where you are easily distracted or where noise prevents communication,
              you will be asked to reschedule your appointment.</span>
            </p><br>

            <div style="font-size: 21px; font-family: Cambria;">
              <p>
              Thank you <br><br>
              Join Zoom Meeting<br><br>
            </p>

            <p>
              <u><span style="color: #00457D;">https://us06web.zoom.us/j/4976423654</span></u><br><br>
              </p>
            </div>

            <p>
              <span style="background-color: #00FFFF; color: #003D99; font-family:blessed-facit-regular; font-size: 22px;">Meeting ID: 497 642 3654</span>
            </p>
          </div>
       </div>
`
      setEmailContent((prevText) => prevText + '<br/>' + newText);
    } else if(provider === "Stollman"){
      const formattedDate = date ? formatDate(date) : '';
      const newText2 = `
        <div class="border border-black p-4">
          <div style="font-size: 19px; font-family: Arial;">
            <p>Hi,</p><br>

            <p>
              You have a Zoom appointment with Dr. Stollman today at <span style= "font-weight: bold;">${time} (${formattedDate}).</span>
            </p><br>

            <p>
              Please click the link below <span style="font-weight: bold;">5 minutes before your appointment time</span> and Dr. Stollman will connect with you <span style="font-weight: bold; color: #0078D4; font-size: 20px;">within 30 minutes</span>
              of your appointment time.
            </p><br>

            <p>
              <span style="background-color: yellow;">It is important that you are in a location where you can apply your full attention to your telehealth
              appointment. If you are in a location where you are easily distracted or where noise prevents communication,
              you will be asked to reschedule your appointment. Thank you</span>
            </p><br>

            <p style="font-size: 19px; font-family: Calibri;">
              <b>1)</b> IF YOU HAVE NOT FILLED OUT REGISTRATION FORMS THIS YEAR, <br> 
              PLEASE FILL OUT THE FORM ON OUR WEBSITE: <br>
              <u><span style="font-size: 14px; font-family: Arial; color: blue">https://www.eastbaygi.com/patient-forms/</span></u>
            </p><br>

            <p style="font-size: 19px; font-family: Calibri;">
              <b>2) </b>PLEASE HAVE YOUR <span style="background-color: yellow"><b>MEDICATIONS, HEIGHT and WEIGHT</b></span> READY FOR YOUR APPOINTMENT
            </p>
          </div><br>

          <div style="font-size: 21px; font-family: Cambria;">
            <p>
              <b>Join Zoom Meeting<br><br></b>
            </p>

            <p>
              <u><span style="font-size: 14px; font-family: Arial; color: blue">https://zoom.us/j/5789974003</span> </u>
            </p>
          </div><br>

          <p>
           <span style="font-size: 18px; font-family: Calibri";> Meeting ID: <span style="font-size: 20px"><b>578 997 4003</b></span></span>
          </p>  
        </div>
`
      setEmailContent((prevText) => prevText + '<br/>' + newText2);
    } else {
      setEmailContent('');
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='px-2'>
        <div className='pt-12 flex justify-evenly px-72'>
          <div>
            <select
              id="provider"
              value={provider}
              onChange={(e) => setProvider(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500">

              <option value="">Select a Provider</option>
              <option value="Lynne">Lynne</option>
              <option value="Stollman">Stollman</option>
              <option value="Danny">Danny</option>
              <option value="Luba">Luba</option>
              <option value="Villagomez">Villagomez</option>
            </select>
          </div>
          <div>
            <label htmlFor="Date">Date: </label>
            <DatePicker
              id="date"
              selected={date}
              onChange={(selectedDate) => setDate(selectedDate)}
              dateFormat="MM/dd/yyyy"
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="Time">Time: </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:border-blue-500"
            >
              <option value="">Select a time</option>
              <option value="8:30 am">8:30 am</option>
              <option value="8:45 am">8:45 am</option>
              <option value="9:00 am">9:00 am</option>
              <option value="9:15 am">9:15 am</option>
              <option value="9:30 am">9:30 am</option>
              <option value="9:45 am">9:45 am</option>
              <option value="10:00 am">10:00 am</option>
              <option value="10:15 am">10:15 am</option>
              <option value="10:30 am">10:30 am</option>
              <option value="10:45 am">10:45 am</option>
              <option value="11:00 am">11:00 am</option>
              <option value="11:15 am">11:15 am</option>
              <option value="11:30 am">11:30 am</option>
              <option value="11:45 am">11:45 am</option>
              <option value="12:00 pm">12:00 pm</option>
              <option value="12:15 pm">12:15 pm</option>
              <option value="12:30 pm">12:30 pm</option>
              <option value="12:45 pm">12:45 pm</option>
              <option value="1:00 pm">1:00 pm</option>
              <option value="1:15 pm">1:15 pm</option>
              <option value="1:30 pm">1:30 pm</option>
              <option value="1:45 pm">1:45 pm</option>
              <option value="2:00 pm">2:00 pm</option>
              <option value="2:15 pm">2:15 pm</option>
              <option value="2:30 pm">2:30 pm</option>
              <option value="2:45 pm">2:45 pm</option>
              <option value="3:00 pm">3:00 pm</option>
              <option value="3:15 pm">3:15 pm</option>
              <option value="3:30 pm">3:30 pm</option>
              <option value="3:45 pm">3:45 pm</option>
            </select>
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
          </div>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: emailContent }}
          style={{ fontFamily: 'Cambria' }}
        ></div>
      </div>
    </form>
  );
}

export default EmailForm;

