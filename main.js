let currentPage = "HOME";

document.body.style.margin = "0";
document.body.style.fontFamily = "Segoe UI, Arial";
document.body.style.background = "linear-gradient(180deg, #0f172a 0%, #071029 60%)";
document.body.style.color = "#e6eef8";

// ===== HEADER =====
const header = document.createElement("div");
header.style.cssText = `
    background: linear-gradient(90deg,#6ee7b7,#3b82f6);
    color:#04263b;
    padding:18px 20px;
    text-align:center;
    font-size:20px;
    font-weight:800;
    letter-spacing:0.6px;
    border-bottom-left-radius:10px;
    border-bottom-right-radius:10px;
    box-shadow: 0 6px 20px rgba(2,6,23,0.6);
`;
header.textContent = "JavaScript All chapters";
document.body.appendChild(header);

// ===== MENU BTN =====
const menuBtn = document.createElement("div");
menuBtn.textContent = "☰ MENU";
menuBtn.style.cssText = `
 position:fixed;
    top:18px;
    left:18px;
    z-index:999;
    cursor:pointer;
    padding:10px 14px;
    background:linear-gradient(180deg,#111827,#0f172a);
    color:#e6f0ff;
    font-size:15px;
    border-radius:8px;
    box-shadow:0 6px 18px rgba(2,6,23,0.6);
    border:1px solid rgba(255,255,255,0.04);
`;
document.body.appendChild(menuBtn);

// ===== SIDEBAR =====
const sidebar = document.createElement("div");
sidebar.style.cssText = `
    position:fixed;
    top:0;
    left:-260px;
    width:240px;
    height:100%;
    background:linear-gradient(180deg,#021224,#052237);
    padding-top:72px;
    transition:left 0.28s cubic-bezier(.2,.9,.2,1);
    box-shadow: 6px 0 30px rgba(2,6,23,0.6);
    border-top-right-radius:12px;
    border-bottom-right-radius:12px;
    overflow:auto;
`;
document.body.appendChild(sidebar);

// ===== NAV =====
const nav = document.createElement("div");
nav.style.cssText = `
    display:flex;
    gap:8px;
    justify-content:center;
    align-items:center;
    padding:14px;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
    // z-index:10;
`;

// ===== PAGES =====
const pages = ["HOME", "COURSES", "ABOUT", "CONTACT"];
const navButtons = {};
const sideButtons = {};

pages.forEach(p => {
    const b1 = document.createElement("button");
    b1.textContent = p;
    b1.style.cssText = `
            margin:6px;
            padding:8px 14px;
            background:linear-gradient(180deg,#0ea5a4,#0284c7);
            border:none;
            color:#f8fbff;
            border-radius:10px;
            cursor:pointer;
            font-weight:700;
            box-shadow: 0 6px 14px rgba(2,6,23,0.45);
            transition:transform .15s ease, box-shadow .15s ease;
  `;
    b1.onmouseenter = () => { b1.style.transform = "translateY(-3px)"; b1.style.boxShadow = "0 10px 22px rgba(2,6,23,0.55)"; };
        b1.onmouseleave = () => { b1.style.transform = ""; b1.style.boxShadow = "0 6px 14px rgba(2,6,23,0.45)"; };
        nav.appendChild(b1);
        navButtons[p] = b1;
    
    const b2 = document.createElement("div");
    b2.textContent = p;
    b2.style.cssText = `
            padding:14px 18px;
            color:#cfe9ff;
            cursor:pointer;
            border-bottom:1px solid rgba(255,255,255,0.03);
            transition:background .12s ease, color .12s ease;
            display:flex;
            align-items:center;
            gap:10px;
  `;
    b2.onmouseenter = () => { b2.style.background = "linear-gradient(90deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02))"; b2.style.color = "#ffffff"; };
        b2.onmouseleave = () => { b2.style.background = "transparent"; b2.style.color = "#cfe9ff"; };
        sidebar.appendChild(b2);
        sideButtons[p] = b2;
});

document.body.appendChild(nav);

const actionBar = document.createElement("div");
actionBar.style.cssText = `
 display:flex;
    gap:10px;
    justify-content:center;
    align-items:center;
    // padding:12px;
    // position:sticky;
    top:64px;
    background:linear-gradient(180deg, rgba(255,255,255,0.01), rgba(255,255,255,0.00));
    z-index:9;
`;

const insertBtn = document.createElement("button");
insertBtn.textContent = "INSERT";
const replaceBtn = document.createElement("button");
replaceBtn.textContent = "REPLACE";
const removeBtn = document.createElement("button");
removeBtn.textContent = "REMOVE";

[insertBtn, replaceBtn, removeBtn].forEach(b => {
    b.style.cssText = `
           margin:6px;
            padding:10px 16px;
            background:linear-gradient(180deg,#334155,#0b1220);
            border:none;
            color:#cfe9ff;
            border-radius:10px;
            font-weight:700;
            cursor:pointer;
            box-shadow: 0 8px 20px rgba(2,6,23,0.5);
            transition:transform .12s ease, opacity .12s ease;
  `;
    b.onmouseenter = () => { b.style.transform = "translateY(-3px)"; b.style.opacity = "0.95"; };
        b.onmouseleave = () => { b.style.transform = ""; b.style.opacity = "1"; };
        actionBar.appendChild(b);
});

document.body.appendChild(actionBar);

// ===== MAIN =====
const main = document.createElement("div");
main.style.cssText = `
padding:28px;
    min-height:320px;
    max-width:980px;
    margin:28px auto;
    background: linear-gradient(180deg,#061226, #071633);
    border-radius:14px;
    box-shadow: 0 20px 50px rgba(2,6,23,0.6);
    border:1px solid rgba(255,255,255,0.02);
    color:#e6f3ff;
`;
document.body.appendChild(main);

// ===== FOOTER =====
const footer = document.createElement("div");
footer.style.cssText = `
 background:linear-gradient(90deg,#0f172a,#021024);
    color:#9fbfe6;
    text-align:center;
    padding:18px;
    margin-top:20px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    box-shadow: 0 -6px 20px rgba(2,6,23,0.45);
`;
footer.textContent = "zakariakalidadam@gmail.Com";
document.body.appendChild(footer);

// ===== MENU TOGGLE =====
menuBtn.onclick = () => {
    sidebar.style.left = sidebar.style.left === "0px" ? "-240px" : "0px";
};

// ===== CONTENT =====
const list = document.createElement("ol");
list.style.cssText = `
    list-style: decimal;
    padding:12px 16px;
    background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(0,0,0,0.02));
    border-radius:10px;
    max-height:360px;
    overflow:auto;
    margin:12px 0 0 0;
`;
function styleExampleElements(pre, runBtn, output) {
        pre.style = "background:#071631;color:#c6f1ff;padding:12px;border-radius:10px;overflow:auto;font-family:monospace;font-size:13px;line-height:1.4;";
        runBtn.style = "margin-top:8px;padding:8px 12px;background:linear-gradient(180deg,#06b6d4,#0284c7);color:#021024;border:none;border-radius:8px;cursor:pointer;font-weight:700;";
        output.style = "margin-top:8px;background:#021024;padding:12px;color:#bfe7ff;border-radius:8px;white-space:pre-wrap;min-height:44px;font-family:monospace;font-size:13px;";
}

function loadHome() {
    currentPage = "HOME";
    main.innerHTML = `
        <h2>Home</h2>
        <p>Welcome — I'm passionate about Computer Science. I love solving problems, building elegant software, and learning new technologies every day.</p>
        <p>My interests span algorithms, data structures, web development, and systems design. I enjoy turning ideas into working applications, exploring optimization, and collaborating with others to create useful, reliable solutions.</p>
        <p>Through continuous practice and real projects I aim to grow as a developer and contribute meaningful software that helps people.</p>
    `;
    // main.innerHTML = "";
}

function loadCourses() {
    currentPage = "COURSES";
    main.innerHTML = "";
    list.innerHTML = "";

    const container = document.createElement("div");
    container.style = "display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:12px;";

    const examplesMap = {
        7: [
            { title: "Object Literal Notation", code: "let student ={name:'Zacky',age:'18',major:'Computer Science'}; console.log('Object Literal Notation:', student);" },
            { title: "Construction Function", code: "function student(name,age,major){this.name =name;this.age =age; this.major =major;} let student1 = new student('Ali','20','computer Science'); student2 = new student('Abdi','25','Engineering'); console.log('construction Function: ', student1);console.log('construction Function: ', student2)" },
            { title: "Array map/filter", code: "const nums=[1,2,3,4]; console.log(nums.map(n=>n*2).filter(n=>n>4));" },
            { title: "Modifying properties", code: "let studentObj = { name: 'Ali', age: 20, major: 'Computer Science' }; studentObj.age = 21; studentObj['name'] = 'Amina'; console.log('Example: Modifying properties', studentObj);" },
            { title: "Method using this", code: "let person = { name: 'Amina' }; person.greet = function() { console.log('Example: Hello, my name is ' + this.name); }; person.greet();" },
            { title: "for...in iteration", code: "let st = { name: 'Amina', age: 21, major: 'CS' }; for (let key in st) { console.log('Example: for...in', key + ': ' + st[key]); }" },
            { title: "Object.entries", code: "let st2 = { name: 'Amina', age: 21, major: 'CS' }; Object.entries(st2).forEach(([key, value]) => { console.log('Example: Object.entries', key + ': ' + value); });" },
            { title: "JSON-like object printed", code: "console.log('Example: JSON-like', { name: 'Ali', age: 20, major: 'Computer Science' });" },
            { title: "JSON.parse", code: "let jsonData = '{\"name\":\"Ali\",\"age\":20,\"major\":\"Computer Science\"}'; let parsed = JSON.parse(jsonData); console.log('Example: JSON.parse', parsed);" }
        ],
        8: [
            { title: "Selecting elements by class name", code: `// create some .box elements and append to body\nconst wrapper1 = document.createElement('div'); wrapper1.style.display='flex'; wrapper1.style.gap='8px';\nfor(let i=0;i<3;i++){const d=document.createElement('div');d.className='box';d.textContent='Box '+(i+1);d.style.padding='10px';d.style.background='#eee';wrapper1.appendChild(d);}document.body.appendChild(wrapper1);\nlet boxElements = document.getElementsByClassName('box'); for (let i = 0; i < boxElements.length; i++) { boxElements[i].style.border = '3px dashed black'; } console.log('Styled', boxElements.length, \"elements with class 'box'\");` },
            { title: "Selecting elements by tag name", code: `// create paragraphs\nconst wrapP=document.createElement('div'); for(let i=0;i<2;i++){const p=document.createElement('p');p.textContent='Paragraph '+(i+1);wrapP.appendChild(p);}document.body.appendChild(wrapP);\nlet paragraphElements = document.getElementsByTagName('p'); for (let i = 0; i < paragraphElements.length; i++) { paragraphElements[i].style.fontStyle = 'italic'; paragraphElements[i].style.margin = '10px'; } console.log('Styled', paragraphElements.length, 'paragraphs');` },
            { title: "querySelector single (p)", code: `// ensure a p exists\nconst p1=document.createElement('p');p1.textContent='First paragraph';document.body.appendChild(p1);\nlet firstParagraph = document.querySelector('p'); console.log('First paragraph element:', firstParagraph);` },
            { title: "querySelector single (.box)", code: `// ensure a .box exists\nconst bx=document.createElement('div');bx.className='box';bx.textContent='Single box';document.body.appendChild(bx);\nlet firstBox = document.querySelector('.box'); console.log('First .box element:', firstBox);` },
            { title: "querySelectorAll paragraphs", code: `// create paragraphs\nconst pgwrap=document.createElement('div');['A','B','C'].forEach(t=>{const p=document.createElement('p');p.textContent='Paragraph '+t;pgwrap.appendChild(p)});document.body.appendChild(pgwrap);\nlet allparagraphs = document.querySelectorAll('p'); console.log('All paragraphs NodeList length:', allparagraphs.length);` },
            { title: "querySelectorAll div.box", code: `// create div.box elements\nconst boxwrap=document.createElement('div');for(let i=0;i<2;i++){const d=document.createElement('div');d.className='box';d.textContent='DivBox '+(i+1);boxwrap.appendChild(d);}document.body.appendChild(boxwrap);\nlet allBoxes = document.querySelectorAll('div.box'); console.log('All div.box elements:', allBoxes.length);` },
            { title: "Get innerHTML by id", code: `const el=document.createElement('div');el.id='myId';el.innerHTML='<b>Bold</b> content';document.body.appendChild(el);\nlet elementHtml = document.getElementById('myId')?.innerHTML; console.log('innerHTML of #myId:', elementHtml);` },
            { title: "Get href of anchor", code: `const a=document.createElement('a');a.id='myLink';a.href='https://example.com';a.textContent='Example';document.body.appendChild(a);\nlet elementHref = document.getElementById('myLink')?.href; console.log('href of #myLink:', elementHref);` },
            { title: "Change style of element", code: `const a2=document.createElement('a');a2.id='myLink2';a2.href='#';a2.textContent='Link2';document.body.appendChild(a2);\nlet elementLink = document.getElementById('myLink2'); if (elementLink) { elementLink.style.textDecoration = 'none'; console.log('Removed textDecoration for #myLink2'); } else console.log('#myLink2 not found');` },
            { title: "innerText vs textContent", code: `const p=document.createElement('p');p.id='paragraph';p.innerHTML='Orig <span id=\"span\">span</span>';document.body.appendChild(p);\nlet paragraph = document.getElementById('paragraph'); if (paragraph) { paragraph.innerText = 'Setting p tag text using innerText property'; console.log('innerText set'); paragraph.textContent = 'Setting p tag text using textContent property'; console.log('textContent set'); } else console.log('#paragraph not found');` },
            { title: "setAttribute on anchor", code: `const anchor = document.createElement('a'); anchor.id='my-link'; anchor.textContent='SetAttr'; document.body.appendChild(anchor);\nif (anchor) { anchor.setAttribute('class', 'anchor-class'); console.log('Set class on #my-link to \"anchor-class\"'); } else console.log('#my-link not found');` },
            { title: "createElement and append", code: `let createdElement = document.createElement('p'); createdElement.innerText = 'This is created element'; document.body.appendChild(createdElement); console.log('Appended new <p> to body');` },
            { title: "remove element / removeChild", code: `const parent=document.createElement('div'); const span=document.createElement('span'); parent.id='paragraph'; span.id='span'; span.textContent='to-remove'; parent.textContent='Parent: '; parent.appendChild(span); document.body.appendChild(parent);\nlet element = document.getElementById('paragraph'); let sp = document.getElementById('span'); if (element && sp && element.contains(sp)) { element.removeChild(sp); console.log('Removed #span from #paragraph using removeChild'); } else if (element) { element.remove?.(); console.log('Tried element.remove() if supported'); } else console.log('#paragraph or #span not found');` },
            { title: "replaceChild example", code: `const oldElement = document.createElement('p'); oldElement.id='paragraph'; oldElement.textContent='Old'; document.body.appendChild(oldElement);\nif (oldElement && oldElement.parentElement) { let newElement = document.createElement('p'); newElement.innerText = 'New paragraph element'; oldElement.parentElement.replaceChild(newElement, oldElement); console.log('Replaced #paragraph with new <p>'); } else console.log('#paragraph or its parent not found');` },
            { title: "insertBefore example", code: `const parentElement = document.createElement('div'); parentElement.id='paragraph'; const existingSpan = document.createElement('span'); existingSpan.id='span2'; existingSpan.innerText='EXISTING'; parentElement.appendChild(existingSpan); document.body.appendChild(parentElement);\nlet parent = document.getElementById('paragraph'); let existing = document.getElementById('span2'); if (parent) { let newspan = document.createElement('span'); newspan.innerText = 'New span element'; if (existing && parent.contains(existing)) parent.insertBefore(newspan, existing); else parent.appendChild(newspan); console.log('Inserted new <span> before #span2 (or appended)'); } else console.log('#paragraph not found');` }
        ],
        9: [
            { title: "Button Click Event", code: `const btn = document.createElement('button'); btn.id='myButton'; btn.textContent='Click me'; document.body.appendChild(btn); btn.addEventListener('click', ()=>{ console.log('Button clicked!'); }); console.log('Button click event set up.');` },
            { title: "Mouseover and Mouseout Events", code: `const el=document.createElement('div'); el.id='myElement'; el.textContent='Hover me'; el.style.width='120px'; el.style.height='40px'; el.style.background='blue'; el.style.color='white'; el.style.display='flex'; el.style.alignItems='center'; el.style.justifyContent='center'; document.body.appendChild(el);\nel.addEventListener('mouseover',()=>{ el.style.backgroundColor='green'; console.log('mouseover'); }); el.addEventListener('mouseout',()=>{ el.style.backgroundColor='blue'; console.log('mouseout'); }); console.log('Mouseover and mouseout events set up.');` },
            { title: "Keyboard Events", code: `const input=document.createElement('input'); input.id='textInput'; const out=document.createElement('div'); out.id='output'; input.placeholder='Type here'; document.body.appendChild(input); document.body.appendChild(out);\ninput.addEventListener('keydown', e=>{ out.innerText = 'Keydown: '+e.key; console.log('keydown', e.key); }); input.addEventListener('keypress', e=>{ out.innerText += ' Inkeypress: '+e.key; console.log('keypress', e.key); }); input.addEventListener('keyup', e=>{ out.innerText += ' InKeyup: '+e.key; console.log('keyup', e.key); }); console.log('Keyboard events set up.');` },
            { title: "Focus and Blur Events", code: `const ti=document.createElement('input'); ti.id='textInput'; const od=document.createElement('div'); od.id='output'; ti.placeholder='focus/blur'; document.body.appendChild(ti); document.body.appendChild(od);\nti.addEventListener('focus', ()=>{ od.innerText='Element focused!'; od.className='focused'; console.log('focus'); }); ti.addEventListener('blur', ()=>{ od.innerText='Element blurred!'; od.className='blurred'; console.log('blur'); }); console.log('Focus and blur events set up.');` },
            { title: "Input and Form Submission Events", code: `const form=document.createElement('form'); form.id='myForm'; const txt=document.createElement('input'); txt.id='textInput'; txt.placeholder='type'; const out2=document.createElement('div'); out2.id='output'; const s=document.createElement('button'); s.type='submit'; s.textContent='Send'; form.appendChild(txt); form.appendChild(s); document.body.appendChild(form); document.body.appendChild(out2);\nfunction updateOutput(msg,cls){ out2.innerText=msg; out2.className=cls; console.log(msg); }\ntxt.addEventListener('input', ()=>{ if(txt.value!='') updateOutput('Input changed!','valid'); else updateOutput('Input changed with empty!','invalid'); }); form.addEventListener('submit', e=>{ e.preventDefault(); updateOutput('Form submitted!','valid'); }); console.log('Input and form submission events set up.');` },
            { title: "Event Delegation", code: `const ul=document.createElement('ul'); ul.id='parentList'; ['One','Two','Three'].forEach(t=>{const li=document.createElement('li'); li.textContent=t; ul.appendChild(li); }); document.body.appendChild(ul);\nul.addEventListener('click', function (event) { if (event.target && event.target.tagName === 'LI') { console.log('Clicked on: ' + event.target.innerText); } }); console.log('Event delegation set up.');` }
        ]
    };

    function createExamplePanel(example) {
                const existing = main.querySelector(".example-panel");
                if (existing) existing.remove();

                const panel = document.createElement("div");
                panel.className = "example-panel";
                panel.style = "margin-top:12px;padding:14px;border-radius:12px;background:linear-gradient(180deg,#07122b,#041220);border:1px solid rgba(255,255,255,0.02);";

                const title = document.createElement("h3");
                title.textContent = example.title;
                title.style = "margin:0 0 10px 0;color:#9ee7ff";

                const pre = document.createElement("pre");
                const runBtn = document.createElement("button");
                runBtn.textContent = "Run";
                const output = document.createElement("pre");

                styleExampleElements(pre, runBtn, output);
                pre.textContent = example.code;

                runBtn.onclick = async () => {
                        output.textContent = "";
                        const capturedConsole = {
                                log: (...args) => { output.textContent += args.map(a => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' ') + '\n'; }
                        };
                        try {
                                const fn = new Function('console', 'return (async ()=>{ ' + example.code + ' })()');
                                const res = fn(capturedConsole);
                                if (res && typeof res.then === "function") {
                                        await res;
                                }
                        } catch (err) {
                                output.textContent += 'Error: ' + err + '\n';
                        }
                };

                panel.appendChild(title);
                panel.appendChild(pre);
                panel.appendChild(runBtn);
                panel.appendChild(output);
                main.appendChild(panel);
        }

        [7, 8, 9].forEach(ch => {
                const btn = document.createElement("button");
                btn.textContent = `Chapter ${ch} Examples`;
                btn.style = "padding:10px 14px;border-radius:10px;background:linear-gradient(180deg,#0891b2,#0ea5a4);color:#021024;border:none;cursor:pointer;font-weight:700;box-shadow:0 10px 20px rgba(2,6,23,0.45);";
                btn.onclick = () => {
                        list.innerHTML = "";
                        (examplesMap[ch] || []).forEach((ex, idx) => {
                                const li = document.createElement("li");
                                li.textContent = ex.title;
                                li.style = "padding:10px 12px;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.02);color:#dff8ff;";
                                li.onmouseenter = () => li.style.background = "rgba(255,255,255,0.02)";
                                li.onmouseleave = () => li.style.background = "transparent";
                                li.onclick = () => createExamplePanel(ex);
                                list.appendChild(li);
                                if (idx === 0) li.click();
                        });
                        if (!list.parentElement) main.appendChild(list);
                };
                container.appendChild(btn);
        });

        main.appendChild(container);
        container.querySelector("button")?.click();
}

function loadAbout() {
    currentPage = "ABOUT";
    main.innerHTML = `
    <h2>About Me</h2>
    <div style="display:flex;gap:20px;flex-wrap:nowrap; width:100%; align-items:flex-start;">
      <img src="my PiCt.jpg" style="width:360px;height:330px;border-radius:8px;object-fit:cover;">
      <div style="max-width:550px;">
        <h3>My Name Is Zakaria Kalid Adan</h3>
        <p>I am a student in the Faculty of Computer Science and IT at Jazeera University. <strong>ROOM: 402</strong> I’m passionate about programming and aspire to become a skilled programmer in the future. My goal is to learn and work in web development and software programming.</p>
        <p><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js</p>
        <p><strong>ID:</strong> <a href="tel:Cs-1501010" style="text-decoration:none; color:#259;" >Cs-1501010</a></p>
        <p><strong>Phone:</strong> <a href="tel:+252612345678" style="text-decoration:none; color:#259;" >+252 617 702080</a></p>
        <p><strong>Email:</strong> <a href="mailto:Zakariakalid@gmail.com" style="text-decoration:none; color:#259;">Zakariakalid@gmail.com</a></p>
        <p>
        
          <a href="https://somali-unity-in-diversity-hj2ypsvq2-mrzaakirs-projects.vercel.app" target="_blank" rel="noopener" style="text-decoration:none; color:#259;">My Personal Portfolio</a>
          &nbsp;|&nbsp;
          <a href="https://github.com" target="_blank" rel="noopener" style="text-decoration:none; color:#259;">Visit My GitHub</a>
        </p>
      </div>
    </div>
    `;
}

function loadContact() {
        currentPage = "CONTACT";
        main.innerHTML = "";
        
        const form = document.createElement("form");
        form.style = "display:flex;flex-direction:column;gap:12px;max-width:560px;";
        
        const name = document.createElement("input");
        name.placeholder = "Your Name";
        name.style = "padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:#e6f3ff;";
        
        const email = document.createElement("input");
        email.placeholder = "Email";
        email.type = "email";
        email.style = "padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:#e6f3ff;";
        
        const msg = document.createElement("textarea");
        msg.placeholder = "Message";
        msg.style = "padding:10px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:#e6f3ff;min-height:100px;";
        
        const info = document.createElement("p");
        info.style.color = "tomato";
        info.style.margin = "0";
        
        const submit = document.createElement("button");
        submit.textContent = "Submit";
        submit.style = "padding:10px;border-radius:8px;background:linear-gradient(180deg,#06b6d4,#0284c7);color:#021024;border:none;font-weight:700;cursor:pointer;";
        
        form.onsubmit = e => {
                e.preventDefault();
                
                if (name.value.trim() === "" || email.value.trim() === "" || msg.value.trim() === "") {
                        info.style.color = "tomato";
                        info.textContent = "Fill the empty fields.";
                }
                else if (!email.value.includes("@")) {
                        info.style.color = "tomato";
                        info.textContent = "Please enter a valid email.";
                }
                else {
                        info.style.color = "lightgreen";
                        info.textContent = "Form submitted successfully.";
                        form.reset();
                }
        };
        
        [name, email, msg, submit, info].forEach(el => form.appendChild(el));
        main.appendChild(form);
}

function loadPage(p) {
    sidebar.style.left = "-240px";
    if (p === "HOME") loadHome();
    if (p === "COURSES") loadCourses();
    if (p === "ABOUT") loadAbout();
    if (p === "CONTACT") loadContact();
}

pages.forEach(p => {
    navButtons[p].onclick = () => loadPage(p);
    sideButtons[p].onclick = () => loadPage(p);
});

// ===== INSERT / REPLACE / REMOVE =====
insertBtn.onclick = () => {
    if (currentPage === "HOME") {
        main.innerHTML += "<p>Inserted content</p>";
    }
    if (currentPage === "COURSES") {
        const topics = ["SQL", "Tailwind CSS", "HTML/CSS", "JavaScript", "React", "Node.js"];
        topics.forEach(t => {
            const li = document.createElement("li");
            li.textContent = t;
            li.style = "padding:8px 10px;cursor:pointer;border-bottom:1px solid rgba(0,0,0,0.05);";
            list.appendChild(li);
        });
        if (!list.parentElement) main.appendChild(list);
    }
    if (currentPage === "ABOUT") {
        main.innerHTML += "<p>Extra about info added</p>";
    }
};

replaceBtn.onclick = () => {
    if (currentPage === "HOME") {
        main.innerHTML = "<h2>Home Replaced</h2>";
    }
    if (currentPage === "COURSES") {
        list.innerHTML = "";
        ["React", "Node", "MongoDB"].forEach(c => {
            const li = document.createElement("li");
            li.textContent = c;
            list.appendChild(li);
        });
    }
    if (currentPage === "ABOUT") {
        main.innerHTML = "<h2>About Updated</h2>";
    }
};

removeBtn.onclick = () => {
    if (currentPage === "HOME") main.innerHTML = "";
    if (currentPage === "COURSES" && list.lastChild) list.removeChild(list.lastChild);
    if (currentPage === "ABOUT") main.innerHTML = "";
};


loadHome();