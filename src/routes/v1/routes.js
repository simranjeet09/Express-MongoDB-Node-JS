var express = require('express');
var appRouter = express.Router();
var courseController = require("../../controllers/course-controller");

    appRouter.route('/getSingleCourse/:courseID')
    .get(courseController.getSingleCourse)
    appRouter.route('/updateSingleCourse')
    .put(courseController.updateSingleCourse)
    appRouter.route('/getAllCourses')
    .get(courseController.getAllCourses)
    appRouter
    .route("/deleteSingleCourse/:courseID")
    .delete(courseController.deleteSingleCourse);
    appRouter
    .route("/insertSingleCourse")
    .post(courseController.insertSingleCourse);

module.exports = appRouter;
