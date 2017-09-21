// Initialize Firebase
var config = {
  apiKey: "AIzaSyAwQb-VKwtm4vEPQGY9nxjxoU0G_XonCWg",
  authDomain: "time-f5df0.firebaseapp.com",
  databaseURL: "https://time-f5df0.firebaseio.com",
  projectId: "time-f5df0",
  storageBucket: "time-f5df0.appspot.com",
  messagingSenderId: "161840084912"
};
firebase.initializeApp(config);

var database = firebase.database();

var dataMngr = {
  jsdata: {
    ename: "",
    role: "",
    startDate: "",
    monthlyRate: ""
  },
  addData: function() {
    var tmp = dataMngr.jsdata;
    tmp.ename = $("#ename").val();
    tmp.role = $("#role").val();
    tmp.startDate = $("#startDate").val();
    tmp.monthlyRate = $("#monthlyRate").val();
    database.ref().push(dataMngr.jsdata)
  }
}

$(document).ready(function() {
  $("#btnSubmit").on("click", function() {
    // check for data validity
    // ****
    // end of data validity
    dataMngr.addData();

    for (var x in dataMngr.jsdata){
      console.log(dataMngr.jsdata[x]);
    }

  });
});


database.ref().on("value", function(snapshot) {
  console.log(snapshot.val());
  $("").val(snapshot.val().trainName);
  $("").val(snapshot.val().destination);
  $("").val(snapshot.val().firstTrainTime);
  $("").val(snapshot.val().frequency);
});
