const initialState = [
  {
    id: 0,
    name: 'Squat',
    sets: [
      { sets: 2, reps: 5, multiplier: 0 },
      { sets: 1, reps: 5, multiplier: 0.4 },
      { sets: 1, reps: 3, multiplier: 0.6 },
      { sets: 1, reps: 2, multiplier: 0.8 },
      { sets: 3, reps: 5, multiplier: 1 },
    ],
  },
  {
    id: 1,
    name: 'Standing Press',
    sets: [
      { sets: 2, reps: 5, multiplier: 0 },
      { sets: 1, reps: 5, multiplier: 0.55 },
      { sets: 1, reps: 3, multiplier: 0.7 },
      { sets: 1, reps: 2, multiplier: 0.85 },
      { sets: 3, reps: 5, multiplier: 1 },
    ],
  },
  {
    id: 2,
    name: 'Deadlift',
    sets: [
      { sets: 2, reps: 5, multiplier: 0.4 },
      { sets: 1, reps: 3, multiplier: 0.6 },
      { sets: 1, reps: 2, multiplier: 0.85 },
      { sets: 3, reps: 5, multiplier: 1 },
    ],
  },
  {
    id: 3,
    name: 'Bench Press',
    sets: [
      { sets: 2, reps: 5, multiplier: 0 },
      { sets: 1, reps: 5, multiplier: 0.5 },
      { sets: 1, reps: 3, multiplier: 0.7 },
      { sets: 1, reps: 2, multiplier: 0.9 },
      { sets: 3, reps: 5, multiplier: 1 },
    ],
  },
  {
    id: 4,
    name: 'Power Clean',
    sets: [
      { sets: 2, reps: 5, multiplier: 0 },
      { sets: 1, reps: 5, multiplier: 0.55 },
      { sets: 1, reps: 3, multiplier: 0.7 },
      { sets: 1, reps: 2, multiplier: 0.85 },
      { sets: 5, reps: 3, multiplier: 1 },
    ],
  },
]

export default (state = initialState, action) => {
  switch (action) {
    default:
      return state
  }
}
