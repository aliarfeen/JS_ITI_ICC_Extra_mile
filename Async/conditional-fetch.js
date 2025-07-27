// You have a function isUserLoggedIn() that returns a Promise resolving to true or false.
// If the user is logged in, you need to call getDashboardData(), which also returns a Promise with dashboard info.

// Task:
// Only fetch dashboard data if the user is logged in. Otherwise, log a message like "Please log in first".
function isUserLoggedIn(val) {
  return new Promise((resolve, reject) => {
    if (val === true) {
      resolve(getDashboardData());
    } else {
      reject("User isn't logging in");
    }
  });
}

function getDashboardData() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Dashboard data"), 500);
  });
}