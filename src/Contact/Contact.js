import React,{useState} from 'react'
import FaceIcon from '@mui/icons-material/Face';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import "./contact.css";
const Contact = () => {
    const [Name, setName] = useState("")
    const [Email, setEmail] = useState("")
    const [ContactNumber, setContactNumber] = useState("")
    const [Message, setMessage] = useState("")
    const sendMessage = async (e) => {
        e.preventDefault()


    }

  return (
<div id="ContactUs">
                <h1>Contact Form</h1>
                <form onSubmit={sendMessage} className='ContactForm'>
                    <br />
                    <div>
                        <CallIcon />
                        <input type={"number"} placeholder='Contact Number' value={ContactNumber} onChange={e => setContactNumber(e.target.value)} required />
                    </div>
                    <br />
                    <div>
                        <MessageIcon />
                        <textarea rows={7} maxLength={240} placeholder='Enter Your Message' value={Message} onChange={e => setMessage(e.target.value)} required />
                    </div>
                    <br />
                    <div>
                        <SendIcon />
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>  )
}

export default Contact