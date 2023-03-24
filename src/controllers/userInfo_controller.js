const colors = require("colors");
const { UserInfo_service } = require("../services");

const userInfoService = new UserInfo_service();

// -----------------------------------
// insert into table
// -----------------------------------
const create = async (req, res) => {
	// console.log(colors.bgGreen("userData in controller------->>>>>>", req.body));
	try {
		const userInfo = await userInfoService.createUserInfo(req.body);
		console.log("wrng in controller", userInfo);
		return res.status(201).json({
			data: userInfo,
			success: true,
			message: "Successfully Inserted User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
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
	try {
		const response = await userInfoService.deleteUserInfo(req.params.id);
		return res.status(201).json({
			data: response,
			success: true,
			message: "Successfully deleted User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
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
	try {
		const response = await userInfoService.updateUserInfo(
			req.params.id,
			req.body
		);
		return res.status(201).json({
			data: response,
			success: true,
			message: "Successfully updated User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
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
	try {
		const response = await userInfoService.getUserInfo(req.params.id);
		return res.status(201).json({
			data: response,
			success: true,
			message: "Successfully fetched User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
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
	try {
		const response = await userInfoService.getAllUserInfo(req.query);
		return res.status(201).json({
			data: response,
			success: true,
			message: "Successfully fetched User Info",
			err: {},
		});
	} catch (error) {
		console.log(error);
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
};
