<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">Actividad MongoDB-VueJs-Boostrap-NodeJs</a>
        </nav>
    </div>

    <div class="container">
        <div class="row pt-5">
            <div class="col-md-4">
                <div class="card">
                    <form @submit.prevent="sendTask">
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="task.name" placeholder="Insert Name" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="task.phone" placeholder="Insert Phone" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="task.address" placeholder="Insert Address" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="task.email" placeholder="Insert Email" class="form-control">
                            </div>
                        </div>
                        <div class="card-body">
                            <div>
                                <input type="text" v-model="task.dateOfBirth" placeholder="Insert Birthday" class="form-control">
                            </div>
                        </div>
                        <template v-if="update == false">
                            <button class="btn btn-primary">Send</button>
                        </template>
                        <template v-else>
                            <button class="btn btn-primary">Update</button>
                        </template>
                        <!-- <div class="form-group">
                            <textarea cols="30" rows="10" class="form-control" placeholder="Insert a description"></textarea>
                        </div> -->
                    </form>
                </div>
            </div>
            <div class="col-md-8">
                <table class="table table-bordered">
                    <thead>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Birthday</th>
                    </thead>
                    <tbody>
                        <tr v-for="task in tasks">
                            <td>{{task.name}}</td>
                            <td>{{task.phone}}</td>
                            <td>{{task.email}}</td>
                            <td>{{task.address}}</td>
                            <td>{{task.dateOfBirth}}</td>
                            <td>
                                <button @click="deleteTask(task._id)" class="btn btn-danger">
                                    Delete
                                </button>
                                <button @click="updateTask(task._id)" class="btn btn-secondary">
                                    Update
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
class Task { // Por si una tarea tiene muchos campos, nos ahorramos escribir una por una
    constructor(name, phone, address, email, dateOfBirth) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.email = email;
        this.dateOfBirth = dateOfBirth;
    }
}

export default ({
    data() {
        return {
            task: new Task(),
            tasks: [],
            update: false,
            task_to_update: ''
        }
    },
    created() { // This method executes as soon as the application is loaded
        this.getTasks();
    },
    methods: {
        // Use fetch to make petitions to server
        updateTask(id){
            fetch('/api/customer/' + id)
            .then(res => res.json())
            .then(data => {
                this.task = new Task(data.name, data.phone, data.addres, data.email, data.dateOfBirth); // Asks for all Tasks and fills table with them
                this.update = true;
                this.task_to_update = data._id;
            });
        },
        deleteTask(id){
            fetch('/api/customer/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                this.getTasks(); // Asks for all Tasks and fills table with them
            });
        },
        getTasks() {
            fetch('/api/customer')
                        .then(res => res.json())
                        .then(data => {
                            this.tasks = data
                            console.log(this.tasks)
                        });
        },
        sendTask() {
            if(this.update) {
                fetch('/api/customer/' + this.task_to_update, {
                    method: 'PUT',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    this.getTasks();
                })
                this.update = false;
            } else {
                fetch('/api/customer',{ // Save data to server
                    method: 'POST',
                    body: JSON.stringify(this.task),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json()) // Convert server response from string to json format
                .then(data => {
                    this.getTasks(); // Asks for all Tasks and fills table with them
                })
            }
            this.task = new Task();
        }
    }
})
</script>
