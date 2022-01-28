// setInterval(() => {
//   const date = new Date(Date.now());
//   console.log("hello");
//   date.setDate(date.getDate() - 30);
//   // const maxWaitingTime = 30;
//   // const dateDelete = dateToday.setDate(dateToday.getDate() - maxWaitingTime);
//   // console.log(dateDelete);
//   return db.estimate.deleteMany({
//     where: {
//       status: "WAITING_FOR_VALIDATION",
//       waitingDate: {
//         lte: date,
//       },
//     },
//   });
// }, 60);
