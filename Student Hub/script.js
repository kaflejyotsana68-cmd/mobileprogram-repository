// =========================
// PAGE NAVIGATION
// =========================
function show(page) {
  document.querySelectorAll(".page").forEach((p) => {
    p.classList.remove("active");
  });
  document.getElementById(page).classList.add("active");
}

function back() {
  show("dashboardPage");
}

function logout() {
  show("loginPage");
}

// =========================
// LOGIN
// =========================
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email && password) {
    show("dashboardPage");
  } else {
    alert("Fill all fields");
  }
}

// =========================
// STORAGE (TASKS ONLY)
// =========================
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// =========================
// SIMPLE LIST SYSTEM
// =========================
function addItem(inputId, listId) {
  let val = document.getElementById(inputId).value;
  if (!val) return;

  let div = document.createElement("div");
  div.className = "item";
  div.innerText = val;

  document.getElementById(listId).appendChild(div);

  document.getElementById(inputId).value = "";
}

function addClass() {
  addItem("classInput", "classList");
}
function addAssignment() {
  addItem("assignmentInput", "assignmentList");
}
function addTime() {
  addItem("timeInput", "timeList");
}

// =========================
// TASK SYSTEM
// =========================
function addTask() {
  let name = document.getElementById("taskInput").value;
  let start = document.getElementById("startTime").value;
  let end = document.getElementById("endTime").value;

  if (!name || !start || !end) {
    alert("Fill all fields");
    return;
  }

  tasks.push({
    name,
    start,
    end,
    done: false,
    warned: false,
  });

  save();
  renderTasks();

  document.getElementById("taskInput").value = "";
}

// =========================
// RENDER TASKS
// =========================
function renderTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((t, i) => {
    let now = getTime();

    let color = "green";

    if (!t.done) {
      if (now > t.end) color = "red";
      else if (now >= t.start && now <= t.end) color = "orange";
    }

    let div = document.createElement("div");
    div.className = "item";
    div.style.borderLeft = "6px solid " + color;

    div.innerHTML = `
      <b>${t.name}</b><br>
      ⏰ ${t.start} - ${t.end}<br>
      <small>Status: ${color}</small><br>
      <button onclick="markDone(${i})">Done</button>
    `;

    list.appendChild(div);
  });
}

// =========================
// MARK DONE
// =========================
function markDone(i) {
  tasks[i].done = true;
  save();
  renderTasks();
}

// =========================
// GET CURRENT TIME
// =========================
function getTime() {
  let now = new Date();
  return (
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0")
  );
}

// =========================
// TIME CALCULATION
// =========================
function minutesLeft(current, end) {
  let [ch, cm] = current.split(":").map(Number);
  let [eh, em] = end.split(":").map(Number);

  return eh * 60 + em - (ch * 60 + cm);
}

// =========================
// SMART ALERT SYSTEM (CORE FIX)
// =========================
setInterval(() => {
  let now = getTime();

  tasks.forEach((task) => {
    if (task.done) return;

    // 🟡 ACTIVE TASK TIME
    if (now >= task.start && now <= task.end) {
      let left = minutesLeft(now, task.end);

      // warn once when near end
      if (left <= 5 && !task.warned) {
        notify("⚠️ Hurry! Only 5 min left: " + task.name);
        task.warned = true;
        save();
      }
    }

    // 🔴 OVERDUE
    else if (now > task.end) {
      notify("⛔ Missed Deadline: " + task.name);
      task.done = true;
      save();
      renderTasks();
    }
  });
}, 30000);

// =========================
// NOTIFICATIONS
// =========================
function notify(msg) {
  alert(msg);

  if (Notification.permission === "granted") {
    new Notification(msg);
  }
}
