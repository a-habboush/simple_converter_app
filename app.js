const all_content = document.querySelectorAll(".content");
const all_tabs = document.querySelectorAll(".tabs button")


// default
all_content[0].classList.add('active');


all_tabs.forEach((tab, index) => {

    // on click
    tab.addEventListener('click', ()=>{

        // only one tab active at a time
        all_tabs.forEach(tab=>{
            tab.classList.remove('active');
        })

        tab.classList.add('active');

        // only one tab content is active
        all_content.forEach(content=>{
            content.classList.remove('active');
        });
    
        all_content[index].classList.add('active');
    });
});


