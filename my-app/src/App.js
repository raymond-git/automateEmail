import React, { useState } from 'react';

function EmailForm() {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [emailContent, setEmailContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered email is correct
    if (recipientEmail === 'lynne') {
      // If the email is correct, set a specific body text with formatting

      const newText = `<div style="font-size: 20px; font-family: Cambria;">
      <p>Hello,</p>

      <p>
        You have a Zoom appointment with <span style="color: #00457D; font-weight: bold;">NP Lynne Tavera</span> today <span style="color: #00457D; font-weight: bold;">(${date})</span> at <span style="color: #00457D; font-weight: bold;">${time} am. </span>
      </p>

      <p>
        Please click the link below at <span style="color: #00457D; font-weight: bold;">${date}</span> am (Please DO NOT click until your appointment time) 
        and Lynne will connect with you within 45 minutes of your appointment time. Please have your 
        medications ready to review with the provider.
      </p>

      <p>
      <span style="background-color: #D3D3D3;">It is important that you are in a location where you can apply your full attention to your telehealth 
        appointment. If you are in a location where you are easily distracted or where noise prevents communication, 
        you will be asked to reschedule your appointment.</span>
      </p>

      <p>
        Thank you <br><br>
        Join Zoom Meeting
      </p>

      <p>
      <iframe src="https://us06web.zoom.us/j/4976423654" width="800" height="600" frameborder="0"></iframe>

      </p>

    </div>`
      

      setEmailContent((prevText) => prevText + '<br/>' + newText);

    } else {
      // If the email is incorrect, set a different body text
      setEmailContent('This is the body text for an incorrect email.');
    }

    // Reset the form fields
    setRecipientEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="recipientEmail">Provider: </label>
        <input
          id="recipientEmail"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="Date">Date: </label>
        <input
          id="recipientEmail"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="Email">Time: </label>
        <input
          id="recipientEmail"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <button type="submit">Send Email</button>

      <div
        dangerouslySetInnerHTML={{ __html: emailContent }}
        style={{ fontFamily: 'Cambria' }}
      ></div>
      

    </form>
  );
}

export default EmailForm;

