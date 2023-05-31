function markAttendance() {
    const attendanceInput = document.getElementById("attendance").value;
    const attendanceArr = attendanceInput.split(",").map((str) => str.trim());
  
    // Check if the number of entries matches the number of students
    if (attendanceArr.length !== 3) {
      alert("Invalid attendance! Please enter attendance for all students.");
      return;
    }
  
    // Check if the values are valid (either "Present" or "Absent")
    if (
      !attendanceArr.every(
        (value) => value === "Present" || value === "Absent" || value === "Late"
      )
    ) {
      alert("Invalid attendance! Please enter either Present or Absent or Late.");
      return;
    }
  
    // Update attendance in the table
    document.getElementById("john-attendance").textContent = attendanceArr[0];
    document.getElementById("jane-attendance").textContent = attendanceArr[1];
    document.getElementById("tom-attendance").textContent = attendanceArr[2];
  
    // Clear the attendance input field
    document.getElementById("attendance").value = "";
  }