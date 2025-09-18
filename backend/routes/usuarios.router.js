import express from 'express';


const router = express.Router();

router.get('/welcome', (req, res) => {
  res.status(200).json({ message: 'Welcome from the route' });
});


export default router;