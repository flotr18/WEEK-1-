let home = new Vue ({
    el : '#container',
    data : {
        title : 'My Website',
        gif : 'https://media2.giphy.com/media/Nx0rz3jtxtEre/giphy.gif?cid=ecf05e47t6e77t8jj4gjcooi308r6g3wp714zz2m0jnwud6b&rid=giphy.gif',


    }

});


let about = new Vue ({
    el : '#AboutContainer',
    data : {
      id : 'ID Details',
        infos : [
            'Name : Florent',
            'Family Name : Trouillet',
            'Date of birth : 18/07/1197',
            'Area of Study : Web Development'
        ],
        hobbies : 'My hobbies',
        cards : [
            'Aeronautical Engineering',
            'Gliding',
            'Digital Transformation',
            'Technology',
            'SF Movies & Series',
            'History',
            'Anglo-Saxon culture',
            'Thriller Novels'
        ]

    }

});

let contact = new Vue ({
    el : '#ContainerContact'
});

Vue.component('contact-info', {
    data : function () {
        return {
            name : 'Mr Florent Trouillet',
            study : 'IIM-Dorset 3Y student',
            id : 'ID : 22852',
            mail : 'florent.trouillet@edu.devinci.fr'

        }

    },
    template : '<p> {{ name }}<br>{{ study }}<br>{{id }}<br>{{ mail }}'
})

