import React from "react";

const childContext = React.createContext({
    firstName: "",
    month: "",
    day: "",
    year: "",
    allergies: "",
    bedtime: "",
    favoriteFood: "",
    favoriteActivity: "",
    image: "",
    id: "",
});

export default childContext;
