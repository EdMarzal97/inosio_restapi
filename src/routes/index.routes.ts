import {Router} from 'express';

const router = Router();

router.route('/')
.get((req , res) => res.json('Welcome user'))

export default router;