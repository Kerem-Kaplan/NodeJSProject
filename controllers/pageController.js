import photo from "../models/photoModel.js";

const getIndexPage = (req, res) => {
  res.render("index", {
    link: "index",
  });
};

const getAboutPage = (req, res) => {
  res.render("about", {
    link: "about",
  });
};

const getRegisterPage = (req, res) => {
  res.render("register", {
    link: "register",
  });
};

const getLoginPage = (req, res) => {
  res.render("login", {
    link: "login",
  });
};

const getLogout = (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
  });
  res.redirect("/");
};

const getModalPage = (req, res) => {
  res.render("modal" , {
    link:"modal",
    photo
  });
};

const getModalPageForUpdate = (req, res) => {
  res.render("modalForUpdate" , {
    link:"modalForUpdate",
    photo
  });
};

export {
  getIndexPage,
  getAboutPage,
  getRegisterPage,
  getLoginPage,
  getLogout,
  getModalPage,
  getModalPageForUpdate
};
