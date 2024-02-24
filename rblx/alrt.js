const ALERT_CSS = `
.alert {
  padding: 20px;
  color: white;
  margin-bottom: 15px;
}

.alert-info {
  padding: 20px;
  color: white;
  margin-bottom: 15px;
  background-color: #2196F3;
}

.alert-fail {
  padding: 20px;
  color: white;
  margin-bottom: 15px;
  background-color: #f44336;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
`;

const HTML_TEMPLATE = `
<div class="alert alert-{type}">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  {msg}
</div>
`;

const createAlert = (type, msg, el) => {
  if (!type || !msg || !el) return;

  const container = document.querySelector(el);

  if (!container) return;

  const div = document.createElement('div');
  div.innerHTML = HTML_TEMPLATE.replace('{type}', type).replace('{msg}', msg);
  container.appendChild(div);
};

// Add styles to head
const styleElement = document.createElement('style');
styleElement.innerHTML = ALERT_CSS;
document.head.appendChild(styleElement);
