"use strict";
class userInfo {

    // Data_URL = "https://raw.githubusercontent.com/naye2m/naye2m.github.io/refs/heads/main/about_me.json";
    Data_URL = "https://naye2m.github.io/about_me.json";
    loaded = false;
    _domLoaded = false;

    get domLoaded() {
        return this._domLoaded;
    }
    set domLoaded(value) {
        this._domLoaded = value;
        this.updateElementsContents();
        if (document.readyState === "complete")
            this.updateUserData();
    }
    async saveUserData() {
        if (!window.USERDATA_NAYE2M) {
            return;
        }
        window.USERDATA_NAYE2M.lastUpdated = new Date().toISOString();
        localStorage.setItem("USERDATA_NAYE2M", JSON.stringify(window.USERDATA_NAYE2M));
        console.log("new user data saved.");
    }
    async updateUserData() {
        window.USERDATA_NAYE2M = await fetch(this.userinfo?.Data_URL || this.Data_URL)
            .then(response => response.json())
            .then(data => data)
            .then(data => {
                try {
                    window.USERDATA_NAYE2M = data;
                    this._update();
                    // this.calllisteningFunctions();
                    this.loaded = true;
                } catch (error) {
                    console.error("could not save user data.", error);
                }
                return data;
            })
            .catch(function (error) {
                console.error("could not fetch user data.", error);
                window.USERDATA_NAYE2M ??= {};
            });

    }
    _update() {
        this.saveUserData();
        this.callWaitingFunctions();
        this.calllisteningFunctions();
        this.updateElementsContents();
    }
    loadUserData() {
        const userData = localStorage.getItem("USERDATA_NAYE2M");
        if (userData) {
            window.USERDATA_NAYE2M = JSON.parse(userData);
            this._update();
            const lastUpdated = new Date(window.USERDATA_NAYE2M.lastUpdated);
            const now = new Date();
            // const diff = Math.abs(Math.floor((now - lastUpdated) / (1000 * 60 * 60 * 24)));
            const diff = Math.abs(Math.floor((now - lastUpdated) / (1000 * 60)));
            if (diff > 2) {
                this._update();

            }
        } else {
            this.updateUserData();
            this.saveUserData();
        }
    }
    waiting_functions = [];
    listening_functions = [];
    addWaitingFunction(func) {
        this.listening_functions.push(func);
        this.waiting_functions.push(func);
    }
    callWaitingFunctions() {
        this.waiting_functions.forEach(func => func());
        this.waiting_functions = [];
    }
    calllisteningFunctions() {
        this.listening_functions.forEach(func => func());
    }
    loaded() {
        this.callWaitingFunctions();
    }
    onload(func) {
        console.log(window.USERDATA_NAYE2M)
        if (this.loaded) {
            func();
        }
        this.addWaitingFunction(func);
    }
    onupdate(func) {
        this.addWaitingFunction(func);
    }
    updateElementsContents() {
        if (!this.domLoaded)
            return window.addEventListener("DOMContentLoaded", e => this.updateElementsContents());
        const elements = Array.from(document.querySelectorAll("[data-elem-for]"));
        const elems = {};
        for (let elem in elements) {
            elems[elements[elem]?.dataset?.elemFor] = elements[elem];
        }
        if(window.USERDATA_NAYE2M == undefined)
            return;

        let loading_screen = document.querySelector(".naye2m-loader");
        loading_screen.style.display = "unset";

        elems.full_name.innerText = window.USERDATA_NAYE2M.personal_info.full_name;
        elems.title.innerText = window.USERDATA_NAYE2M.personal_info.title;


        function get_social_media_html(social_media) {
            return `<li><a href="${social_media.link}" target="_blank" title="My ${social_media.name} account."><i class="icon-${social_media.icon}"></i></a></li>`;
            return `<a href="${social_media.url}" target="_blank"><i class="${social_media.icon}"></i></a>`;
        }
        elems.social_media.innerHTML = window.USERDATA_NAYE2M.social_media
            .map(get_social_media_html).join("");


        elems.full_name_uppercase.innerText = window.USERDATA_NAYE2M.personal_info.full_name_uppercase;
        elems.email.innerText = window.USERDATA_NAYE2M.personal_info.email;
        elems.email.innerHTML += "&nbsp;<i class='icon-mail3'></i>";
        elems.email.href = `mailto:${window.USERDATA_NAYE2M.personal_info.email}`;
        elems.phone.innerText = window.USERDATA_NAYE2M.personal_info.phone_txt;
        elems.phone.href = `tel:${window.USERDATA_NAYE2M.personal_info.phone}`;
        elems.phone.innerHTML += "&nbsp;<i class='icon-phone2'></i>";
        elems.website.href = window.USERDATA_NAYE2M.personal_info.website;
        elems.website.innerText = window.USERDATA_NAYE2M.personal_info.website
            .replace(/^https:\/\//g, "").replace(/\/$/g, "");
        elems.website.innerHTML += "&nbsp;<i class='icon-earth'></i>";
        elems.mailing_address.innerText = window.USERDATA_NAYE2M.personal_info.mailing_address;
        elems.mailing_address.innerHTML += "&nbsp;<i class='icon-map-marker'></i>";
        // elems.about_me.innerHTML = window.USERDATA_NAYE2M.about_me; // TODO

        function get_timeline__html(icon, title, place, start_date, end_date, description,index=0, options={}) {
            if (options?.style) {
                options.style = options.style.replaceAll(/"/g, "\\\"");
            }
            return `<li class="animate-box item-animate timeline-${index % 2? "i" : "u"}nverted" ${!options?.style?"":`style="${options.style}"`} >
                <div class="timeline-badge"><i class="icon-${icon}"></i></div>
                <div class="timeline-panel">
                    <div class="timeline-heading">
                        <h3 class="timeline-title">${title}</h3>
                        <span class="company">${place} - ( ${start_date || " "}${(start_date && end_date) ? " - " : ""}${end_date ?? " "} )</span>
                    <div class="timeline-body">
                        <p>${description}</p>
                    </div>
                </div>
            </li>`;
        }
        function get_work_experience__html(item,index) {
            return get_timeline__html("suitcase", item.title, `${item.company} - ${item.location}`, item.start_date, item.end_date ?? "Present", item.description,index);
        }
        elems.work_experience.innerHTML = window.USERDATA_NAYE2M.work_experience
            .map(get_work_experience__html).join("");

        function get_education__html(item,index) {
            return get_timeline__html("graduation-cap", item.degree, item.institution + `${item.institution_location ? " - " + item.institution_location : ""}${item.result ? ` - (${item.result})` : ""}`, item.start_date, item.end_date, item.result,index);
        }
        elems.education.innerHTML = window.USERDATA_NAYE2M.education
            .map(get_education__html).join("");

        function get_certificate__html(item,index) {
            return get_timeline__html("trophy4", item.name, item.issued_by, item.date, item.valid_until, item.description+`<a href="${item.validation_link}" target="_blank">Cirtificate Verification link</a>`,index);
        }
        elems.certificates.innerHTML = "";
        for (let certifications_type in window.USERDATA_NAYE2M.certifications_types) {
            if(!window.USERDATA_NAYE2M.certifications_types[certifications_type].length)
                continue;
            elems.certificates.innerHTML += `<li class="timeline-heading text-center animate-box fadeInUp animated-fast"><div><h3>${certifications_type.replaceAll("_", " ")}</h3></div></li>`;
            let certis = window.USERDATA_NAYE2M.certifications_types[certifications_type];
            for (let certi_index in certis) {
                elems.certificates.innerHTML += get_certificate__html(certis[certi_index],certi_index);
            }
        }

        function get_service__html(item) {
            return `<div class="col-md-4 text-center">
                <div class="feature-left">
                    <span class="icon">
                        <i class="icon-${item.icon}"></i>
                    </span>
                    <div class="feature-copy">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </div>
            </div>`;
        }
        elems.services.innerHTML = window.USERDATA_NAYE2M.services
            .map(get_service__html).join("");



        function sort_skills(a, b) {
            return (b.percent_acquired - a.percent_acquired)
        }
        function get_skill__html(item) {
            return `<div class="skill text-center"><div class="chart" data-percent="${item.percent_acquired}"><span><strong>${item.name}</strong>${item.percent_acquired}%</span></div></div>`;
        }
        elems.skills.innerHTML = window.USERDATA_NAYE2M.skills.sort(sort_skills)
            .map(get_skill__html).join("");

        function get_subskills__html(item, index) {
            return `<div class="progress-wrap"><h3><span class="name-left">${item.name}</span><span class="value-right">${item.percent_acquired}%</span></h3><div class="progress"> <div class="progress-bar progress-bar-${(index % 5) + 1} progress-bar-striped active" role="progressbar" aria-valuenow="${item.percent_acquired}" aria-valuemin="0 aria-valuemax="100 style="width:${item.percent_acquired}%"></div></div></div>`;
        }
        elems.subskills.innerHTML = window.USERDATA_NAYE2M.subskills.sort(sort_skills)
            .map(get_subskills__html).join("");

        function get_project__html(proj) {
            return `<div class="col-md-3 text-center col-padding animate-box fadeInUp animated-fast">
                    <a href="${proj.link}" terget="_blank" class="work" style="background-image: url(${proj.image || "images/portfolio-1.jpg"});">
                        <div class="desc">
                            <h3>${proj.name}</h3>
                            <span>${proj.description}</span>
                            <p>see project</p>
                        </div>
                    </a>
                </div>`;
            }

        elems.projects.innerHTML = window.USERDATA_NAYE2M.projects
            .map(get_project__html).join("");
        
        elems.contractbox.href = `mailto:${window.USERDATA_NAYE2M.personal_info.email}?body=Please%20provide%20me%20with%20a%20brief%20description.%20Thank%20you%20for%20your%20time.%0A%0A%0A`
        // {"name":"CS50X: Introduction to Computer Science (2023)","date":"2023","issued_by":"Harvard University","validation_link":"https://certificates.cs50.io/896753ec-89b3-4367-b947-4d7c300a7bc0.pdf?size=A4","image_link":"https://certificates.cs50.io/896753ec-89b3-4367-b947-4d7c300a7bc0.png?size=A4","file_link":"","valid_until":null,"description":"Completed with 100% score. A strong foundation in programming fundamentals, algorithms, and web development.","category":"course"}
        function get_certificate_image_html(e) {
            return `<a href="${e.validation_link}" target="_blank" ><div class="verify-box" >Verify</div><img src="${e.image_link}" alt="${e.name}"></a>`;
        }
        elems.certification_images.innerHTML = window.USERDATA_NAYE2M.certificates.filter(e=>e.image_link && e.validation_link)
        .map(get_certificate_image_html).join("");

        loading_screen.style.display = "none";
    }
}
var userinfo = new userInfo();
userinfo.loadUserData();

window.addEventListener("DOMContentLoaded", e => (userinfo.domLoaded = true));
// window.addEventListener("load", e => (userinfo.domLoaded = true));

