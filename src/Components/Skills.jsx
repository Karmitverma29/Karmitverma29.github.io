import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div>
      <div className="skills-container">
        <div className="skills-section">
          <h2 style={{fontWeight:"900",backgroundColor:"#ffffff"}}>Tech Stack</h2>
          <div style={{backgroundColor:"#ffb301",border:"3px solid #ffffff",borderRadius:"10px"}} className="skills-icons">
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/react-native.png" alt="React" />
              <p>React</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/javascript.png" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/html-5--v1.png" alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/css3.png" alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/typescript.png" alt="TypeScript" />
              <p>TypeScript</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/redux.png" alt="Redux" />
              <p>Redux</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/chakra-ui.png" alt="Chakra UI" />
              <p>Chakra UI</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/nodejs.png" alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/mongodb.png" alt="MongoDB" />
              <p>MongoDB</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/express.png" alt="Express.js" />
              <p>Express.js</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/mongoose.png" alt="Mongoose" />
              <p>Mongoose</p>
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h2 style={{fontWeight:"900",backgroundColor:"#ffffff"}}>Tools</h2>
          <div style={{backgroundColor:"#ffb301",border:"3px solid #ffffff",borderRadius:"10px"}} className="skills-icons">
            <div className="skill">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
              <p>GitHub</p>
            </div>
            <div className="skill">
              <img src="data:image/jpeg;base64,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" alt="Netlify" />
              <p>Netlify</p>
            </div>
            <div className="skill">
              <img src="https://img.icons8.com/color/50/000000/heroku.png" alt="Heroku" />
              <p>Heroku</p>
            </div>
            <div className="skill">
          <img src="https://img.icons8.com/color/50/000000/json.png" alt="JSON Server" />
          <p>JSON Server</p>
        </div>
        <div className="skill">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAACFCAMAAABCBMsOAAAAYFBMVEX///8AAACVlZX4+Pjw8PD19fXa2trh4eGxsbE6OjrQ0NCqqqogICDl5eVqamrCwsJ/f3+ioqJycnJPT0+MjIxZWVkaGhp5eXklJSUQEBArKyteXl5FRUU1NTWGhoZjY2Pg9GCNAAAC7klEQVR4nO2ai27CMAxFZ1oehXYblDFgsP3/X45tykZbJ3EcO5GmnB/gSOjK104fHgqFQqFQyMoit8AXy+Myt8KNHexyK9z+DwDI/5/0N4s+t8QKvljllaibb4umzmqxhx/2OSU6MHQZLXa/FhnTuoY/1rkkqv7Ooq8yWWzgnk0eiXk7sGjnWSyeYchzDokOxuRI6+PE4jG9xNNEAuAptUTVIBZN6rRuEQmAbVqJOSoBkDat45RmSevCIpG2/L1YLV7SSaysEinL38FhcUglgafUkCit0wEyJM04efVYvKaQWHsk0pS/q9fiqi/hSqlBPa3VkWBx1J6te78DqK9qixPJ4qQ7TqY1D0e1/PlTatBMK1bzcBo9CUpKDWpprc8BFmetw4qt5uEolT97zcPRSetboMWbhgS2jLlRWNXml2CLi/x2svH/6gTxw0rX+n90Qitd/nb+30QQvvwtWRIAso8WoSk1iKY1ZIAMERwnjJQaBNM6Y0sAzKQk6ggJAKnZ6lvG3AitaqGzdIzMbO39P+RE5FWNn1KDQFqrkJqHc45f1WjLmJvoVc13MqERO1t5s3RM5GylL2Nu4lY1/8mERtRhhVPzcCLKXyUmAcBP67ugxTtXInaADOGOkw9Riw+eRPgy5oa3qnE2EBctR0IupQZGWjvaNS+EU/g4CTuZ0Ag+rEgNkCGh4yS25uEElr/4mocTVP4qqVk65hoyTtwvYzEEvKotXY+EcRzotwSZmodDLn86KTVQ08q/E1C40CS0UmogpbWmPz/wIH0AKVnzcAjlj/gyFgPhVY36MhaD91VNN6UGT1ornVk6xvMBpHzNw3GWv5ryfi3B0ZVWjZqH4yh/3Js7B/tsTZFSgzWt0suYG8uqFnFz52C50+vVPBy0/MXd3DlgaU2XUgOSVtmTCY3pbLV/pqjH5ANI7ZqHMy5/WsuYm9EZNHVKDYO0pk+p4T6tcS9jMdy9qqWpeTh/5W87y0fiD9kLhUKh8B/5BIN4KH/5BEXEAAAAAElFTkSuQmCC" alt="Vercel" />
          <p>Vercel</p>
        </div>
        <div className="skill">
          <img src="https://img.icons8.com/color/50/000000/npm.png" alt="npm" />
          <p>npm</p>
        </div>
        <div className="skill">
          <img src="https://www.cyclic.sh/images/cyclic-logo.png" alt="Cyclic" />
          <p>Cyclic</p>
        </div>
        <div className="skill">
          <img src="data:image/png;base64,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" alt="Swagger" />
          <p>Swagger</p>
        </div>
      </div>
    </div>
  </div>
</div>
);
};

export {Skills};