const express = require("express");
const db = require("./db");

const app = express();
const cors = require("cors");
const path = require("path");
const e = require("express");
const { json } = require("express");

app.use(cors());
app.use(express.json());
//app.use(express.static('../frontend/website648'))

app.get("/")



app.get("/getAssignedPlans/:id", async (req,res) =>{
  console.log(req.params);
  const { patientId } = req.params;

  try{
    const results = await db.query(
      'SELECT * FROM public."Exercise_Plan" WHERE "Patient_ID" = $1',[id]
    )
    res.json(results.rows[0]);
    }
  
  catch(err){
    console.log(err.message)
  }
});

app.get("/getAssignedPlans", async (req,res) =>{

  try{
    const results = await db.query(
      'SELECT "Patient_ID",description,title,assignstartdate,assignenddate,checked,activitytimestamp FROM public."Exercise_Plan";'
    )
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        assignedPlans: results.rows,
      },
    });

  }
  catch(err){
    console.log(err.message)
  }

});
 
app.post("/exercisePlanAssignment", async (req,res) =>{
  try{
    const { title } = req.body;
    const { description } = req.body;
    const { checked } = req.body;
    const { assignstartdate } = req.body;
    const { assignenddate } = req.body;
    const { Patient_ID } = req.body;
    const { activitytimestamp } = req.body;

    const results = await db.query(
      'INSERT INTO public."Exercise_Plan" (description, title, "Patient_ID",assignstartdate, assignenddate, checked,activitytimestamp) VALUES($1,$2,$3,$4,$5,$6,$7)',[description,title,Patient_ID,assignstartdate,assignenddate,checked,activitytimestamp]
    );
    res.status(201).json({
      status:"success",
      results: results.rows.length,
      data:{
        assignedExercise: results.rows
      }
    })
  }
  catch(err){
    console.log(err.message)
  }
})

//post video
app.post("/postVideo", async (req,res) =>{
  try{
      const { id } = req.body;
      const { uploadVideo } = req.body;
      //const { Patient_ID} = req.body

      const newVideo = await db.query(

     'INSERT INTO public."Video" ("uploaderID","urlLocation") VALUES($1,$2)', [id,uploadVideo]
      );
      res.status(201).json({
        status:"success",
        results: newVideo.rows.length,
        data:{
          uploadedVideo: newVideo.rows[0]
        }
      })
  }
  
  catch(err){
    console.log(err.message)
  }
});

//get videos
app.get("/getVideos", async (req,res) =>{
  try{
    const results = await db.query(
      'SELECT "videoID", "videoTitle", "videoDescription", "uploaderID", "uploadDate", "urlLocation" FROM public."Video";'
    )
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        getVideos: results.rows,
      },
    });
    
  }
  catch(err){
    console.log(err.message)
  }
});

//get current patients
app.get("/getCurrentPatients", async (req, res) => {
  try {
    const results = await db.query(
      'SELECT "first_Name","last_Name",email, bio, "Registration_Date",vg."User_ID" FROM public."Registered_User" vg INNER JOIN public."Patient" ON vg."User_ID" = public."Patient"."User_ID";'
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        currentPatients: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/getExercisePlan", async (req, res) => {
  try {
    const results = await db.query(
      'SELECT "Plan_ID", "Plan_Name", "Description", date_created, reps FROM public."Exercise_Plan" WHERE "Patient_ID" = 1'
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        exercisePlan: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

//SELECT * FROM public."ProgessReport" WHERE "patientID" = 4
app.get("/getProgressReports", async (req, res) => {
  try {
    const results = await db.query(
      'SELECT "Start_Time_Date", "End_Time_Date", "Patient_ID", "Tag", "Plan_ID", "Frequency", "Activities", "Report_ID", total_time FROM public."Report" WHERE "Patient_ID" = 1'
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        exercisePlan: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/getActivityReport", async (req, res) => {
  try {
    const results = await db.query(
      'SELECT "at_ID", start_questions, end_questions, start_view_video, end_view_video, start_reading_profile, end_reading_profile, "pt_ID", "patient_ID" FROM public."ActivityReport" WHERE "pt_ID" = 1 AND "patient_ID" = 1;'
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        exercisePlan: results.rows,
      },
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/", function (req, res) {
  res.sendFile(
    "/Users/agunderson/Desktop/csc648/project/frontend/website648/Home.html"
  );
});

app.get("/backendlead", function (req, res) {
  res.sendFile();
});

app.listen(8080, () => {
  console.log("server has started on port");
});
