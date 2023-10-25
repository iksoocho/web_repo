//object2.js

const students = [
    {sno:'001', sname:"최해주", engScore:80, mathScore:85},
    {sno:'002', sname:"김채빈", engScore:60, mathScore:65},
    {sno:'003', sname:"최다예", engScore:70, mathScore:75},
    {sno:'004', sname:"조익수2", engScore:100, mathScore:95}
]

const member = new Member();



member.makeHtml2(students);  
member.showPage(document.getElementById('show'));





