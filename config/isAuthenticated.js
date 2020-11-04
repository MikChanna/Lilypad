// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {

  const [isAuthenticated, setisAuthenticated] = useState(false);
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    setisAuthenticated(true)
    console.log("loggedInUser", + isAuthenticated)
  }

  // If the user isn't logged in, redirect them to the login page
  setisAuthenticated(false)
  console.log("loggedInUser", + isAuthenticated)
  return
};
