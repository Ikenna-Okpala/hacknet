// import { NextApiRequest, NextApiResponse } from 'next';
// import db from '../../../../../server/src/db/db.config';
// import { hackathons } from '../../../../../server/src/db/schema';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method === 'POST') {
//         const { theme, startTime, endTime, max_participants, experience_level, first_place, second_place, third_place } = req.body;
//         const newHackathon = await db.insert(hackathons).values({
//             theme,
//             startTime,
//             endTime,
//             max_participants,
//             experience_level,
//             first_place,
//             second_place,
//             third_place,
//         }).returning('*');
//         res.status(201).json(newHackathon);
//     }
// }