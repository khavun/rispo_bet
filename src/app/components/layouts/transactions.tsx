import React, { useState, useEffect } from "react";
import { Box, Table, TableHead, TableRow, TableCell, TableBody, Avatar, CssBaseline } from "@mui/material";
import './css/transaction.css';

interface Transaction {
  name: string;
  type: string;
  amount: number;
  avatarUrl: string;
}

interface TableComponentProps {
  title: string;
  transactions: Transaction[];
  startIndex: number;
}

const TableComponent: React.FC<TableComponentProps> = ({ title, transactions, startIndex }) => (
  <Table
    sx={{
      border: "none",
      borderRadius: "10px",
      background: "linear-gradient(283deg, #fed24c, #1c1300, #1c1300)",
      margin: '2px',
      padding: '2px',
    }}
  >
    <TableHead
      className="table-head"
      sx={{
        background: "linear-gradient(283deg, #fed24c, #1c1300, #fed24c)",
        padding: '2px',
      }}
    >
      <TableRow>
        <TableCell sx={{ color: "white", border: "none", padding: '5px'}}>{title}</TableCell>
      </TableRow>
    </TableHead>
    <TableBody
      className="table-body"
      sx={{
        background: "linear-gradient(283deg, #fed24c, #1c1300, #fed24c)",
      }}
    >
      {transactions.slice(startIndex, startIndex + 4).map((transaction, index) => (
        <TableRow
          key={index}
          className="table-row-animation"
          style={{
            "--index": index,
            animationDelay: `${index * 0.1}s`,
          } as React.CSSProperties}
          sx={{ border: "none", margin: 4, padding: 4 }}
        >
          <TableCell sx={{ color: "white", border: "none", margin: 0, padding: '4px' }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1c1300",
                margin: '2px',
                padding: '1px',
              }}
            >
              <Box sx={{ alignItems: "center", display: "flex", margin: '2px', padding: 0 }}>
                <Avatar
                  src={transaction.avatarUrl}
                  alt={transaction.name}
                  sx={{ width: "2rem", height: "2rem", margin: 0 }}
                />
                <Box sx={{ marginLeft: "8px", display: "flex", margin: 0, padding: 0 }}>
                  <div>{transaction.name}</div>
                  <div>{transaction.type}</div>
                </Box>
              </Box>
              <Box>{transaction.amount}</Box>
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default function Transactions() {
  const transactions: Transaction[] = [
    { name: "John Doe", type: "Donation", amount: 5000, avatarUrl: "https://via.placeholder.com/150" },
    { name: "Jane Smith", type: "Support", amount: 75, avatarUrl: "https://via.placeholder.com/150" },
    { name: "Sam Wilson", type: "Donation", amount: 10, avatarUrl: "https://via.placeholder.com/150" },
    { name: "Paul Johnson", type: "Support", amount: 150, avatarUrl: "https://via.placeholder.com/150" },
    { name: "Alice Brown", type: "Donation", amount: 300, avatarUrl: "https://via.placeholder.com/150" },
    { name: "Robert Green", type: "Support", amount: 200, avatarUrl: "https://via.placeholder.com/150" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % (transactions.length - 3)); // Adjust for 4 images at once
    }, 2000); // Set interval to 2 seconds

    return () => clearInterval(interval); 
  }, [transactions.length]);

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          padding: 0,
          margin: 0,
          display: "flex",
          gap: "16px",
          overflow: "hidden",
        }}
      >
        <TableComponent title="(Rp.) Para Pejuang - Table 1" transactions={transactions} startIndex={activeSlide} />
      </Box>
    </>
  );
}
