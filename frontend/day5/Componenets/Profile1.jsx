import React, { useEffect, useState } from "react";
// import Header from "./Header";
import "./profile.css";
import { Paper, Box, Avatar, Button } from "@mui/material";



import { Link, Navigate, useNavigate } from "react-router-dom";

const Profile1 = () => {
//   const [data, setData] = useState([]);
  
  return (
    <div
      style={{
        backgroundImage:
          'url("https://t4.ftcdn.net/jpg/02/94/66/11/240_F_294661109_lmICWxfTmzfQdLZjEmXpGNRzR5BV4k2g.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "150vh",
      }}
    >
      {/* <Header type="noBack" home="nohome" about='false'  /> */}
   

      <div className="profilecontent">
        <div className="listt">
          <Box
            className="box1"
            sx={{
              "& > :not(style)": {
                width: 500,
                height: 450,
                backgroundColor: "#00003cba",
              },
            }}
          >
            <Paper elevation={10} className="paperpp">
              <div className="ava">
                <Avatar
               
                 src="https://www.nicepng.com/png/detail/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png"
                  sx={{
                    width: 60,
                    height: 70,
                    marginTop: "40px",
                    backgroundColor: "#ADD8E6",
                    color: "#000055",
                  }}
                />
              </div>
              
             <div className="prof"><center>
              <b/><br/>
               <b> User Details</b>
                <br/><br/>
                User Id:
                <br/><br/>
                Name:
                <br/>
                <br/>
                Email:
                <br></br>
                <br></br>
                Mobile Number:
                <br></br>
                <br/>
                <Link to="/"><Button class="logout-btn" >
                    Back To Home
                  </Button></Link>
             </center>

             </div>
             
            </Paper>
          </Box>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Profile1;