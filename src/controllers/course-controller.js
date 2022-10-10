const courseModel = require("../models/courseModel");
const response = require("../utils/response");
const exampleData = require("../utils/example.json");

(async () => {
  for (d of exampleData) {
    const { CourseID, CourseName, CourseDescription } = d;
    try {
      const course = await courseModel.create({
        CourseID,
        CourseName,
        CourseDescription,
      });
      console.log(`Inserted : ${CourseID}`);
    } catch (error) {
      console.log(`Already Exist: ${CourseID}`);
    }
  }
})();

exports.getSingleCourse = async (req, res) => {
  try {
    const { courseID } = req.params;
    const course = await courseModel.findOne({ CourseID: courseID });
    return response({ res, data: course });
  } catch (error) {
    response({ res, error });
  }
};

// Update
exports.updateSingleCourse = async (req, res) => {
  try {
    const { CourseID, CourseName, CourseDescription } = req.body;
    const course = await courseModel.findOneAndUpdate(
      { CourseID },
      { CourseName, CourseDescription },
      { new: true }
    );
    return response({ res, data: course });
  } catch (error) {
    response({ res, error });
  }
};

// Get All
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find();
    return response({ res, data: courses.length ? courses : null });
  } catch (error) {
    response({ res, error });
  }
};

exports.deleteSingleCourse = async (req, res) => {
  try {
    const { courseID } = req.params;
    const course = await courseModel.deleteOne({ courseID });
    return response({ res, data: course });
  } catch (error) {
    response({ res, error });
  }
};

exports.insertSingleCourse = async (req, res) => {
  try {
    const { CourseID, CourseName, CourseDescription } = req.body;

    const course = await courseModel.create({
      CourseID,
      CourseName,
      CourseDescription,
    });

    return response({ res, data: course });
  } catch (error) {
    response({ res, error });
  }
};
