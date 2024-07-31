<template>
  <div class="resume" style="padding-top: 20px;">
      <v-container class="p-fix"> 
            <v-row class="title"> Jack Ammon </v-row>
            <v-row class ="sub-title"> Full Stack Software Engineer </v-row>
            <v-row class="text"> Strategic and forward-thinking software engineer, with a Computer Science foundation and experience bringing software products to launch. I blend technical expertise with an eye for business and design, excelling in providing clarity and direction. I lead by example, building excellent products, and am a skilled communicator who knows how to translate technical ideas into language that is understandable and approachable.</v-row>

            <v-row style="padding-top: 32px;">
                <!-- left slide -->
                <v-col :cols="mdAndUp ? 5 : 12">
                    <v-row class="header">Contact</v-row>
                    <v-row> <a class="text" style="padding-top: 2px" href="mailto:hello@jck.codes"> &#x68;&#x65;&#x6c;&#x6c;&#x6f;&#x40;&#x6a;&#x63;&#x6b;&#x2e;&#x63;&#x6f;&#x64;&#x65;&#x73;</a> </v-row>
                    <v-row> <a class="text" href="https://github.com/jackammon"> github.com/jackammon </a></v-row>
                    <v-row> <a class="text" href="http://www.linkedin.com/in/jackammon"> linkedin.com/in/jackammon </a></v-row>

                    <v-row class="header" style="padding-top: 32px;"> Skills </v-row>
                    <v-row class="sub-header" style="padding-top: 2px"> Hard </v-row>
                        
                    <v-row class="text indent"> - Frontend: TypeScript, Vue.JS, Angular </v-row>     
                    <v-row class="text indent"> - Backend: .NET, Node.js, Laravel </v-row>
                    <v-row class="text indent"> - Git, Docker, Unix </v-row>
                    <v-row class="text indent" style="padding-bottom: 2px;"> - OO programming </v-row>
                    
                    <v-row class="sub-header" style="padding-top: 8px;"> Soft </v-row>
                    <v-row class="text indent"> - Writing and Speaking </v-row>
                    <v-row class="text indent"> - Team-Building </v-row>
                    <v-row class="text indent"> - Coordinating and delegating tasks </v-row>
                    <v-row class="text indent"> - Decision making </v-row>

                    <v-row class="header" style="padding-top: 32px;"> Education </v-row>
                    <v-row class="sub-header" style="padding-top: 2px"> B.S. Computer Science </v-row>
                    <v-row class="text2"> @ George Fox University, 2021 </v-row>

                    <v-row class="p-title" style="padding-top: 18px;"> Relevant Courses </v-row>
                    <v-row class="i-text indent"> - Data Structures </v-row>
                    <v-row class="i-text indent"> - Object Oriented Design & Analysis </v-row>
                    <v-row class="i-text indent"> - Design & Analysis of Algorithms </v-row>
                    <v-row class="i-text indent"> - Web Based Programming </v-row>
                    <v-row class="i-text indent"> - Client-Server Systems </v-row>
                    <v-row class="i-text indent"> - Database Systems </v-row>
                    <v-row class="i-text indent"> - Human Computer Interactions </v-row>
                    <v-row class="i-text indent"> - Operating Systems </v-row>
                    <v-row class="i-text indent"> - Design & Analysis of Programming Languages </v-row>
                    <v-row class="i-text indent"> - Computer Security & Digital Forensics </v-row>
                </v-col>

                <!-- right side -->
                <v-col :cols="mdAndUp ? 7 : 12">
                    <v-row class="header" :class="{'mobile-spacing': !mdAndUp}"> Experience </v-row>
                    <v-row class="sub-header"> Software Engineer </v-row>
                    <v-row class="text3">May 2024 - Current @ Webconnex</v-row>
                    <v-row style="margin-bottom: 16px">
                        <ul>
                            <li>Currently on the payments team working on their core platform maintaining and improving their products.</li>
                            <!-- <li>Wrote performant front-end components in React.</li>
                            <li>Wrote performant Go backends.</li> -->
                        </ul>
                    </v-row>

                    <v-row class="sub-header" v-if="smAndUp"> Software Engineering Manager </v-row>
                    <v-row class="sub-header" v-if="!smAndUp"> Software Engineering</v-row>
                    <v-row class="sub-header" v-if="!smAndUp"><div style="margin-top: -4px;"> Manager</div></v-row>
                    <v-row class="text3"> June 2022 - March 2024 @ Buildable</v-row>

                    <v-row style="margin-top: 0px;">
                        <b style="width: 100%; margin-top: 4px;">30% - Management</b>
                        <ul>
                            <li>Led a team of 5 direct report engineers working on multiple projects.</li>
                            <li>Made resource allocation decisions for weekly company production.</li>
                            <li>Translated designs into actionable user stories and with LOE engineering estimations.</li>
                            <li>1-1's with team members, focusing on their goals and career development.</li>
                        </ul>
                    </v-row>

                    <v-row style="margin-bottom: 8px; margin-top: 0px;">
                        <b style="width: 100%;">70% - Engineering</b>
                        <ul>
                            <li>Wrote performant front-end components in Vue and Angular.</li>
                            <li>Wrote performant .NET and Laravel backends.</li>
                            <li>Setup and maintained production AWS & Azure environments for both internal and client facing projects.</li>
                            <li>Setup GitLab CI/CD pipelines.</li>
                            <li>Led daily standups as the scrum master for my projects.</li>
                        </ul>
                    </v-row>

                    <v-row class="sub-header"> Software Engineer </v-row>
                    <v-row class="text3"> July 2021 - June 2022 @ Buildable</v-row>
                    <v-row style="margin-bottom: 8px">
                        <ul>
                            <li>Successfully developed and launched a custom ERP system with 4 apps and a central server.</li>
                            <li>Rebuilt client trust and relationship, identifying true remaining project scope and seeing a 6-year-old project to completion and successful launch.<br></li>
                            <li>Wrote performant front-end components in Vue and Angular.</li>
                            <li>Wrote performant Laravel and NodeJS backends.</li>
                            <li>Setup and maintained production AWS environments for both internal and client facing projects.</li>
                            <li>Integrated with MariaDB and Postgres databases with SQL and Sequelize.</li>
                            <li>Integrated 3rd party APIs including: Stripe, QBO, Twilio, Zoho, Azure AD SSO.</li>
                        </ul>
                    </v-row>

                    <v-row class="sub-header" v-if="smAndUp"> Freelance Software Developer </v-row>
                    <v-row class="sub-header" v-if="!smAndUp"> Freelance Software</v-row>
                    <v-row class="sub-header" v-if="!smAndUp"><div style="margin-top: -4px;"> Developer</div></v-row>
                    <v-row class="text3">May 2019 - December 2020 @ Kingdom Web Development LLC</v-row>
                    <v-row style="margin-bottom: 16px">
                        <ul>
                            <li>Wrote performant front-end components in Vue.</li>
                            <li>Wrote performant NodeJS backends.</li>
                            <li>Integrated Stripe into ecommerce sites.</li>
                            <li>Worked directly with clients and designers on implementing and iterating on features.</li>
                        </ul>
                    </v-row>

                    <v-row class="sub-header" v-if="smAndUp"> Servant Engineering Technical Manager </v-row>
                    <v-row class="sub-header" v-if="!smAndUp"> Servant Engineering</v-row>
                    <v-row class="sub-header" v-if="!smAndUp"><div style="margin-top: -4px;"> Technical Manager</div></v-row>
                    <v-row class="text3">Fall 2019 - Spring 2021 @ George Fox University</v-row>
                    <v-row style="margin-top: 0px !important">
                        <ul>
                            <li>Led a team of four building a full-stack web app from scratch</li>
                            <li>Built the frontend in Vue.JS and the backend with C# and Docker.</li>
                            <li>Communicated project requirements and design ideas with the client.</li>
                            <li>Worked directly with a creative agency in an iterative development process.</li>
                            <li>Integrated Stripe.JS to handle donations.</li>
                            <li>Led a team of six to design and build a comprehensive scheduling system.</li>
                            <li>Ensured different phases of design and development progressed and integrated smoothly together.</li>
                            <li>Led weekly sprint meetings.</li>
                            <li>Gave presentations to my advisors and clients.</li>
                        </ul>
                    </v-row>

                </v-col>
            </v-row>
      </v-container>
  </div>
</template>

<script>
  import { useDisplay } from 'vuetify'

    export default {
    setup () {
        const { smAndUp, mdAndUp } = useDisplay()

        return { smAndUp, mdAndUp }
    }
  }
</script>

<style lang="css" scoped>

    a {
        color: black !important;
    }

    .resume {
        font-family: 'Rubik' !important;
        text-align: left;
        max-width: 850px;
        margin: auto;
        position: relative !important;
        right: 5px !important;
    }

    .title {
        font-weight: 800 !important;
        font-size: 42pt !important;
        line-height: 1em;
        letter-spacing: -.02em;
        padding-bottom: 8px !important;
    }

    .sub-title {
        font-style: normal;
        font-size: 14pt;
        line-height: 110%;
        letter-spacing: .02em;
        text-transform: uppercase;
        font-weight: 500;
        padding-bottom: 18px;
    }

    .text {
        text-align: left;
        font-size: 11pt !important;
    }

    .i-text {
        text-align: left;
        font-size: 11pt !important;
        font-style: italic;
    }

    .p-title {
        font-size: 14pt !important;
        font-weight: 800 !important;
    }
    
    .header {
        line-height: 110%;
        letter-spacing: -.02em !important;
        text-transform: uppercase;
        font-weight: 600 !important;
        font-size: 12pt;
        text-decoration-line: underline;
        padding-bottom: 8px !important;
    }

    .sub-header {
        font-size: 20pt !important;
        font-weight: 800 !important;
        text-wrap: nowrap; 
        margin-top: 6px !important;
        width: 100% !important;
        letter-spacing: -.02em;
    }

    .text2 {
        font-size: 12pt !important;
        font-weight: 400 !important;
        margin-top: 8px !important;
    }

    .text3 {
        font-size: 12pt !important;
        font-weight: 400 !important;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    ul {
        list-style-type:disc;
    }

    li {
        font-size: 11pt !important;
        line-height: 14pt;
        padding-bottom: 8px;
        margin-left: 24px;
    }

    .indent {
        margin-left: 4px;
    }

    .mobile-spacing {
        padding-top: 32px;
    }

    @media (max-width: 960px) {
        .title {
        font-size: 32pt !important;
        }

        .sub-title {
            font-style: normal;
            font-size: 12pt;
            line-height: 110%;
            letter-spacing: .02em;
            text-transform: uppercase;
            font-weight: 500;
            padding-bottom: 18px;
        }

        li {
            font-size: 10pt !important;
        }

        .v-row {
            max-width: 85vw;
        }
    }
</style>