import React,{useState} from 'react'
import { Helmet } from 'react-helmet'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function Booking() {
  const[formvalue,setFormvalue]=useState({
    id:"",
    name:"",
    email:"",
    mobile:"",
    datetime:"",
    people:"",
    message:""
  });

  const onchange = (e) =>{
    setFormvalue({...formvalue,id:new Date().getMilliseconds().toString(),[e.target.name]:e.target.value});
    console.log(formvalue);
  }
  function validate(){
    var result = true;
    if(formvalue.name == "" || formvalue.name == null){
      result = false;
      toast.error("Name Fill Required");
    }
    if(formvalue.email == "" || formvalue.email == null){
      result = false;
      toast.error("Email Fill Required");
    }
    if(formvalue.mobile == "" || formvalue.mobile == null){
      result = false;
      toast.error("Mobile Fill Required");
    }
    if(formvalue.datetime == "" || formvalue.datetime == null){
      result = false;
      toast.error("Date and Time Fill Required");
    }
    if(formvalue.people == "" || formvalue.people == null){
      result = false;
      toast.error("People Fill Required");
    }
    if(formvalue.message == "" || formvalue.message == null){
      result = false;
      toast.error("Message Fill Required");
    }
    return result;
  }

  const onsubmit = async(e) => {
    e.preventDefault();
    if(validate()){
      const response = await axios.post(`http://localhost:3000/booking`,formvalue);
      console.log(response);
      if(response.status >= 200 && response.status < 300){
        toast.success("Booking Data Saved Successfully!!!!");
        setFormvalue({...formvalue,name:"",email:"",subject:"",message:""});
      }
    }
  }
  return (
    <main id="main">
      <br />
    {/* ======= Book A Table Section ======= */}
    <section id="book-a-table" className="book-a-table">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Book A Table</h2>
          <p>Book <span>Your Stay</span> With Us</p>
        </div>
        <div className="row g-0">
          <div className="col-lg-12 d-flex align-items-center reservation-form-bg">
            <form className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-4">
                <div className="col-lg-6 col-md-6">
                  <input type="text" name="name" value={formvalue.name} onChange={onchange} className="form-control" id="name" placeholder="Enter Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <input type="email" className="form-control" name="email" value={formvalue.email} onChange={onchange} id="email" placeholder="Enter Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div className="validate" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="text" className="form-control" name="mobile" value={formvalue.mobile} onChange={onchange} id="phone" placeholder="Enter Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="datetime-local" name="datetime" value={formvalue.datetime} onChange={onchange} className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div className="validate" />
                </div>
                <div className="col-lg-4 col-md-6">
                  <input type="number" className="form-control" name="people" value={formvalue.people} onChange={onchange} id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                  <div className="validate" />
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" value={formvalue.message} onChange={onchange} rows={5} placeholder="Message" defaultValue={""} />
                <div className="validate" />
              </div>
              {/* <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
              </div> */}
              <div className="text-center mt-5"><button onClick={onsubmit} type="submit">Book a Table</button></div>
            </form>
          </div>{/* End Reservation Form */}
        </div>
      </div>
    </section>{/* End Book A Table Section */}

    {/* ======= Gallery Section =======
    <section id="gallery" className="gallery section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>gallery</h2>
          <p>Check <span>Our Gallery</span></p>
        </div>
        <div className="gallery-slider swiper">
          <div className="swiper-wrapper align-items-center">
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-1.jpg"><img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-2.jpg"><img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-3.jpg"><img src="assets/img/gallery/gallery-3.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-4.jpg"><img src="assets/img/gallery/gallery-4.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-5.jpg"><img src="assets/img/gallery/gallery-5.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-6.jpg"><img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-7.jpg"><img src="assets/img/gallery/gallery-7.jpg" className="img-fluid" alt /></a></div>
            <div className="swiper-slide"><a className="glightbox" data-gallery="images-gallery" href="assets/img/gallery/gallery-8.jpg"><img src="assets/img/gallery/gallery-8.jpg" className="img-fluid" alt /></a></div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
    </section>End Gallery Section */}
  </main>
  )
}

export default Booking