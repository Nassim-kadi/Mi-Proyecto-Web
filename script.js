const btn_Quick_add = document.querySelector("#bnt-Quick-Add");
const btn_Quick_add_leave = document.querySelector(".boton-Quick-Add-leave");

btn_Quick_add.addEventListener("click", (e) => {
  document.querySelector(".ventana-Quick-Add").style.display = "flex";
});

btn_Quick_add_leave.addEventListener("click", (e) => {
  document.querySelector(".ventana-Quick-Add").style.display = "none";
});

let boton_task_add = document.querySelector(".boton-task-add");
var input_task = document.querySelector("#input-task");

boton_task_add.addEventListener("click", (e) => {
  const task = document.createElement("div");
  task.classList.add("task");
  task.classList.add("task-active");
  task.innerHTML = `
    <div class="task-izquirda">
        <span class="simbolo-mover">⋮⋮</span>
        <input type="checkbox">
        <span class="text-task task-uncompleted">${input_task.value}</span>
    </div> 
    <div class="task-derecha">
      <span class="icon-task">🗑️</span>
    </div>
    `;
  document.querySelector(".tasks").appendChild(task);
  input_task.value = "";
});

document.querySelectorAll(".task-izquirda > input").forEach((el) => {
  el.addEventListener("click", () => {
    console.log('hola');
    if (el.checked) {
      el.parentElement.querySelector(".text-task").className = "text-task task-completed";
      el.closest(".task").classList.add("task-inactive");
      el.closest(".task").classList.remove("task-active");
    } else {
      el.parentElement.querySelector(".text-task").className = "text-task task-uncompleted";
      el.closest(".task").classList.add("task-active");
      el.closest(".task").classList.remove("task-inactive");
    }
  });
});


document.querySelector(".tasks").addEventListener("click", (e) => {
  if (e.target.classList.contains("icon-task")) {
    e.target.closest(".task").remove();
  }
  if(e.target.type === 'checkbox') {

    const taskText=e.target.parentElement.querySelector('.text-task');
    const taskRow=e.target.closest('.task');

    if(e.target.checked){
      taskText.className = "text-task task-completed";
      
    }else{
      taskText.className = "text-task task-uncompleted";
    }
    
    taskRow.toggle("task-inactive");
    taskRow.classList.toggle("task-active");
  }
})

document.querySelector(".option-Active").addEventListener("click", () => {
    
  document.querySelectorAll(".task").forEach((el) => {
    if (el.classList.contains("task-active")) {
      el.style.display = "flex";
    } else {
      el.style.display = "none";
    }
  });
})

document.querySelector(".option-all").addEventListener("click", () => {
    
  document.querySelectorAll(".task").forEach((el) => {
    
      el.style.display = "flex";
  });
})

document.querySelector(".option-Done").addEventListener("click", () => {
    
  document.querySelectorAll(".task").forEach((el) => {
    if (el.classList.contains("task-active")) {
      el.style.display = "none";
    } else {
      el.style.display = "flex";
    }
  });
})




document.querySelector("#card-tasks").addEventListener("click", () => {


  document.querySelector("#card-tasks").classList.add("opcion-nav-card-active");
  document.querySelector("#card-team").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-activity").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-contact").classList.remove("opcion-nav-card-active");
  
  document.querySelector(".menu-tasks").style.display = "block";
  document.querySelector(".menu-team").style.display = "none";
  document.querySelector(".menu-activity").style.display = "none";
  document.querySelector(".menu-contact").style.display = "none";
  
})

document.querySelector("#card-team").addEventListener("click", () => {

  document.querySelector("#card-tasks").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-team").classList.add("opcion-nav-card-active");
  document.querySelector("#card-activity").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-contact").classList.remove("opcion-nav-card-active");
  
  document.querySelector(".menu-tasks").style.display = "none";
  document.querySelector(".menu-team").style.display = "flex";
  document.querySelector(".menu-activity").style.display = "none";
  document.querySelector(".menu-contact").style.display = "none";
  
})


document.querySelector("#card-activity").addEventListener("click", () => {

  document.querySelector("#card-tasks").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-team").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-activity").classList.add("opcion-nav-card-active");
  document.querySelector("#card-contact").classList.remove("opcion-nav-card-active");

  document.querySelector(".menu-tasks").style.display = "none";
  document.querySelector(".menu-team").style.display = "none";
  document.querySelector(".menu-activity").style.display = "flex";
  document.querySelector(".menu-contact").style.display = "none";
  
})

document.querySelector("#card-contact").addEventListener("click", () => {

  document.querySelector("#card-tasks").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-team").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-activity").classList.remove("opcion-nav-card-active");
  document.querySelector("#card-contact").classList.add("opcion-nav-card-active");
  
  document.querySelector(".menu-tasks").style.display = "none";
  document.querySelector(".menu-team").style.display = "none";
  document.querySelector(".menu-activity").style.display = "none";
  document.querySelector(".menu-contact").style.display = "grid";
  
})






//buscador
  const people=  document.getElementsByClassName('card-person');
  const arrayPeople = Array.from(people);
  const map_arrayPeople=arrayPeople.map((el) => {
    const name = el.querySelector('.person-full-name').textContent;
    return{
      name: name,
      element: el,
    }
  })


  function filter (name) {
    return map_arrayPeople.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()))
  }

  document.querySelector('#input-search').addEventListener('input', (e) => {
    const arrayFilter = filter(e.target.value);
    arrayFilter.forEach((el) => {
      el.element.style.display = 'flex';
    });
    map_arrayPeople.forEach((el) => {
      if (!arrayFilter.includes(el)) {
        el.element.style.display = 'none';
      }
    });
  })
  document.querySelectorAll('.stopwatch-options').forEach((el) => {
    el.addEventListener('click', (el) => {
     if(el.target.textContent=== '5m'){
     document.querySelector('.stopwatch-time').textContent = '05:00'
     }
     if(el.target.textContent=== '15m'){
     document.querySelector('.stopwatch-time').textContent = '15:00'
     }
     if(el.target.textContent=== '25m'){
     document.querySelector('.stopwatch-time').textContent = '25:00'
     }
     if(el.target.textContent=== '60m'){
     document.querySelector('.stopwatch-time').textContent = '60:00'
     }
    })
  })







let timerInterval;
let timeLeft = 0; 
let isRunning = false;

const timeDisplay = document.querySelector('.stopwatch-time');


function updateDisplay(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

document.querySelectorAll('.stopwatch-options').forEach((btn) => {
    btn.addEventListener('click', () => {
        clearInterval(timerInterval); 
        isRunning = false;
        const minutes = parseInt(btn.textContent); 
        timeLeft = minutes * 60;
        updateDisplay(timeLeft);
    });
});


document.querySelectorAll('.stopwatch-controls').forEach((control) => {
    control.addEventListener('click', (e) => {
        const action = e.target.textContent.trim();

        if (action.includes('Start')) {
            if (isRunning || timeLeft <= 0) return;
            
            isRunning = true;
            timerInterval = setInterval(() => {
                timeLeft--;
                updateDisplay(timeLeft);

                if (timeLeft <= 0) {
                    clearInterval(timerInterval);
                    isRunning = false;
                    alert("Time is up!");
                }
            }, 1000);

        } else if (action.includes('Pause')) {
            clearInterval(timerInterval);
            isRunning = false;

        } else if (action.includes('Reset')) {
            clearInterval(timerInterval);
            isRunning = false;
            timeLeft = 0;
            updateDisplay(0);
        }
    });
});addEventListener('', () => {
  
})


  

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            data: [42, 55, 45, 70, 60, 85, 90, 65, 75, 95, 88, 110],
            backgroundColor: (context) => {
                const index = context.dataIndex;
                return index === 11 ? '#6bc1ff' : '#6b6bff';
            },
            borderRadius: 5
        }]
    },
    options: {
        scales: {
            y: { 
                beginAtZero: true, 
                grid: { color: '#333' },
                ticks: {
                    callback: function(value) {
                        return '$' + value + 'k';
                    },
                    color: '#888' 
                }
            },
            x: { grid: { display: false }, ticks: { color: '#888' } }
        },
        plugins: { 
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return 'Revenue: $' + context.raw + 'k';
                    }
                }
            }
        }
    }
});



document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault(); 
  const formulario = e.target;   
  const textFormulario = formulario.querySelector('input').value;
  const PriorityFormulario = formulario.querySelector('#Option-Priority').value;
  const TagFormulario = formulario.querySelector('#Option-Tag').value;
  let colorPriority;
  if(PriorityFormulario=='High'){
    colorPriority='var(--danger)';
  }
  if(PriorityFormulario=='Medium'){
    colorPriority='var(--warning)';
  }
  if(PriorityFormulario=='Low'){
    colorPriority='var(--success)';
  }

  const task = document.createElement('div');
  task.classList.add('Sprint');
  task.innerHTML = `
        <span class="Sprint-Priority" style="background-color: ${colorPriority};"> </span>
        <span class="Sprint-title">${textFormulario}</span>
        <span class="Sprint-Tag">${TagFormulario}</span>
    `;
  document.querySelector('.Sprint-Priorities-Sprints').appendChild(task);
  formulario.reset();


})
document.querySelector('.menu-humbergesa').addEventListener('click', () => {
  const main_Left = document.querySelector('.main-left');
  main_Left.classList.toggle('main-left-cheked')
  const capa_fondo = document.querySelector('#capa-fondo');
  capa_fondo.classList.toggle('capa-fondo-cheked');
 
})


function chenge_theme() {
  const htmll = document.documentElement;
  const theme_html= htmll.getAttribute('data-theme');
  theme_html === 'dark' ? htmll.setAttribute('data-theme', 'light') : htmll.setAttribute('data-theme', 'dark');
  if(theme_html==='dark'){
    document.getElementById('icon-theme').textContent='🌞';
    
  }else{
    document.getElementById('icon-theme').textContent='🌙';
    
  }
  
}

document.getElementById('icon-theme').addEventListener('click', () => {
  chenge_theme();
})

function show_Shortcuts() {
  if(document.querySelector(".ventana-keybord-Cshortcuts-help").style.display == "none"){
    document.querySelector(".ventana-keybord-Cshortcuts-help").style.display = "flex";
    document.querySelector(".capa-fondo-max").classList.add("capa-fondo-cheked-max");
  }else{
    document.querySelector(".ventana-keybord-Cshortcuts-help").style.display = "none";
    document.querySelector(".capa-fondo-max").classList.remove("capa-fondo-cheked-max");
  }
  
}
document.querySelector('#Shortcuts').addEventListener('click', () => {
  
 show_Shortcuts();

})
document.querySelector('.boton-keybord-leave').addEventListener('click', () => {
  document.querySelector(".ventana-keybord-Cshortcuts-help").style.display = "none";
  document.querySelector(".capa-fondo-max").classList.remove("capa-fondo-cheked-max");
})

window.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.key === 'n'){
        let tarea = prompt('¿Que tarea deseas agregar?');
        const task = document.createElement('div');
        task.classList.add('task');
        task.classList.add('task-active');
        task.innerHTML = `
              <div class="task-izquirda">
                <span class="simbolo-mover">⋮⋮</span>
                <input type="checkbox">
                <span class="text-task task-uncompleted">${tarea}</span>
              </div> 
              <div class="task-derecha">
                <span class="icon-task">🗑️</span>
              </div>
      `;
        document.querySelector('.tasks').appendChild(task);
   }
   if(e.ctrlKey && e.key === 'q'){
      document.querySelector(".ventana-Quick-Add").style.display = "flex";
    }
    if(e.ctrlKey && e.key === 'k'){
      document.querySelector("#input-search1").focus();
      
    }
    if(e.ctrlKey && e.key === 'd'){
      chenge_theme();    
    }
    if(e.ctrlKey && (e.key === '7')||(e.key === '/')){
      show_Shortcuts();
    }
    if(e.ctrlKey && (e.key === 'p')){
      document.querySelector(".Card-task").focus();
    }
})
document.querySelector('#nav').addEventListener('click', (e) => {
  if(e.target.closest('.Main-Card')){
    alert('esta opcion aun no esta disponible');
    console.log('hola');
  }
  
})
