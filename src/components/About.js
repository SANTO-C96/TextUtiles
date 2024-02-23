import React, {useState} from 'react'

export default function About() {
    const [myStyle, setmyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const [btnText, setBtnText] = useState('Enable Drak Mode ')

   const toggleStyle = () => {
        if(myStyle.color === 'white'){
            setmyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText("Enable Dark mode");
        }
        else{

            setmyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText("Enable Light mode");
        }
    }
  return (
    <div className='container mb-3' style={myStyle}>
        <h2 className='my-3'>About Us</h2>
         <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Dveloper
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This Text Utiles WEB is developed by santosh kumar singh.</strong>
        <br />
      </div> 
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        About The WEBSITE OWNER
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      My name is santosh kumar singh. I am a smart working engineering graduate specialised in information technology with an over all CGPA of 7.5. Along with my degree, i learned Java as a programming language and various technologies like html, css, javascript, bootstarp, react js . Coming to my project section during my academic year I did 3 projects but one of my favorite project is web based news aggregator and my final year project was discussion forum .it was during my project development I discovered that I am a team player and enjoy collaborating on projects. I am truly passionate about software developer/web developer and eager to bring my skills and strength to any team.i believe my experience and enthusiasm make me a great fit , and look forward to contributing to any team's success. That's all about me thank you.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle}data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        About Website Features 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>Here are some potential features of a Text Utilities application, organized in point form:</strong>
  Text Formatting:
  <br />
  <br />

Bold, italic, underline formatting options.
Text alignment (left, center, right).
Font size and style selection.
<br />
  <br />
Text Conversion:
<br />
  <br />

Case conversion (upper case, lower case, title case).
Convert text to ASCII or Unicode.
Remove extra spaces or formatting.
<br />
  <br />
Text Manipulation:
<br />
  <br />

Find and replace functionality.
Trim whitespace from the beginning and end of text.
Word count and character count.
      </div>
    </div>
  </div>
  <div className='container my-3 mb-3'>
<button type='button' onClick={toggleStyle}  className="btn btn-primary">{btnText}</button>
</div>
</div>

    </div>
  )
}
