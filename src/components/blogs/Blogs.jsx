import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Chip, Button } from "@mui/material";
import Blog from '../../assets/blog.png';

const blogs = [
  {
    id: 1,
    author: "Prabhash Mishra",
    date: "1 Jan 2023 - Today",
    title: "Small business & Startup",
    description: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    categories: ["Tax & Audit", "Management"],
    image: Blog
  },
  {
    id: 2,
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Mental models are simple expressions of complex processes or relationships.",
    categories: ["Tax", "Research", "Compliance"],
    image: Blog
  },
  {
    id: 3,
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    categories: ["Audit", "Money Back"],
    image: Blog
  },
  {
    id: 4,
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Collaboration can make our teams stronger, and our individual designs better.",
    categories: ["Money", "Management"],
    image: Blog
  },
  {
    id: 5,
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "JavaScript frameworks make development easy with extensive features and functionalities.",
    categories: ["Tax Return", "News", "Audit"],
    image: Blog
  },
  {
    id: 6,
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description: "Starting a community doesn’t need to be complicated, but how do you get started?",
    categories: ["Private Limited Company", "Customer Success"],
    image: Blog
  }
];

const Blogs = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="subtitle2" align="center" color="#EB8D15">
        EXPLORE OUR BLOGS
      </Typography>
      <Typography variant="h4" align="center" style={{fontWeight:'600',marginBottom:'5rem'}} gutterBottom>
        Accelerate Digital Transformation
      </Typography>
      <Grid container spacing={3}>
        {blogs.map((blog) => (
          <Grid item xs={12} sm={6} md={4} key={blog.id}>
            <Card>
              <CardMedia component="img" height="200" image={blog.image} alt={blog.title} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {blog.author} • {blog.date}
                </Typography>
                <Typography variant="h6" sx={{ mt: 1, fontWeight: "bold" }}>
                  {blog.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {blog.description}
                </Typography>
                <div style={{ marginTop: 10 }}>
                  {blog.categories.map((category, index) => (
                    <Chip key={index} label={category} sx={{ mr: 1, mb: 1 }} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div style={{ textAlign: "center", marginTop: 20,marginBottom:20 }}>
        <Button variant="contained" sx={{
              background: "#1C4670",
              height: "50px",
              width: "12rem",
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              "&:hover": {
                background: "#1C4670",
              },
            }}>
          Show more blogs →
        </Button>
      </div>
    </Container>
  );
};

export default Blogs;