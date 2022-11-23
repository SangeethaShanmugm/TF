import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Register = () => {
   
   const register_data = {
    role: 'student',
    subject: "Python",
    branch: "Basavanagudi",
    name: "abc",
    username: "abc",
    mobile: 1234567890,
    email: "abc@gmail.com",
    password: 12345678,
    confirmPassword: 12345678
   } 
 
   const [registerdata, setRegisterData] = useState(register_data )
  const [role, setRole] = useState("student");
  const [subject, setSubject] = useState("Java");
  const [branch, setBranch] = useState("Basavanagudi");
  const [name, setName] = useState("ABC");
  const [username, setUsername] = useState("abc");
  const [mobile, setMobile] = useState("1234567890");
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [confirmPassword, setConfirmPassword] = useState("12345678");

  return (
    <div>
      <h1>REGISTER</h1>
      <form style={{margin: "40px",padding: "10px 10px 20px 10px",  border: "1px solid #BFBFBF",  backgroundColor: "white", boxShadow: "10px 10px 5px #aaaaaa"}}>
        <Box
        display="grid"
            gap="30px"
            gridTemplateColumns="repeat(3, minmax(0, 3fr))"
          component="form"
          sx={{
            "& > div": { gridColumn: "span 1" }, margin: "50px",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Role"
            value={role}
            variant="outlined"
            onChange={(e) => setRole(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Subject"
            value={subject}
            variant="outlined"
            onChange={(e) => setSubject(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Branch"
            value={branch}
            variant="outlined"
            onChange={(e) => setBranch(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Name"
            value={name}
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Username"
            value={username}
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Mobile"
            value={mobile}
            variant="outlined"
            onChange={(e) => setMobile(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            value={email}
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="password"
            value={password}
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            value={confirmPassword}
            variant="outlined"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          
        </Box>
        <Button variant="contained"
          onClick={() => console.log(registerdata)}>Sign Up</Button>
      </form>
    </div>
  );
};

export default Register;
