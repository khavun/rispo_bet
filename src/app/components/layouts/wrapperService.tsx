// components/WrapperService.tsx

import React from "react";
import { Box, Typography, Button } from "@mui/material";

const WrapperService = () => {
  return (
      <Box sx={{ display: "flex",justifyContent:'space-between', gap: 2, color:'white',boxShadow:3, 
        background: "linear-gradient(283deg, #fed24c, #1c1300, #1c1300)",
        borderRadius: "5px",
        marginTop: "1rem",
        marginBottom: "1.3rem",
        padding: "0.8rem",
        borderBottom: '3px solid #ffdf7e'}}>
        {/* Deposit */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">Deposit</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1">Rata-Rata</Typography>
            <Typography variant="h4">
              01
            </Typography>
            <Typography variant="body1">
               Menit
            </Typography>
          </Box>
        </Box>

        {/* Withdraw */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">Withdraw</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Typography variant="body1">Rata-Rata</Typography>
            <Typography variant="h4">03</Typography>
            <Typography variant="body1">Menit</Typography>
          </Box>
        </Box>

        {/* Member Online */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">Member Online</Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography variant="body1">
              <span className="count-item">79015</span> Member
            </Typography>
          </Box>
        </Box>

        {/* Google Search */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Typography variant="body1" align="center">Cari Kami di Google</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Button >RUPIAHTOTO</Button>
          </Box>
        </Box>
      </Box>
  );
};

export default WrapperService;
