import React from "react";

const MySkills = () => {
  return (
    <div className="mySkills">
      <div>
        <h1>My Skills</h1>
        <div id="line"></div>
        <p >My journey as a developer has equipped me with a versatile skill set that includes:</p>
        <ul>
          <li>
            <h3>JavaScript:</h3> My go-to language for creating dynamic
            and interactive web applications
          </li>
          <li>
            <h3>React:</h3> I'm well-versed in building modern,
            single-page applications with the React library.
          </li>
          <li>
            <h3>React Native:</h3> I've explored the world of mobile app
            development, creating cross-platform solutions with React Native.
          </li>
          <li>
            <h3>Laravel:</h3> As a PHP framework, Laravel has been a
            valuable tool in my toolkit for building robust web applications.
          </li>
          <li>
            <h3>PHP:</h3> I have a strong foundation in PHP, allowing me
            to develop server-side logic with ease.
          </li>
          <li>
            <h3>SQL:</h3> Database management and querying are second
            nature to me, thanks to my proficiency in SQL.
          </li>
          <li>
            <h3>HTML & CSS:</h3> Crafting clean and responsive front-end
            interfaces is something I enjoy, utilizing HTML and CSS to bring
            designs to life.
          </li>
          <li>
            <h3>Tailwind CSS:</h3> I'm skilled in using Tailwind CSS to
            expedite the process of styling and creating beautiful, user-friendly
            interfaces.
          </li>
        </ul>
      </div>
      <div>
        <div className="row">
          <div className="column">
            <img src="/vite.svg" />
            <img src="/react.png" />
            <img src="/node.png" />
            <img src="/js.png" />
            <img src="/html.png" />
            <img src="mist.jpg" />
            <img src="paris.jpg" />
          </div>
          <div className="column" >
            <img id="sql" src="/sql.png" />

            <img src="/laravel.png" />
            <img src="wedding.jpg" />
            <img src="mountainskies.jpg" />
            <img src="rocks.jpg" />
            <img src="underwater.jpg" />
          </div>
        </div>
      </div>


    </div >
  );
};

export default MySkills;
