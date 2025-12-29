import React , {useState , useRef} from "react";
import "./App.css";
import Swal from "sweetalert2";


export default function App() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const courseRef = useRef();

  const [ data , setData ]= useState(null);

  function submmit(e){
    e.preventDefault();
    setData({
      name : nameRef.current.value,
      email : emailRef.current.value,
      password : passwordRef.current.value,
      course: courseRef.current?.value,
    })
     Swal.fire({
    title: "Success!",
    text: "Form submitted successfully",
    icon: "success",
    confirmButtonColor: "#2563eb",
    confirmButtonText: "OK"
  });
  }
  return (
  <div className="page">
    <div className="welcome">
      <h1 className="welcome">Welcome to the Registration Form</h1>
      <br />
      <p className="one">Please fill in your details to continue</p> <br />
      <p className="two">Made by <strong className="name">Iqra Aslam 💕</strong></p> <br />
      <p className="three">Under the supervision of miss <strong className="name">Hafsa Nadim💕</strong></p> <br />
    </div>

    <div className="container">
      <form className="form" onSubmit={submmit}>
        <h1 className="heading">Registration Form </h1>

        <label>
          Name:
          <input type="text" ref={nameRef} required />
        </label>

        <label>
          Email:
          <input type="email" ref={emailRef} required />
        </label>

        <label>
          Password:
          <input type="password" ref={passwordRef} required />
        </label>

        <label>Select Course:</label>
        <select className="course" ref={courseRef}>
          <option value="">Select</option>
          <option value="Web Development">Web Development</option>
          <option value="Mob Development">Mob Development</option>
          <option value="Graphics Designer">Graphics Designer</option>
          <option value="WordPress">WordPress</option>
        </select>

        <button type="submit" >Submit</button>

        {data && (
          <div className="result">
            <h2>Submitted Data</h2>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Email:</strong> {data.email}</p>
            <p><strong>Password:</strong> {data.password}</p>
            <p><strong>Course:</strong> {data.course}</p>
          </div>
        )}
      </form>
    </div>
  </div>
);


}