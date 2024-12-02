import React from 'react';
import { Box, Typography, Link } from '@mui/material';

// Mock news data
const newsData = [
  { id: 2646, title: 'JADWAL PASARAN', date: '06-07-2022 18:11:07' },
  { id: 2647, title: 'DISKON & HADIAH', date: '03-06-2021 21:39:01' },
  { id: 2645, title: 'BONUS RUPIAHTOTO', date: '03-06-2021 21:38:56' },
];

const LatestNews: React.FC = () => {
  return (
    <Box sx={{ p: 3, borderRadius: 2, boxShadow: 1, marginTop: '10px',background: "linear-gradient(283deg, #fed24c, #1c1300, #1c1300)" }}>
      {/* Header */}
      <Typography
        variant="h6"
        component="h4"
        sx={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 'bold',
          mb: 2,
          color: 'white',
        }}
      >
        <i className="fa fa-newspaper-o" style={{ marginRight: '8px', color: '#1976d2' }}></i>
        Berita Terakhir
      </Typography>

      {/* News List */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 , backgroundColor:'rgb(0 0 0)'}}>
        {newsData.map((news) => (
          <Box key={news.id} sx={{ borderBottom: '1px solid #ddd', pb: 1 }}>
            <Link
              href={`/news/${news.id}`}
              sx={{
                fontSize: '1rem',
                fontWeight: 500,
                color: '#1976d2',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {news.title}
            </Link>
            <Typography
              variant="caption"
              sx={{ display: 'block', mt: 0.5, color: '#757575' }}
            >
              {news.date}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default LatestNews;
