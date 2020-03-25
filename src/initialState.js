export default {
  exercises: [
    {
      id: 0,
      name: 'Squat'
    },
    {
      id: 1,
      name: 'Standing Press'
    },
    {
      id: 2,
      name: 'Deadlift'
    },
    {
      id: 3,
      name: 'Bench Press'
    },
    {
      id: 4,
      name: 'Power Clean'
    }
  ],

  programs: [
    {
      id: 0,
      exercises: [0, 1, 2]
    },
    {
      id: 1,
      exercises: [0, 3, 4]
    }
  ],

  session: null,

  // session: {
  //   program: [
  //     {
  //       exercise: 0,
  //       weight: 100,
  //       nextWeight: undefined
  //     },
  //     {
  //       exercise: 1,
  //       weight: 100,
  //       nextWeight: undefined
  //     },
  //     {
  //       exercise: 2,
  //       weight: 100,
  //       nextWeight: undefined
  //     }
  //   ],
  //   currentExerciseIndex: 0
  // },

  history: []
}
