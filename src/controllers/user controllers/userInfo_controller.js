const colors = require("colors");
const { UserInfo_service } = require("../../services");
const { saveReqRes } = require("../../mongodb/index");
const { createLogController } = require("../admin controllers/log_controller");
const { LogCombineData } = require("../common controllers/log_combine_data");

const userInfoService = new UserInfo_service();

// -----------------------------------
// insert into table
// -----------------------------------
const create = async (req, res) => {
  // console.log(colors.bgGreen("userData in controller------->>>>>>", req.body));

  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const userInfo = await userInfoService.createUserInfo(
      req.body,
      req.params.id
    );
    console.log("wrng in controller", userInfo);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: userInfo,
      success: true,
      message: "Successfully Inserted User Info",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);

    return res.status(201).json({
      data: userInfo,
      success: true,
      message: "Successfully Inserted User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able to insert into User Info",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to insert into User Info",
      err: error,
    });
  }
};

// -----------------------------------
// delete from table
// -----------------------------------
const destroy = async (req, res) => {
  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const response = await userInfoService.deleteUserInfo(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully deleted User Info",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully deleted User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able delete from User Info",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able delete from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// update table
// -----------------------------------
const update = async (req, res) => {
  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const response = await userInfoService.updateUserInfo(
      req.params.id,
      req.body
    );

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    // ------------------------------
    // Creating log
    // ------------------------------
    const Data = {};
    Data.oldState = "1000";
    Data.currentState = "1000";
    Data.req = req;
    console.log("------------------1", Data);
    const data = LogCombineData(Data);
    console.log("-----------------", data);
    createLogController(data);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully updated User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able update User Info",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able update User Info",
      err: error,
    });
  }
};

// -----------------------------------
// get from table
// -----------------------------------
const get = async (req, res) => {
  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const response = await userInfoService.getUserInfo(req.params.id);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);
    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// get all data from table
// -----------------------------------
const getAll = async (req, res) => {
  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const response = await userInfoService.getAllUserInfo(req.query);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

// -----------------------------------
// get all data from table
// -----------------------------------
const getAllByAdmin = async (req, res) => {
  const dataReqRes = {};
  // generate  request
  dataReqRes.request = GenerateRequest(req);
  try {
    const response = await userInfoService.getAllUserInfoByAdmin(req.query);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Successfully fetched User Info",
      err: {},
    });
  } catch (error) {
    console.log(error);

    // generate  response
    dataReqRes.response = GenerateResponse({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
    // store request response in mongodb
    saveReqRes(dataReqRes);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able fetch data from User Info",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
  getAllByAdmin,
};
